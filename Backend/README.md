# User Registration Endpoint Documentation

## Endpoint: `/user/register`

### Method: POST

### Description:

This endpoint is used to register a new user. It validates the input data and creates a new user in the database if the data is valid.

### Request Body:

The request body should be a JSON object containing the following fields:

- `fullname`: An object containing:
  - `firstname`: A string with a minimum length of 3 characters.
  - `lastname`: A string with a minimum length of 3 characters.
- `email`: A valid email address.
- `password`: A string with a minimum length of 8 characters.

Example:

```json
{
	"fullname": {
		"firstname": "John",
		"lastname": "Doe"
	},
	"email": "john.doe@example.com",
	"password": "password123"
}
```

### Responses:

#### Success (201):

- **Description**: User created successfully.
- **Body**: A JSON object containing the authentication token and the user details.

```json
{
	"token": "auth_token",
	"user": {
		"_id": "user_id",
		"fullname": {
			"firstname": "John",
			"lastname": "Doe"
		},
		"email": "john.doe@example.com"
	}
}
```

#### Client Error (400):

- **Description**: Invalid input data.
- **Body**: A JSON object containing the validation errors.

```json
{
	"errors": [
		{
			"msg": "Invalid Email",
			"param": "email",
			"location": "body"
		},
		{
			"msg": "First name must be at least 3 characters long",
			"param": "fullname.firstname",
			"location": "body"
		}
	],
	"message": "Invalid arguments"
}
```

### Notes:

- Ensure that the `Content-Type` header is set to `application/json` when making requests to this endpoint.
- The `token` returned in the response should be stored securely and used for authenticated requests to other endpoints.

# User Login Endpoint Documentation

## Endpoint: `/user/login`

### Method: POST

### Description:

This endpoint is used to log in an existing user. It validates the input data and returns an authentication token if the data is valid.

### Request Body:

The request body should be a JSON object containing the following fields:

- `email`: A valid email address.
- `password`: A string.

Example:

```json
{
	"email": "john.doe@example.com",
	"password": "password123"
}
```

### Responses:

#### Success (200):

- **Description**: User logged in successfully.
- **Body**: A JSON object containing the authentication token and the user details.

```json
{
	"token": "auth_token",
	"user": {
		"_id": "user_id",
		"fullname": {
			"firstname": "John",
			"lastname": "Doe"
		},
		"email": "john.doe@example.com"
	}
}
```

#### Client Error (400):

- **Description**: Invalid input data.
- **Body**: A JSON object containing the validation errors.

```json
{
	"message": "Invalid username or password"
}
```

### Notes:

- Ensure that the `Content-Type` header is set to `application/json` when making requests to this endpoint.
- The `token` returned in the response should be stored securely and used for authenticated requests to other endpoints.

# User Profile Endpoint Documentation

## Endpoint: `/user/profile`

### Method: GET

### Description:

This endpoint is used to get the profile of the currently authenticated user.

### Responses:

#### Success (200):

- **Description**: User profile retrieved successfully.
- **Body**: A JSON object containing the user details.

```json
{
	"user": {
		"_id": "user_id",
		"fullname": {
			"firstname": "John",
			"lastname": "Doe"
		},
		"email": "john.doe@example.com"
	},
	"message": "user loggedin"
}
```

#### Client Error (401):

- **Description**: Unauthorized access.
- **Body**: A JSON object containing an error message.

```json
{
	"message": "Unauthorized"
}
```

### Notes:

- Ensure that the `Content-Type` header is set to `application/json` when making requests to this endpoint.
- The `token` returned in the response should be stored securely and used for authenticated requests to other endpoints.

# User Logout Endpoint Documentation

## Endpoint: `/user/logout`

### Method: POST

### Description:

This endpoint is used to log out the currently authenticated user and blocklist the token provided in cookies and headers.

### Responses:

#### Success (200):

- **Description**: User logged out successfully.
- **Body**: A JSON object containing a success message.

```json
{
	"message": "User logged out successfully"
}
```

### Notes:

- Ensure that the `Content-Type` header is set to `application/json` when making requests to this endpoint.
