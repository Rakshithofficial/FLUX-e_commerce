⚠️ IMPORTANT – How to Run This Project

All backend-related operations must be executed from inside the `flux/` directory, as this is where the Django `manage.py` file is located.

---

# FLUX – E-Commerce Project (Django Backend)

FLUX is a Django-based e-commerce project designed with a clean frontend and a scalable backend structure.  
The project uses Django templates and static assets (HTML, CSS, JavaScript) to deliver a smooth shopping experience while keeping the backend ready for future expansion.

---

## Backend Responsibilities

The Django backend is responsible for:

- User authentication (signup, login, sessions)
- Data storage and management
- Routing and server-side rendering
- Django admin configuration

---

## Frontend Responsibilities

The frontend layer handles:

- User interface pages (home, signup, login, products, cart, orders, profile)
- Client-side interactions using JavaScript
- Styling and layout using CSS
- Static asset management (images, stylesheets, scripts)

---

## Project Structure

flux/
├── flux/ # Django project configuration
├── static/ # CSS, JavaScript, images
├── templates/ # HTML templates
├── manage.py # Django entry point


---

## How This Project Works

- The application follows a Django-first architecture.
- Pages are rendered using Django templates.
- Static assets are served through Django during development.
- The backend and frontend are tightly integrated for simplicity and maintainability.
- The project is structured to allow easy addition of features such as payments, product models, and order management.

---

## Notes

- Virtual environment files and database files are excluded from version control.
- This project is intended for learning, practice, and portfolio demonstration.
- The structure is kept clean to support future backend enhancements and deployment.

---

## Author

Rakshith  
GitHub: https://github.com/Rakshithofficial
