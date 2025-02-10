from flask import jsonify, request
from werkzeug.security import generate_password_hash, check_password_hash
from models import Product, User, db
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity

def register_routes(app):
    @app.route('/users', methods=['GET'])
    @jwt_required()
    def get_users():
        users = User.query.all()
        return jsonify([user.to_dict() for user in users])
    
    @app.route('/register', methods=['POST'])
    def register_user():
        data = request.json
        if 'username' not in data or 'password' not in data:
            return jsonify({'error': 'Username and password required'}), 400
        
        if User.query.filter_by(username=data['username']).first():
            return jsonify({'error': 'User already exists'}), 400
        
        role = data.get('role', 'user')
        if role not in ['user', 'admin']:
            return jsonify({'error': 'Invalid role specified'}), 400
        
        hashed_password = generate_password_hash(data['password'])
        new_user = User(username=data['username'], password=hashed_password, role=role)
        
        try:
            db.session.add(new_user)
            db.session.commit()
            return jsonify({'message': 'User registered successfully'}), 201
        except Exception as e:
            db.session.rollback()
            return jsonify({'error': str(e)}), 500

    @app.route('/login', methods=['POST'])
    def login_user():
        data = request.json
        if 'username' not in data or 'password' not in data:
            return jsonify({'error': 'Username and password required'}), 400
        
        user = User.query.filter_by(username=data['username']).first()
        if not user:
            return jsonify({'error': 'User not found'}), 401

        if user:
            if not check_password_hash(user.password, data["password"]):
                return jsonify({"error": "passwoed is wrong"}), 401
            
        if not user or not check_password_hash(user.password, data["password"]):
            return jsonify({'error': 'Invalid credentials'}), 401
        
        access_token = create_access_token(identity=user.id)
        return jsonify({
            'message': 'Login successful',
            'access_token': access_token,
            'user': {
                'username': user.username,
                'role': user.role,
                "userId": user.id,
            }
        }), 200

    # Product CRUD routes (with @jwt_required() where needed)
    @app.route('/products', methods=['GET'])
    @jwt_required()
    def get_products():
        products = Product.query.all()
        return jsonify([product.to_dict() for product in products])

    @app.route('/products/<int:product_id>', methods=['GET'])
    @jwt_required()
    def get_product(product_id):
        product = Product.query.get(product_id)
        if product:
            return jsonify(product.to_dict())
        return jsonify({'error': 'Product not found'}), 404

    @app.route('/products', methods=['POST'])
    @jwt_required()
    def add_product():
        data = request.json
        if not all(key in data for key in ['name', 'price', 'stock_quantity', 'category']):
            return jsonify({'error': 'Missing required fields'}), 400
        
        # Get the user ID from the JWT token
        user_id = get_jwt_identity()
        
        new_product = Product(
            name=data['name'],
            description=data.get('description'),
            price=data['price'],
            stock_quantity=data['stock_quantity'],
            category=data['category'],
            brand=data.get('brand'),
            image_url=data.get('image_url'),
            user_id=user_id  # Set the user_id for the new product
        )

        try:
            db.session.add(new_product)
            db.session.commit()
            return jsonify(new_product.to_dict()), 201
        except Exception as e:
            db.session.rollback()
            return jsonify({'error': str(e)}), 500

    @app.route('/products/<int:product_id>', methods=['PUT'])
    @jwt_required()
    def update_product(product_id):
        product = Product.query.get(product_id)
        if not product:
            return jsonify({'error': 'Product not found'}), 404
        
        data = request.json
        if 'name' in data:
            product.name = data['name']
        if 'description' in data:
            product.description = data.get('description')
        if 'price' in data:
            product.price = data['price']
        if 'stock_quantity' in data:
            product.stock_quantity = data['stock_quantity']
        if 'category' in data:
            product.category = data['category']
        if 'brand' in data:
            product.brand = data['brand']
        if 'image_url' in data:
            product.image_url = data['image_url']

        try:
            db.session.commit()
            return jsonify(product.to_dict())
        except Exception as e:
            db.session.rollback()
            return jsonify({'error': str(e)}), 500

    @app.route('/products/<int:product_id>', methods=['DELETE'])
    @jwt_required()
    def delete_product(product_id):
        product = Product.query.get(product_id)
        if product:
            try:
                db.session.delete(product)
                db.session.commit()
                return jsonify({'message': 'Product deleted successfully'}), 204
            except Exception as e:
                db.session.rollback()
                return jsonify({'error': str(e)}), 500
        return jsonify({'error': 'Product not found'}), 404

    @app.route('/products/low-stock', methods=['GET'])
    @jwt_required()
    def get_low_stock_products():
        low_stock_threshold = 10
        low_stock_products = Product.query.filter(Product.stock_quantity < low_stock_threshold).all()
        return jsonify([product.to_dict() for product in low_stock_products])
