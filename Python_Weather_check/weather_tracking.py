import requests

api_key = '416e2de63b85d493d6c6fda3844295d7'

city = input('Enter city name: ')

url = f'http://api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}'

response = requests.get(url)

if response.status_code == 200:
    data = response.json()
    temp = data['main']['temp']
    desc = data['weather'][0]['description']
    print(f'Temperature is: {temp} K')
    print(f'Description: {desc}')
else:
    print('Error fetching weather data')