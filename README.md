#  API Tester Tool

A lightweight web-based API testing tool built using React. This application allows developers to test REST APIs directly from the browser, similar to Postman.

---

##  Features

-  Send API requests using GET, POST, PUT, DELETE methods
-  Add and validate JSON request body for POST/PUT requests
-  View formatted JSON responses with HTTP status codes
-  API request history saved in Local Storage
-  Click on history items to reuse previous URLs
-  One-click copy response functionality
-  Clean and responsive UI using Tailwind CSS

---

##  Tech Stack

- **Frontend:** React, JavaScript (ES6+)
- **Styling:** Tailwind CSS
- **State Management:** React Hooks
- **Storage:** Browser Local Storage
- **Build Tool:** Vite

---

##  Screenshots

(Add screenshots here)

---

##  Installation & Setup

```bash
git clone https://github.com/ajay7398/API-Tester-Tool.git
cd api-tester-tool
npm install
npm run dev


## How It Works
1.Enter the API URL
2.Select the HTTP Method (GET / POST / PUT / DELETE)
3.(Optional) Add a JSON request body for POST/PUT requests
4.Click Send to make the API call
5.View the formatted JSON response and copy it if needed
6.Access previous API requests from the History panel

## Learning Outcomes
-Practical understanding of REST APIs
-Handling asynchronous requests using the Fetch API
-Using Local Storage for persistent data
-Component-based architecture with React
-UI design and layout management using Tailwind CSS

## Future Improvements
-Support for Authorization headers (Bearer Token, API Key)
-Environment management (Development / Production)
-JSON response syntax highlighting
-Custom request headers editor