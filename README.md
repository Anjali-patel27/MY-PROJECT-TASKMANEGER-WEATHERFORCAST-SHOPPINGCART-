JavaScript Project: Task Management System, Shopping Cart, and Weather Forecast Tracker
Overview
This project contains three systems built in JavaScript to demonstrate key concepts such as variables, functions, arrays, objects, ES6+ features (like destructuring, arrow functions, map(), filter(), and find()), and template literals.

The three systems included are:

Task Management System: Manages tasks, allowing you to add tasks, filter by status, find high-priority tasks, and display the details of tasks.

Shopping Cart System: Simulates a shopping cart where you can add products, calculate the total cost, and remove items.

Weather Forecast Tracker: Tracks the weather conditions of various cities, allowing you to add city weather data, find the hottest city, filter cities by weather conditions, and display summaries of the weather.

Problem Statements
Problem 1: Task Management System
Objective: Create a system to manage daily tasks dynamically.

Tasks:
Create an array of task objects, each with:

title (string): The name of the task.

status (string): Either "Pending" or "Completed".

priority (number): A value between 1 (low priority) and 5 (high priority).

Functions to:

Add Task: Use an arrow function to add a new task object to the array.

Filter by Status: Use filter() to return tasks based on their status.

Find High Priority Task: Use find() to get the first task with a priority of 5.

Map Task Titles: Use map() to create a list of task titles with their status.

Log Task Details: Use template literals to log the details of all tasks.

Problem 2: Online Shopping Cart
Objective: Develop a simple shopping cart system.

Tasks:
Create an array of product objects, each containing:

productName (string)

price (number)

quantity (number)

Functions to:

Add Product: Function to add a new product to the cart.

Calculate Total: Use reduce() to calculate the total cost of all items in the cart.

Remove Product: Use an arrow function to remove a product by its name.

Destructuring: Use destructuring to extract and log product details (e.g., name and price).

Log Cart Summary: Use template literals to display a summary of the cart.

Problem 3: Weather Forecast Tracker
Objective: Build a tracker to manage weather data for different cities.

Tasks:
Create an array of city weather objects, each containing:

cityName (string)

temperature (number in Celsius)

condition (string, e.g., "Sunny", "Cloudy", "Rainy").

Functions to:

Add City Weather: Function to add a new city weather object.

Find Hottest City: Use find() to identify the city with the highest temperature.

Filter by Condition: Use filter() to list all cities with a specific weather condition.

Map City Names: Use map() to create a list of city names with their temperatures.

Destructuring: Use destructuring to extract and log details of the hottest city.

Log Weather Summary: Use template literals to log a weather summary for all cities.

Features
Task Management:

Add, filter, and display tasks.

Sort tasks by priority and find the highest priority task.

Shopping Cart:

Add/remove products, calculate total cost, and display the cart.

Weather Forecast:

Add city weather data, find the hottest city, filter cities by condition, and display weather summaries.

Getting Started
Prerequisites
A web browser (Google Chrome, Firefox, etc.).

A basic text editor (VSCode, Sublime Text, etc.) for modifying code.

Project Structure
pgsql
Copy
Edit
my-project/
├── taskManagement/
│   ├── taskManagement.js
│   └── index.html
├── shoppingCart/
│   ├── shoppingCart.js
│   └── index.html
└── weatherForecast/
    ├── weatherForecast.js
    └── index.html
How to Run the Project
Clone the Repository (if you have a GitHub repo):

bash
Copy
Edit
git clone https://github.com/your-username/my-project.git
Open in Browser:

Navigate to one of the project folders (taskManagement, shoppingCart, weatherForecast).

Open the index.html file in your browser by double-clicking it.

The JavaScript functions will be executed in the browser console.

Viewing Output:

Open the Developer Tools in your browser (F12 or Ctrl+Shift+I).

Go to the Console tab to see the output of the JavaScript functions.

Technologies Used
JavaScript: ES6 features like arrow functions, destructuring, map(), filter(), find(), template literals.
