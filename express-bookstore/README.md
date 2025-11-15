Here is a **clean, polished, professional README.md** specifically for your **express-bookstore** project 👇
(Just copy–paste this into `express-bookstore/README.md`)

---

# 📚 Express Bookstore API

A simple **Node.js + Express REST API** for managing a bookstore.
This project demonstrates how to build CRUD routes, validate inputs, handle parameters, and parse JSON — all using minimal code and no database.

---

## 🚀 Features

* Fetch all books
* Fetch a single book by ID
* Create a book
* Delete a book
* Input validation for IDs, title, and author
* Uses `express.json()` for JSON request body parsing
* Clean, beginner-friendly code

---

## 📂 Folder Structure

```
express-bookstore/
├── index.js      # Main Express server
└── package.json  # Dependencies and scripts
```

---

## ⚙️ Installation & Setup

1. Clone this repository:

   ```bash
   git clone https://github.com/ASrivatsav27/NodeJs-Learning.git
   ```

2. Navigate to the project:

   ```bash
   cd NodeJs-Learning/express-bookstore
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the server:

   ```bash
   node index.js
   ```

Server runs at:

```
http://localhost:8000
```

---

## 🧠 API Endpoints

### 📘 GET `/books`

Returns all books.

```json
[
  { "id": 1, "title": "Book One", "author": "Author One" },
  { "id": 2, "title": "Book Two", "author": "Author Two" }
]
```

---

### 📙 GET `/books/:id`

Returns a book by its ID.

Responses:

* `400` → ID must be a number
* `404` → Book not found

---

### ➕ POST `/books`

Creates a new book.

**Request Body**

```json
{
  "title": "New Book",
  "author": "John Doe"
}
```

**Success Response**

```json
{
  "message": "Book created success",
  "id": 3
}
```

Validation errors:

* Missing `title`
* Missing `author`

---

### 🗑 DELETE `/books/:id`

Deletes a book by ID.

Responses:

* `200` → Successfully deleted
* `400` → Invalid ID format
* `404` → Book doesn’t exist

---

## 🧰 Tech Stack

* **Node.js**
* **Express.js**
* In-memory array (no database)

---

## 🧪 Testing

Use Thunder Client, Postman, or curl.

Example:

```bash
curl http://localhost:8000/books
```

---


