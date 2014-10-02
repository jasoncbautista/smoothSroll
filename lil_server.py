from flask import Flask, jsonify

app = Flask(__name__)


@app.route('/')
def hello_world():
    return "Hello World"



@app.route("/get_items/<offset>")
def get_items(offset):

    # Temp globals
    total = 500000
    limit = 25
    rows  = []

    for ii in range(offset, offset + limit):

        row = {
            text: str(1) + " --- " + str(random.random())
        }

        rows.append(row)
    

    response = {
            "total": total
        ,   "rows": rows
        ,   "limit": limit
        ,   "offset": offset + limit

    }
    return jsonify(** response)


if __name__ == '__main__':
    app.run()
