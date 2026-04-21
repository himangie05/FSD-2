from flask import Flask, jsonify, request

app = Flask(__name__)

orders = {
    "101": {"item": "Laptop", "status": "Pending"},
    "102": {"item": "Mouse", "status": "Shipped"},
    "103": {"item": "Keyboard", "status": "Delivered"}
}

@app.route('/order/update', methods=['POST'])
def update_order():
    data = request.json
    order_id = str(data.get('order_id'))
    new_status = data.get('status')
    
    if order_id in orders:
        orders[order_id]['status'] = new_status
        return jsonify({"message": f"Order {order_id} updated", "order": orders[order_id]}), 200
    return jsonify({"error": "Order not found"}), 404

if __name__ == '__main__':
    app.run(port=5002)