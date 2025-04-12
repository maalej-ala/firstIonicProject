from mongoengine import Document, StringField, EmailField

class Patient(Document):
    email = EmailField(required=True, unique=True)  # Champ pour l'email
    password = StringField(required=True)          # Champ pour le mot de passe
    nom = StringField(required=True)               # Champ pour le nom
    prenom = StringField(required=True)            # Champ pour le prénom