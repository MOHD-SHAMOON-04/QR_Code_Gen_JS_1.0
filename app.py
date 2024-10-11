from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        qr_input = request.form.get('qr_input')
        if qr_input:
            return render_template('index.html', qr_code=qr_input)
    return render_template('index.html', qr_code=None)

if __name__ == '__main__':
    app.run(debug=True)
