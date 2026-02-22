````md
# FLUX – Django E-Commerce Project

FLUX is a Django-based e-commerce web application built using Django templates, static files, and JavaScript.  
It focuses on a clean UI, product browsing, cart flow, and a scalable backend-ready structure.

---

## How to Run the Project (Local Setup)

### 1. Clone the repository
```bash
git clone https://github.com/Rakshithofficial/FLUX-e_commerce.git
cd FLUX-e_commerce
````

### 2. Create a virtual environment

```bash
python -m venv venv
```

### 3. Activate the virtual environment (Windows – PowerShell)

```powershell
.\venv\Scripts\Activate.ps1
```

If activation is blocked:

```powershell
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

### 4. Install dependencies

```bash
pip install django
```

### 5. Go inside the Django project folder

```bash
cd flux
```

> This step is required because `manage.py` is inside the `flux/` folder.

### 6. Run the development server

```bash
python manage.py runserver
```

### 7. Open in browser

```
http://127.0.0.1:8000/
```

---

## Features

* Public home page (no forced login)
* Product listing with images
* Cart with quantity controls
* Orders page
* Profile and settings pages
* Django templates + static assets
* Ready for backend expansion (auth, products, checkout)

---

## Tech Stack

* Backend: Django 4.2
* Frontend: HTML, CSS, JavaScript
* Database: SQLite (local development)
* Version Control: Git & GitHub

---

## Project Structure

```
flux/
├── flux/              # Django project settings
├── static/            # CSS, JS, images
├── templates/         # HTML templates
├── manage.py
└── README.md
```

---

## Notes

* `venv/` and `db.sqlite3` are intentionally excluded from Git
* Static files are served by Django during development
* Designed for easy backend and feature expansion

---

## Author

Rakshith
GitHub: [https://github.com/Rakshithofficial](https://github.com/Rakshithofficial)

```
```
