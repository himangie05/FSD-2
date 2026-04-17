from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from marshmallow import fields, validate

app = Flask(__name__)

# Database Connection (Your credentials)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+mysqlconnector://root:Himangi0529@localhost/student_db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
ma = Marshmallow(app)

# Student Model
class Student(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    age = db.Column(db.Integer, nullable=False)
    course = db.Column(db.String(100))

# Validation Schema
class StudentSchema(ma.Schema):
    name = fields.Str(required=True, validate=validate.Length(min=2))
    email = fields.Email(required=True)
    age = fields.Int(required=True, validate=validate.Range(min=18, max=100))
    course = fields.Str(required=True)

student_schema = StudentSchema()
students_schema = StudentSchema(many=True)

# CRUD ENDPOINTS
@app.route('/student', methods=['POST'])
def add_student():
    errors = student_schema.validate(request.json)
    if errors: return jsonify(errors), 400
    
    new_student = Student(
        name=request.json['name'],
        email=request.json['email'],
        age=request.json['age'],
        course=request.json['course']
    )
    db.session.add(new_student)
    db.session.commit()
    return student_schema.jsonify(new_student), 201

@app.route('/student', methods=['GET'])
def get_students():
    all_students = Student.query.all()
    return students_schema.jsonify(all_students)

@app.route('/student/<id>', methods=['PUT'])
def update_student(id):
    student = Student.query.get(id)
    if not student: return jsonify({"message": "Not found"}), 404
    student.name = request.json.get('name', student.name)
    student.email = request.json.get('email', student.email)
    student.age = request.json.get('age', student.age)
    student.course = request.json.get('course', student.course)
    db.session.commit()
    return student_schema.jsonify(student)

@app.route('/student/<id>', methods=['DELETE'])
def delete_student(id):
    student = Student.query.get(id)
    if not student: return jsonify({"message": "Not found"}), 404
    db.session.delete(student)
    db.session.commit()
    return jsonify({"message": "Deleted"})

if __name__ == '__main__':
    app.run(debug=True)