import random
from flask import Flask, jsonify

app = Flask(__name__)


@app.route('/')
def hello_world():
    return "Hello World"



@app.route("/get_items/<_offset>", methods=["GET"])
def get_items(_offset):

    offset = int(_offset)
    # Temp globals
    total = 500000
    limit = 25
    rows  = []

    for ii in range(offset, offset + limit):

        row = {
            "text": str(ii) + " --- " + str(random.random())
        }

        rows.append(row)
    

    response = {
            "total": total
        ,   "rows": rows
        ,   "limit": limit
        ,   "offset": offset 
        ,   "next_offset": offset + limit

    }
    return jsonify(** response)


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5002, debug=True)
