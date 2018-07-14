import os

from flask import Flask, render_template, send_from_directory
from flask import request, jsonify

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


@app.route('/download/<path:filename>', methods=['GET', 'POST'])
def download(filename):
    return send_from_directory(directory=app.config["UPLOAD_FOLDER"], filename=filename)


@app.route('/download', methods=['GET'])
def get_file_list():
    res = []
    for indx, f in enumerate(os.listdir(app.config["UPLOAD_FOLDER"])):
        res.append({
            'name': f,
            'id': indx,
            'size': round(os.path.getsize(os.path.join(app.config['UPLOAD_FOLDER'], f))/(1024**2), 3)
        })
    return jsonify(res)


if __name__ == "__main__":
    app.run()
