from flask import Flask, request, jsonify
from flask_cors import CORS
from werkzeug.security import generate_password_hash, check_password_hash  # <-- Ajout de check_password_hash
from mongoengine import connect, DoesNotExist
from models.patient import Patient
import sys

# Configuration de Flask
app = Flask(__name__)
CORS(app)  # <-- Activez CORS pour toutes les routes

# Connexion à MongoDB avec gestion des erreurs
try:
    # Connexion à la base de données
    connect('medical_app_db', host='mongodb://localhost:27017/medical_app_db')
    print("Connexion à MongoDB réussie !")
except Exception as e:
    # Si la connexion échoue, afficher un message d'erreur et quitter
    print(f"Erreur de connexion à MongoDB : {e}")
    sys.exit(1)  # Quitter l'application avec un code d'erreur

# Route pour l'inscription des patients
@app.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()

    # Vérifier si l'email existe déjà
    if Patient.objects(email=data['email']).first():
        return jsonify({"error": "Email already exists"}), 400

    # Créer un nouveau patient
    new_patient = Patient(
        email=data['email'],
        password=generate_password_hash(data['password']),  # Hashage du mot de passe
        nom=data['nom'],
        prenom=data['prenom']
    )
    new_patient.save()

    return jsonify({"message": "Patient registered successfully"}), 201

# Route pour la connexion des patients
@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()

    # Vérifier si l'email et le mot de passe sont fournis
    if not data.get('email') or not data.get('password'):
        return jsonify({"error": "Email and password are required"}), 400

    try:
        # Rechercher le patient par email
        patient = Patient.objects.get(email=data['email'])

        # Vérifier si le mot de passe correspond
        if check_password_hash(patient.password, data['password']):  # <-- Vérification du mot de passe hashé
            return jsonify({
                "message": "Login successful",
                "patient": {
                    "id": str(patient.id),
                    "email": patient.email,
                    "nom": patient.nom,
                    "prenom": patient.prenom
                }
            }), 200
        else:
            return jsonify({"error": "Invalid email or password"}), 401

    except DoesNotExist:
        # Si l'email n'existe pas dans la base de données
        return jsonify({"error": "Invalid email or password"}), 401

# Point d'entrée de l'application
if __name__ == '__main__':
    app.run(debug=True)