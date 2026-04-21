from flask import Flask, jsonify

app = Flask(__name__)

customers = {
    "1": {"name": "Himangi Bhatt", "email": "himangi@example.com", "orders": [101, 102]},
    "2": {"name": "Ishaani Jauhari", "email": "ishaani@example.com", "orders": [103]}
}

@app.route('/customer/<id>/orders', methods=['GET'])
def get_customer_orders(id):
    customer = customers.get(id)
    if customer:
        return jsonify({"customer": customer['name'], "orders": customer['orders']}), 200
    return jsonify({"error": "Customer not found"}), 404

if __name__ == '__main__':
    app.run(port=5001)