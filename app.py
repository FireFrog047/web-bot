import time
import response
from random import random
from flask import Flask, render_template, request

app = Flask(__name__)
app.static_folder = 'static'

@app.route("/<userName>")
def home(userName):
    if f"/{userName}" in response.userDetails:
        return render_template("index.html")
    else:
        return render_template("404.html")

@app.route("/get")
def get_bot_response():
   
    userText = request.args.get('msg')
    currentUser = request.args.get('userName')
    userMsgCounterServer = request.args.get('msgCount')
    for _ in range(1):
        time.sleep(random())

    return str(response.sent_bot_sanetized_response(userMsgCounterServer, currentUser))

if __name__ == "__main__":
    app.run()

