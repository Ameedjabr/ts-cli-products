
# TypeScript CLI Products CRUD

## Description

This project is a CLI (Command Line Interface) application built using TypeScript, Sequelize ORM, and PostgreSQL. It allows users to perform CRUD operations (Create, Read, Update, Delete) on a products database.

##Requirements

Make sure you have the following installed:
* Node.js (v18 or higher)
* PostgreSQL (v13 or higher)
* Yarn (v1.x)

## Technologies

* Node.js
* TypeScript
* Sequelize
* PostgreSQL
* Commander
* dotenv


## Setup

1. Clone the repository:

```
git clone https://github.com/YOUR_USERNAME/ts-cli-products.git
cd ts-cli-products
```

2. Install dependencies:

```
Yarn install
```

3. Create a `.env` file:

```
DB_NAME=products_db
DB_USER=postgres
DB_PASS=your_password
DB_HOST=localhost
DB_PORT=5432
```

4. Make sure PostgreSQL is running and the database `products_db` exists.

## Usage

Run commands using:

```
yarn start <command>
```

## Commands

* List products:

```
npx tsx src/index.ts list
```

* Add product:

```
yarn start add "Laptop" 999.99
```

* Get product:

```
yarn start get 1
```

* Update product:

```
yarn start update 1 "Laptop Updated" 1200
```

* Delete product:

```
yarn start delete 1
```

## Author

Ameed Jabr
