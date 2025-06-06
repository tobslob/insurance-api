## Insurance API (Express.js)

This project provides a simple insurance policy API built with **Express.js**. It exposes endpoints for managing policies and retrieving associated product information. Data is stored in memory from JSON files located in the `src/data` folder.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run build
$ npm run start:prod
```

### Configuration

The server reads two environment variables:

- `PORT` – Port to listen on (defaults to `3000`)
- `API_KEY` – Key required for write operations

You can set them in your shell or by creating a `.env` file before starting the server.

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

---

## API Endpoints

### Public Endpoints (No Auth)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | `/policies/:id` | Get a policy by ID with product details |
| GET    | `/policies?customerName=<name>` | Get all policies by customer name |

### Protected Endpoints (Requires `x-api-key`)

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST   | `/policies` | Create a new policy |
| PUT    | `/policies/:id` | Update an existing policy |
| DELETE | `/policies/:id` | Delete a policy |

### Validation

POST and PUT requests to `/policies` are validated using a Zod schema. Invalid
payloads will result in a **400 Bad Request** response.

---

## Postman Collection

A Postman collection [postman_collection.json](https://github.com/tobslob/insurance-api/blob/main/postman_collection.json) is included with example requests for all endpoints.

To import:

1. Open Postman
2. Click `Import`
3. Select the `postman_collection.json` file

---

## Docker

You can run the API in a container using Docker.

### Build image

```bash
docker build -t insurance-api .
```

### Start with Docker Compose

```bash
docker compose up
```

The server will be available at `http://localhost:3000`.

---

## 👨‍💻 Author

Kazeem – Full Stack Developer

---
