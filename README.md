# COLORS (COP 4331) — LAMP Stack Web App

COLORS is a simple LAMP-stack web application that demonstrates user login and basic data interaction with a MySQL database. After logging in, a user can add colors and search their saved colors through PHP API endpoints.

## Technologies Used
- Linux (Ubuntu on DigitalOcean)
- Apache
- MySQL
- PHP
- HTML/CSS/JavaScript (frontend)
- cURL/Postman (for API testing)

## Project Structure
```
colors-lamp/
│── color.html
│── index.html
│── css/
│   └── styles.css
│── images/
│   └── background.png
│── js/
│   ├── code.js
│   └── md5.js
│── LAMPAPI/
│   ├── AddColor.php
│   ├── Login.php
│   └── SearchColors.php
│── LICENSE.md
│── README.md
│── .gitignore
```
## Features
- User login (credentials checked against MySQL)
- Add a color for a user
- Search colors for a user

## Setup (High-Level)
1. **Create a LAMP server**
   - Provision a Linux droplet/VM with Apache, MySQL, and PHP installed.

2. **Create the database**
   - Create a database (example: `COP4331`)
   - Create tables: `Users`, `Colors` (and optionally `Contacts` if included)
   - Insert sample users/colors (optional)

3. **Configure API database credentials**
   - The PHP files require DB connection values.
   - This repo does **not** include real credentials. Create a local config file:
     - `api/config.php` (ignored by git)
     - Copy from `api/config.example.php` and fill in your values.

4. **Deploy files**
   - Copy `public/` into your Apache web root (ex: `/var/www/html/`)
   - Copy `api/` into `/var/www/html/LAMPAPI/` (or update paths accordingly)

## Running / Accessing
- Open the frontend:
  - `http://<your-domain-or-ip>/`
- API endpoints (examples):
  - `POST http://<your-domain-or-ip>/LAMPAPI/Login.php`
  - `POST http://<your-domain-or-ip>/LAMPAPI/AddColor.php`
  - `POST http://<your-domain-or-ip>/LAMPAPI/SearchColors.php`

## Example API Requests (cURL)
Login:
```
curl -s -X POST http://<host>/LAMPAPI/Login.php \
  -H "Content-Type: application/json" \
  -d '{"login":"SamH","password":"<hashed-or-plain-depending-on-frontend>"}'
```
## Search Colors:
```
curl -s -X POST http://<host>/LAMPAPI/SearchColors.php \
  -H "Content-Type: application/json" \
  -d '{"userId":2,"search":"Or"}'
```
## Notes / Limitations:
- Password handling depends on the frontend setup (some versions hash with md5.js before sending).
- This project is intended as a course lab demo and is not production-hardened.

