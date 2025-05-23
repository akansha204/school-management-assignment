# 🏫 Indian Schools API

This is a Node.js-based RESTful API for managing and retrieving information about schools in India. It supports adding new schools and listing schools based on proximity using latitude and longitude.

---

## 🌐 Live API URL

Backend is deployed and accessible here:

👉 [Backend deployed on render](https://school-management-assignment-ohiw.onrender.com)

---

## 📦 Features

- Add new schools with address, coordinates
- Get nearby schools based on user location
- Built with:
  - Express.js
  - pg client (with connection pooling)
  - Dotenv for environment configuration

---

## 📬 Postman Collection

You can test the API using the Postman collection provided in this repository:

- [📁 View Postman Collection Folder](./postman collection)
- [📄 Download Collection JSON](./postman_collection/indian-schools-api.postman_collection.json)

### 🔧 How to Use
1. Open Postman.
2. Click `Import` → `File`.
3. Select the JSON file from the `postman_collection` folder.
4. The collection will be imported and ready to test.

> ℹ️ This collection includes sample requests and responses for all endpoints.
---

## 🚀 Setup Instructions (Local Development)

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/indian-schools-api.git
cd indian-schools-api
