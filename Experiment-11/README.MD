# Experiment 11: Microservice-Based Backend Module

## Project Overview
This project implements a basic microservice architecture using Python and the Flask framework. It consists of two independent services:
1.  **Customer Service**: Handles fetching order data for specific customers.
2.  **Order Service**: Handles updating the status of existing orders.

Both services use in-memory storage for data and are deployed as independent web services.

## Services & API Endpoints

### 1. Customer Service
- **Description**: Fetches order details based on a Customer ID.
- **Base URL**: `https://customer-service-himangi.onrender.com`
- **Endpoint**: `GET /customer/<id>/orders`
- **Demo Link**: [View Customer 1 Orders](https://customer-service-himangi.onrender.com/customer/1/orders)

### 2. Order Service
- **Description**: Updates the status of an order.
- **Base URL**: `https://order-service-himangi.onrender.com`
- **Endpoint**: `POST /order/update`
- **Payload Example**:
  ```json
  {
    "order_id": "101",
    "status": "Delivered"
  }