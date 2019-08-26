# trailerblazer

A movie trailer search web site project.

## Server Responses

200 OK - The request was successful.  Created  
404 Not Found - Resource was not found.

## Routes
  Main URL: `https://trailerblazer-web.herokuapp.com`  
  Contact (Request Trailer) URL: `https://trailerblazer-web.herokuapp.com/contact`
 
## To Run Project on Your Local

1) Make sure you have node and npm installed  
2) Open Command Prompt in the project location adn type `npm install`  
3) After all packages installed, creat `.env` file under main folder. And put following required keys as template:  

AUTH_KEY = <<key to put header for search api call>>  
EMAIL = <<project's email>>  
EMAIL_PASS = <<project's email password>>  
GOOGLE_RECAPTCA_KEY = <<google recaptcha key>>  
OWNER_EMAIL = <<project owner email>>  
PORT = <<port to run ap>>  
API_URL = https://trailerblazer.herokuapp.com  


4) After creating the file, on Command Prompt type `node app.js` or `nodemon app.js` if you are using nodemon to run apps.
