import requests
import json

# for i in range(10, 11):
r = requests.post('http://localhost:8000/fitbit', json={"heartrates": [12]})
