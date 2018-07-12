import os

from flask import Flask, render_template
from flask import request

app = Flask(__name__, static_folder="../static/dist", template_folder="../static/templates")
app.config["UPLOAD_FOLDER"] = '/home/mushroom/PycharmProjects/react_flask_fileform/flaskapp/server/store'
app.config["MAX_CONTENT_PATH"] = 2.5e+7  # bites


@app.route("/")
def index():
    return render_template("index.html")


@app.route('/upload', methods=['GET', 'POST'])
def upload_file():
    if request.method == 'POST':
        f = request.files['file']
        f.save(os.path.join(app.config['UPLOAD_FOLDER'], f.filename))
        return 'file uploaded successfully'


if __name__ == "__main__":
    app.run()
