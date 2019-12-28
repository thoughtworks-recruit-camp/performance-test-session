from flask import Flask
import math
import random

app = Flask(__name__)


@app.route('/')
def hello_world():
    return 'Hello, World!' * math.floor(random.random() * 100)
