
# ⚡ Calculator API — TypeScript + Fastify

A lightweight and type-safe **backend API** that performs basic arithmetic operations.  
Built using **TypeScript** and **Fastify**, this project demonstrates clean architecture, route modularization, and developer-friendly backend practices.

---

## 🚀 Features

- Arithmetic operations: **Add**, **Subtract**, **Multiply**, **Divide**
- Built with **Fastify** — a fast, modern Node.js web framework
- Fully **typed** using TypeScript interfaces and type safety
- Clean, modular project structure (separate routes + app setup)
- **Error handling** for invalid operations (e.g., divide by zero)
- Beginner-friendly setup for backend learners

---

## 🎯 Why I Built This

- To learn how to build and structure a backend API with Fastify  
- To understand the power of **TypeScript** for type-safe server-side development  
- To practice setting up a clean **Node.js + TS** environment for future projects  
- To take a practical step toward becoming a professional backend engineer  

---

## 🧰 Tech Stack

| Layer | Technology |
|-------|-------------|
| Runtime | Node.js |
| Framework | Fastify |
| Language | TypeScript |
| Tooling | ts-node, TypeScript Compiler (tsc) |
| Package Manager | npm |

---

## ⚙️ How to Run

```bash
# Clone the repository
git clone https://github.com/yourusername/calculator-api-ts.git
cd calculator-api-ts

# Install dependencies
npm install

# Run in development mode
npm run dev

# Build for production
npm run build

# Start compiled server
npm start
````

---

The server will start on **[http://localhost:3000](http://localhost:3000)**

---

## 🌐 Example Endpoints

| Method | Endpoint            | Example Response                                                 |
| ------ | ------------------- | ---------------------------------------------------------------- |
| GET    | `/add?a=5&b=10`     | `{ "operation": "addition", "result": 15 }`                      |
| GET    | `/subtract?a=8&b=3` | `{ "operation": "subtraction", "result": 5 }`                    |
| GET    | `/multiply?a=4&b=6` | `{ "operation": "multiplication", "result": 24 }`                |
| GET    | `/divide?a=10&b=0`  | `{ "operation": "division", "result": "Cannot divide by zero" }` |

---

## 🗂 Folder Structure

```
calculator-api-ts/
├── src/
│   ├── app.ts               # Fastify server setup and startup logic
│   └── routes/
│       └── calculator.ts    # Route definitions and arithmetic logic
├── package.json             # Project metadata and scripts
├── tsconfig.json            # TypeScript configuration
└── node_modules/            # Installed dependencies
```

---

## 🧠 Key Learnings

* Understood how **TypeScript** enforces compile-time safety in backend APIs
* Learned how to set up and structure a **Fastify** project properly
* Practiced **modular programming** — separating routes, configs, and logic
* Understood **CommonJS vs ESModule** setup differences in Node.js
* Gained hands-on experience with **async functions**, error handling, and logging
* Created a clean development setup using **ts-node** and **npm scripts**

---

## 🌱 Future Improvements

* Add input validation using **Fastify’s JSON schema** or **Zod**
* Implement a `/history` route to store previous calculations
* Add **unit testing** with Jest or Vitest
* Integrate **Docker** for containerized deployment
* Improve **error response structure** and input sanitization
* Extend the project with **advanced math operations** (power, modulus, etc.)

---

## 👨‍💻 Author

**Nikhil Raj**
Backend Developer | Student at IIIT Nagpur

📫 **Contact:**

* [LinkedIn](https://www.linkedin.com/in/nikhil0raj/)
* [Email](mailto:nikhil4rajj@gmail.com)

---

> *"Clean code isn’t about perfection — it’s about clarity and confidence."*
> — **Nikhil Raj**

```
```
