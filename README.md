# Time API

This project implements a RESTful API with a single endpoint, `GET /time`, which returns the current time in UTC format. The endpoint also accepts an optional query parameter `timezone` to return the current time adjusted to the specified timezone.

## Problem Definition

Create a RESTful API with a single endpoint, `GET /time`. This endpoint should accept one optional query parameter:

- **timezone**: A string representing a valid timezone offset.

The API should return a JSON response object with the following fields:

- **currentTime**: The current date and time in UTC format (e.g., "2050-01-24T15:06:26Z")
- **adjustedTime** (optional): If a timezone parameter is provided, the API should return the current time adjusted to the specified timezone in the requested format.

## Prerequisites

- Node.js v18.19.1 or later
- npm (Node Package Manager)

## Installation

1. Clone the repository:

```sh
  git clone https://github.com/byonduniverse/dwolla-time-api
  cd time-api
```

2. Install the Dependencies:

```sh
  npm install
```

## Usage

1. Set running port in .env:

```sh
  PORT=3000
```

2. Run the application:

```sh
  npm run start
```

3. Access the API endpoint:

- Get the current time in UTC:

```sh
  GET http://localhost:3000/time
```

- Get the current time adjusted to a specific timezone:

```sh
  GET http://localhost:3000/time?timezone=America/New_York
```

### API Endpoints

- GET /time Optional Query Parameters:

  - timezone: A string representing a valid timezone (e.g., "America/New_York").

- Response:

  - If no timezone parameter is provided:

    ```json
    {
      "currentTime": "2023-01-24T15:06:26Z"
    }
    ```

  - If a valid timezone parameter is provided:

    ```json
    {
      "currentTime": "2023-01-24T15:06:26Z",
      "adjustedTime": "2023-01-24T10:06:26-05:00"
    }
    ```

  - If an invalid timezone parameter is provided:

    ```json
    {
      "error": "Invalid timezone"
    }
    ```

### Running Tests

To run the tests, use the following command:

```sh
npm run test
```

### Continuous Integration

This project uses GitHub Actions for continuous integration. The configuration is in the .github/workflows/node.js.yml file. The workflow is set to run tests on Node.js version 18.

## Contact

For any questions or feedback, please contact mailto: thomasjones0515@gmail.com
