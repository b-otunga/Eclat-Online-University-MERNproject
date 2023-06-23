## Project Name
   **University Student Registration Website**

## Live Link
   http://ec2-34-207-191-119.compute-1.amazonaws.com

## Technologies Used
Hosted on AWS EC2
1. The frontend is built on reactJS
2. Backend runs on: 
  * Express
  * Node.js
  * Mongodb
3. Bootstrap used for styling components

## Work In Progress
* Add SSL to the EC2 instances to introduce HTTPS.
* Introduce authentication

## Project Description
The app provides a platform for new students to submit their full details to the university and also see other students registered. Campus admins and other students  can view all registered students. 
   
## Authors Information
   * Bill Otunga

## Setup Instructions
* Click on http://ec2-34-207-191-119.compute-1.amazonaws.com or;
* Clone the Repository in VScode
* Run npm install to install dependancies
* create a .env file on your local repo and connect to    your mongoDB url
* cd into frontend folder, open terminal and run npn start
* open another terminal window, cd into backend folder, and run npn start
* enjoy

## BDD
On clicking join us from homepage, the student gets a form, fills and submits, all fields are mandatory.
The details are stored on mongoDB and our students page is automatically updated with the new student details for immediate viewing. 
For now any person can view, delete, and update a student details.

#### NB:
In this release, we simply aimed to showcase understanding of the MERN (MongoDB, ExpressJS, ReactJS, and NodeJS) stack of technologies. We have endeavoured to implement all CRUD operations both frontend and backend. But we have no authentication at this stage and anyone can add, view, update, and delete students without any consequences. 

## Lincence and Copyright Information
   (c) 2023 Bill Otunga
