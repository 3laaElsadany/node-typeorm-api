📌 TypeORM Project - REST API

🛠 Technologies Used

Node.js

Express.js

TypeORM

PostgreSQL

TypeScript

👅 Installation & Setup

1⃣ Clone the Repository

git clone https://github.com/3laaElsadany/node-typeorm-api
cd node-typeorm-api

2⃣ Install Dependencies

npm install

3⃣ Database Setup

Ensure PostgreSQL is installed and running.

Create a new database.

Create a .env file in the project root and add the following database connection details:

TYPEORM_CONNECTION=postgres
TYPEORM_HOST=localhost
TYPEORM_USERNAME=your_username
TYPEORM_PASSWORD=your_password
TYPEORM_DATABASE=your_database
TYPEORM_PORT=5432
TYPEORM_SYNCHRONIZE=true
TYPEORM_LOGGING=true
PORT=3000

4⃣ Run the Project

ts-node src/index.ts

🚀 The server will start at http://localhost:3000 (or as specified in .env).
