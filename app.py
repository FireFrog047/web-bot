import time
import response
from random import random
from flask import Flask, render_template, request

app = Flask(__name__)
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0
app.static_folder = 'static'

@app.route("/")
def home(userName):
    if f"/{userName}" in response.userDetails:
        return render_template("index.html", 
            botNameAW="Rihana",
            botProfielPictureAW="https://i.pinimg.com/originals/f7/85/10/f78510d0487088afb50abd9eedd477a1.jpg",

            )
    else:
        return render_template("404.html")

@app.route("/<userName>")
def home(userName):
    if f"/{userName}" in response.userDetails:
        return render_template("index.html", 
            botNameAW="Rihana",
            botProfielPictureAW="https://i.pinimg.com/originals/f7/85/10/f78510d0487088afb50abd9eedd477a1.jpg",

            )
    else:
        return render_template("404.html")

@app.route("/get")
def get_bot_response():
   
    userText = request.args.get('msg')
    currentUser = request.args.get('userName')
    userMsgCounterServer = request.args.get('msgCount')
    for _ in range(1):
        time.sleep(random())

    return (str(response.sent_bot_sanetized_response(userMsgCounterServer, currentUser)), 'rihana')

if __name__ == "__main__":
    app.run()

