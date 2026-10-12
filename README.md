JavaScript Assignments & Mini Project: Product Inventory & Analytics Dashboard

Practical JavaScript work completed during the JavaScript Web Development Internship by EWB EduTech. This repository contains six core-concept assignments and a console-based capstone mini project that combines them all.

Table of Contents
About the Project
Assignments
Mini Project: Product Inventory & Analytics Dashboard
Concepts Covered
Project Structure
How to Run
Sample Output
Author
About the Project

The goal of this work is to apply core JavaScript fundamentals through hands-on tasks:

Six assignments, each focused on one module of the curriculum.
A capstone mini project, an interactive, console-based inventory system that brings every concept together in one program.

Everything is written in plain JavaScript (ES6+), with no frameworks or libraries.

Assignments
#	Topic	What it demonstrates
1	Variables, Data Types & Console	var, let, const, typeof, console.log
2	Operators, Expressions & Input	prompt(), Number() conversion, arithmetic and assignment operators (tip calculator)
3	Conditional Logic	if...else, switch, ternary operator (score, grade and pass/fail)
4	Loop Control Structures	for, while with break, do...while with continue
5	Functions & Scope	Standard and arrow functions, default parameters, function and block scope
6	Arrays, Objects & Methods	forEach(), filter(), map() on an array of product objects
Mini Project: Product Inventory & Analytics Dashboard

An interactive, console-based application that manages a product inventory and reports simple analytics.

Features
Input handling: asks the user for a new product name and price through prompt(), with explicit type conversion.
Validation: rejects empty names and invalid prices, and lets the user retry (up to 3 attempts).
Categorisation: assigns each item a badge using switch:
Budget: under $50
Standard: $50 to under $500
Premium: $500 and above
Search: finds a product by name using a loop with break and continue.
Analytics: calculates total inventory value with an arrow function, and applies a custom tax and discount with a regular function.
Reports: uses forEach() to print the inventory, filter() to list affordable items (under $200), and map() to build a formatted report.
Concepts Covered
Variables and data types
Operators and type conversion
Conditional statements (if...else, switch, ternary)
Loops and flow control (for, while, do...while, break, continue)
Functions: standard, arrow, default parameters
Scope (function and block)
Arrays and objects
Array methods: forEach, filter, map, reduce
Input validation and basic error handling
