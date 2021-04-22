---
id: error_codes
title: Error Codes
---

##  Standardised Error Messages

##  HTTP Status Codes

When a client makes a request to an HTTP server — and the server successfully receives the request — the server must notify the client if the request was successfully handled or not. HTTP accomplishes this with five categories of status codes:
- 100-level (Informational) — Server acknowledges a request
- 200-level (Success) — Server completed the request as expected
- 204-level (No Content) - indicates that a request has succeeded
- 300-level (Redirection) — Client needs to perform further actions to complete the request
- 400-level (Client error) — Client sent an invalid request
- 401-level (unauthorized) - The request sent by the client could not be authenticated
- 500-level (Server error) — Server failed to fulfill a valid request due to an error with server
- 503-level (Service unavailable) - The server is currently unable to handle the request due to a temporary overloading or maintenance of the server.


##  Handling Errors

At Hackney, we use the following Standardised Error messages for our APIs:

Basic Errors
 
404- Not Found - If an item(requested resource) was not found
{
	“devErrorMessages”: [“debug info or stack trace”],
	“userErrorMessage”: “The item you search for was not found”
}
 
 
400 - Bad request : When the client sent an invalid request for eg : missing required header body or parameter
{
	“DevErrorMessages”: [“validation errors”],
	“UserErrorMessage”: “Your item could not be created for the following  
       reasons...”
}
 
500 - Internal Server Error - Generic error occurred
{
	“DevErrorMessage”: “debug info or stack trace”,
	“UserErrorMessage”: “The item you search for was not found”
}




