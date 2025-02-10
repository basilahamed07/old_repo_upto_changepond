import os
from flask import Flask, jsonify, request
from flask_cors import CORS
from dotenv import load_dotenv
from models import db, Product
from router import register_routes
from flask_migrate import Migrate
from flask_jwt_extended import JWTManager, jwt_required, get_jwt_identity
from flask_mail import Mail, Message
from reportlab.lib.pagesizes import letter
from reportlab.pdfgen import canvas
from werkzeug.utils import secure_filename
from transformers import pipeline

load_dotenv()  # Load environment variables from .env file

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv("DATABASE_URL")
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.secret_key = os.getenv("SECRET_KEY")
app.config['JWT_SECRET_KEY'] = os.getenv("JWT_SECRET_KEY")

# Flask-Mail configuration
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = "basilahamed46@gmail.com"  # Your email
app.config['MAIL_PASSWORD'] =  "dhqi eihg aqsn gwiv"
app.config['MAIL_DEFAULT_SENDER'] = "basilahamed46@gmail.com"

CORS(app)
db.init_app(app)
migrate = Migrate(app, db)
jwt = JWTManager(app)
mail = Mail(app)

# Load a text generation model
# chatbot = pipeline("text-generation", model="gpt2")
chatbot = pipeline("text-generation", model="EleutherAI/gpt-neo-1.3B", pad_token_id=50256)


with app.app_context():
    db.create_all()

# Register the API routes
register_routes(app)

# def generate_pdf(products):
#     pdf_filename = "product_report.pdf"
#     c = canvas.Canvas(pdf_filename, pagesize=letter)
#     width, height = letter

#     c.drawString(100, height - 50, "Product Report")
#     c.drawString(100, height - 70, "ID    Name         Price     Stock    Category")

#     y_position = height - 100
#     for product in products:
#         c.drawString(100, y_position, f"{product.id}    {product.name}    {product.price}    {product.stock_quantity}    {product.category}")
#         y_position -= 20

#     c.save()
#     return pdf_filename

def generate_pdf(products):
    pdf_filename = "product_report.pdf"
    c = canvas.Canvas(pdf_filename, pagesize=letter)
    width, height = letter

    # Separate products into low stock and regular stock
    low_stock_products = [product for product in products if product.stock_quantity < 10]
    regular_stock_products = [product for product in products if product.stock_quantity >= 10]

    # Title and headers
    c.drawString(100, height - 50, "Product Report")
    c.drawString(100, height - 70, "ID    Name         Price     Stock    Category")

    y_position = height - 100

    # Add low stock products to the PDF
    if low_stock_products:
        c.drawString(100, y_position, "Low Stock Items:")
        y_position -= 20
        for product in low_stock_products:
            c.drawString(100, y_position, f"{product.id}    {product.name}    {product.price}    {product.stock_quantity}    {product.category} (Low Stock)")
            y_position -= 20

    # Add regular stock products to the PDF
    if regular_stock_products:
        c.drawString(100, y_position, "Regular Stock Items:")
        y_position -= 20
        for product in regular_stock_products:
            c.drawString(100, y_position, f"{product.id}    {product.name}    {product.price}    {product.stock_quantity}    {product.category}")
            y_position -= 20

    c.save()
    return pdf_filename

@app.route('/chat', methods=['POST'])
def chat():
    user_input = request.json.get('message')

    response = chatbot(user_input, max_length=50, num_return_sequences=1,  truncation=True)
    return jsonify({'response': response[0]['generated_text'].strip()})




@app.route('/send-report', methods=['POST'])
@jwt_required()
def send_report():
    current_user_id = get_jwt_identity()
    data = request.form
    email = data.get('email')

    if not email:
        return jsonify({'error': 'Email is required'}), 400

    # Fetch products for the current user
    products = Product.query.filter_by(user_id=current_user_id).all()
    if not products:
        return jsonify({'error': 'No products found for this user'}), 404

    pdf_filename = generate_pdf(products)

    try:
        msg = Message('Product Report', recipients=[email])
        msg.body = 'Please find attached the product report.'
        with app.open_resource(pdf_filename) as fp:
            msg.attach(pdf_filename, 'application/pdf', fp.read())

        mail.send(msg)
        return jsonify({'message': 'Email sent successfully!'}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500
    finally:
        if os.path.exists(pdf_filename):
            os.remove(pdf_filename)

if __name__ == '__main__':
    app.run(debug=True)