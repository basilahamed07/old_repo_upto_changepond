from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    username = db.Column(db.String(100), unique=True, nullable=False)
    password = db.Column(db.String(256), nullable=False)
    role = db.Column(db.String(10), nullable=False, default='user')

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'role': self.role,
        }

class Product(db.Model):
    __tablename__ = 'products'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(255), nullable=False)
    price = db.Column(db.Numeric(10, 2), nullable=False)
    category = db.Column(db.String(100), nullable=False)
    stock_quantity = db.Column(db.Integer, nullable=False)
    description = db.Column(db.Text)
    brand = db.Column(db.String(100))
    image_url = db.Column(db.String(255))
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)

    user = db.relationship('User', backref=db.backref('products', lazy=True))

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'price': str(self.price),
            'stock_quantity': self.stock_quantity,
            'category': self.category,
            'brand': self.brand,
            'image_url': self.image_url,
            'user_id': self.user_id,
        }
