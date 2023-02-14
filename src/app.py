import datetime
from flask import Flask, url_for, redirect, render_template, jsonify

app = Flask(__name__)
app.config['SECRET_KEY'] = 'THIS-IS-VERY-SECRET!'

@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')

@app.route('/end-time-of-year', methods=['GET'])
def get_end_time_of_year():
    # API for estimating end time of this year
    new_year = datetime.datetime.now().year + 1
    return jsonify(
        {
            'status': 'ok',
            'data': {
                'seconds':(datetime.datetime.fromisoformat(f'{new_year}-01-01 00:00:00')-datetime.datetime.now()).total_seconds()
            }
        }
    )

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=80, debug=False)