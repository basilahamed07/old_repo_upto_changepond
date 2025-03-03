"""
Django settings for Organic_Project project.

Generated by 'django-admin startproject' using Django 3.2.19.

For more information on this file, see
https://docs.djangoproject.com/en/3.2/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/3.2/ref/settings/
"""

from pathlib import Path

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/3.2/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'django-insecure-i&)jfhm-wdh3g6q*x^a1j$8orisi8rej5!etdnr^^^&0i@v98g'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

# ALLOWED_HOSTS = ["172.17.7.111","localhost"]


# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    
    # app for the django table Start
    "Coupon_Table",
    "Order_Table",
    "Payment_Table",
    "Product_Table",
    "Shipping_Table",
    "User_Table",
    "category_Table",
    "cart_table",
    "admin_table",
    # app for the django table Stop

    #swagger Document app
    "drf_yasg",

    #Rest Api Framework

    "rest_framework",

    #Jwd Token for auth

    "rest_framework_simplejwt",

    #cros Function app INstall here
    "corsheaders",

]

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'Organic_Project.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [



        ],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]


WSGI_APPLICATION = 'Organic_Project.wsgi.application'


# Database
# https://docs.djangoproject.com/en/3.2/ref/settings/#databases


#TEmp Database for Developing mode
# myproject/settings.py
DATABASES = {
    'default': {
# <<<<<<< HEAD
        'ENGINE': 'django.db.backends.postgresql',
        # 'NAME': "organicstore",
        # 'PORT': "5432",
        # 'USER': "postgres",
# =======
# <<<<<<< HEAD basil database
        'NAME': "Organic_Website",
        'PORT': "5432",
        'USER': "postgres",
# >>>>>>> 5c66fdad77636fd4220a89080491bcd0617cee43
        'PASSWORD': "Database@123",
        'HOST': "localhost",
# =======

        # dines database
        # 'ENGINE': 'django.db.backends.postgresql', 
        # 'NAME': 'OrganicFoodStore',  
        # 'USER': 'postgres',  
        # 'PASSWORD': 'Database@123',
        # 'HOST': 'localhost',  
        # 'PORT': '5432',  
# >>>>>>> 585e0993c81d2c85e085d80f7a23183dfa4a9604
    }
}

AUTH_USER_MODEL = 'User_Table.CustomUser'

ALLOWED_HOSTS = ['172.17.7.104', "localhost", "127.0.0.1"]


# Password validation
# https://docs.djangoproject.com/en/3.2/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/3.2/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/3.2/howto/static-files/

STATIC_URL = '/static/'

# Default primary key field type
# https://docs.djangoproject.com/en/3.2/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'


#swagger code for basic Configuration 


#this swagger settings is general
SWAGGER_SETTINGS = {
    'USE_SESSION_AUTH': False,
    'SECURITY_DEFINITIONS': {
        'Bearer': {
                'type': 'apiKey',
                'name': 'Authorization',
                'in': 'header'
        }
    }
}



# rest api framework code 

REST_FRAMEWORK = {
    'DEFAULT_SCHEMA_CLASS':'rest_framework.schemas.coreapi.AutoSchema',
 
    'DEFAULT_PERMISSION_CLASSES': [
 'rest_framework.permissions.AllowAny',
    ],
        'DEFAULT_AUTHENTICATION_CLASSES': [
'rest_framework_simplejwt.authentication.JWTAuthentication',
    ]
 
}



CORS_ALLOWED_ORIGINS = [
    'http://localhost:4200',  # Angular app URL
]

#Simple jwt token '
from datetime import timedelta
from django.conf import settings
SIMPLE_JWT = {
    "ACCESS_TOKEN_LIFETIME": timedelta(days=1),
    "REFRESH_TOKEN_LIFETIME": timedelta(days=1),
    "ROTATE_REFRESH_TOKENS": False,
    "BLACKLIST_AFTER_ROTATION": False,
    "UPDATE_LAST_LOGIN": False,
 
    "ALGORITHM": "HS256",
    "SIGNING_KEY": settings.SECRET_KEY,
    "VERIFYING_KEY": "",
    "AUDIENCE": None,
    "ISSUER": None,
    "JSON_ENCODER": None,
    "JWK_URL": None,
    "LEEWAY": 0,
 
    "AUTH_HEADER_TYPES": ("Bearer",),
    "AUTH_HEADER_NAME": "HTTP_AUTHORIZATION",
    "USER_ID_FIELD": "id",
    "USER_ID_CLAIM": "user_id",
    "USER_AUTHENTICATION_RULE": "rest_framework_simplejwt.authentication.default_user_authentication_rule",
 
    "AUTH_TOKEN_CLASSES": ("rest_framework_simplejwt.tokens.AccessToken",),
    "TOKEN_TYPE_CLAIM": "token_type",
    "TOKEN_USER_CLASS": "rest_framework_simplejwt.models.TokenUser",
 
    "JTI_CLAIM": "jti",
 
    "SLIDING_TOKEN_REFRESH_EXP_CLAIM": "refresh_exp",
    "SLIDING_TOKEN_LIFETIME": timedelta(days=1),
    "SLIDING_TOKEN_REFRESH_LIFETIME": timedelta(days=1),
 
    "TOKEN_OBTAIN_SERIALIZER": "rest_framework_simplejwt.serializers.TokenObtainPairSerializer",
    "TOKEN_REFRESH_SERIALIZER": "rest_framework_simplejwt.serializers.TokenRefreshSerializer",
    "TOKEN_VERIFY_SERIALIZER": "rest_framework_simplejwt.serializers.TokenVerifySerializer",
    "TOKEN_BLACKLIST_SERIALIZER": "rest_framework_simplejwt.serializers.TokenBlacklistSerializer",
    "SLIDING_TOKEN_OBTAIN_SERIALIZER": "rest_framework_simplejwt.serializers.TokenObtainSlidingSerializer",
    "SLIDING_TOKEN_REFRESH_SERIALIZER": "rest_framework_simplejwt.serializers.TokenRefreshSlidingSerializer",
}


# Allow all origins (not recommended for production)
CORS_ALLOW_ALL_ORIGINS = True

# Or specify allowed origins
CORS_ALLOWED_ORIGINS = [
    'http://localhost:4200 ',  # Example for Angular dev server
    'https://your-frontend-domain.com',  # Replace with your production frontend domain
]

# Optional: Allow credentials (cookies, authorization headers, etc.)
CORS_ALLOW_CREDENTIALS = True

# Optional: Specify which headers can be included in requests
CORS_ALLOWED_HEADERS = [
    'content-type',
    'authorization',
    'x-requested-with',
]

# Optional: Specify which HTTP methods are allowed
CORS_ALLOWED_METHODS = [
    'GET',
    'POST',
    'PUT',
    'PATCH',
    'DELETE',
    'OPTIONS',
]




#media file for upload and access the media files


import os
MEDIA_URL = '/Media-Source/'
MEDIA_ROOT =os.path.join(BASE_DIR,'Media-Source')
