from flask import Flask

app = Flask(__name__)


@app.route('/')
def hello_world():
    return "Hello World"



@app.route("/get_items/<offset>")
def get_items(offset):
    limit = 25
    rows  = []
    for ii in range(offset, offset + limit):
        row = {
            text: str(1) + " --- " + str(random.random())
        }
        rows.append(row)

    



if __name__ == '__main__':
    app.run()
