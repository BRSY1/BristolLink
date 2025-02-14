# BristolLink API Documentation

This document provides an overview of the API endpoints for BristolLink, a platform for securely connecting users and enabling matchmaking through submitted crushes. Each endpoint is detailed below with its purpose, request formats, and response examples.

## Base URL
The base URL for the API is:
```
http://127.0.0.1:8000/api/
```

## Endpoints

### **1. User Registration**
**Endpoint:** `/register`

**Method:** `POST`

Registers a new user with a Bristol email.

#### Request Body:
```json
{
  "email": "john.doe@bristol.ac.uk",
  "password": "yourpassword123",
  "username": "johndoe"
}
```

#### Responses:
**Success:**
```json
{
  "message": "User created successfully"
}
```
**Error:**
```json
{
  "message": "Invalid email address"
}
```
```json
{
  "message": "Failed to send verification email. Please register your account again."
}
```

### **2. Email Verification**
**Endpoint:** `/verify/<uuid:code>`

**Method:** `GET`

Verifies a user's email using the provided verification code.

#### Response:
**Success:**
```json
{
  "token": "1234567890abcdef",
  "message": "Email verified successfully",
  "user":
    "username": ...
    "email": ...
}
```
**Error:**
```json
{
  "message": "Invalid verification code"
}
```

### **3. Login**
**Endpoint:** `/login`

**Method:** `POST`

Logs in a user with verified email credentials.

#### Request Body:
```json
{
  "email": "john.doe@bristol.ac.uk",
  "password": "yourpassword123"
}
```

#### Responses:
**Success:**
```json
{
  "token": "1234567890abcdef",
  "message": "Logged in successfully",
  "user":
    "username": ...
    "email": ...
}
```
**Error:**
```json
{
  "message": "Email and password are required"
}
```
```json
{
  "message": "Invalid credentials"
}
```
```json
{
  "message": "Email not verified"
}
```

### **4. Logout**
**Endpoint:** `/logout`

**Method:** `POST`

Logs out the currently authenticated user.

#### Headers:
```
Authorization: Token <user_token>
```

#### Response:
**Success:**
```json
{
  "message": "Logged out successfully"
}
```
**Error:**
```json
{
  "message": "Failed to logout: <error_message>"
}
```

### **5. Submit Crush**
**Endpoint:** `/crush/submit`

**Method:** `POST`

Allows authenticated users to submit a crush anonymously.

#### Headers:
```
Authorization: Token <user_token>
```

#### Request Body:
```json
{
  "crush_name": "Jane Smith",
  "crush_email": "jane.smith@bristol.ac.uk",
  "message": "I think you're amazing!",
  "hint": true
}
```

#### Responses:
**Success:**
```json
{
  "message": "Crush submitted successfully"
}
```
**Error:**
```json
{
  "message": "Invalid email"
}
```
```json
{
  "message": "You have already submitted a crush"
}
```

### **6. Get Crush**
**Endpoint:** `/crush/get`

**Method:** `GET`

Retrieves all crush submissions for the authenticated user.

#### Headers:
```
Authorization: Token <user_token>
```

#### Response:
**Success:**
```json
[
  {
    "submitter": "john.doe@bristol.ac.uk",
    "crush_name": "Jane Smith",
    "crush_email": "jane.smith@bristol.ac.uk",
    "message": "I think you're amazing!",
    "created_at": "2024-12-23T12:34:56Z"
  }
]
```

### **7. Notification**
**Endpoint:** `/notifications`

**Method:** `GET`

Retrieve all notifications of the current user, i.e. submissions by their crush and matches.

#### Headers:
```
Authorization: Token <user_token>
```

### **8. Match**
**Endpoint:** `/match`

**Method:** `GET`

Retrieve the match of the current user, i.e. mutual submissions by the user and their crush.

#### Headers:
```
Authorization: Token <user_token>
```

#### Response:
**Success:**
```json
[
  {
    "submitter": "john.doe@bristol.ac.uk",
    "crush_name": "Jane Smith",
    "crush_email": "jane.smith@bristol.ac.uk",
    "message": "I think you're amazing!",
    "created_at": "2024-12-23T12:34:56Z"
  }
]
```

### **9. Test Endpoint**
**Endpoint:** `/test`

**Method:** `GET`

Serves a test page to verify email rendering.

#### Response:
Renders an HTML page (no JSON response).

---

## Models
### **User**
- **username:** The username of the user.
- **password:** The password of the user.
- **email:** The primary key email address.
- **is_verified:** Boolean indicating if the user has verified their email.
- **verification_code:** UUID for email verification.

### **Crush**
- **submitter:** The user who submitted the crush.
- **crush_name:** Name of the crush.
- **crush_email:** Email of the crush.
- **message:** Optional message for the crush.
- **created_at:** Timestamp of when the submission was created.

### **Match**
- **user1:** One user in the match.
- **user2:** The other user in the match.
- **matched_at:** Timestamp of when the match was created.

### **Notification**
- **submitter:** The user who submitted the crush.
- **receiver_email:** The email of the user who receive the notification.
- **notification_type:** i.e submission, match.
- **is_read:** Whether it is a new notification.
- **created_at:** Timestamp of when the notification was created.
---

## Notes
- **Authentication:** Most endpoints require a valid token in the `Authorization` header.
- **Validation:** Emails must end with `@bristol.ac.uk` to ensure exclusivity.
- **Error Handling:** Provides detailed error messages for easier debugging.
- **Email Configuration:**  Ensure the EMAIL_HOST_PASSWORD is added to the .env file. Example:
`EMAIL_HOST_PASSWORD=your-email-app-password`
This is required for the send_mail function to work properly.

For additional information or troubleshooting, please contact `bristollink2024@gmail.com` or `tom.lam@odns.hk`.

