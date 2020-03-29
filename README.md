## Table of contents
* [General info](#domax-serwis-project)
* [Technologies](#technologies)
* [How to run the project](#how-to-run-the-project)
* [Introduction](#introduction)
* [demo version](#demo)

# DOMAX-SERWIS PROJECT
Project of household products services website with the form to complete for repairing request 
and admin interface to see added requests (json-server) with delete option.
Created with JavaScript, React, Sass, Webpack and json-server.

### PROJECT PURPOSE
This project was created for the purpose of completing a course 
Javascript with React library at CodersLab Programming School.

### TECHNOLOGIES
Project is created with:
* Create React App - officially supported modern build setup included;
* javascript ES6;
* react 16.13.0;
* json server - local server - in this project used for storing form data;
* HTML with JSX - syntax extension to JavaScript;
* CSS3 with node-sass 4.13.1 - CSS Pre-processor and Extension tool;
* babel 7.8.6 (transpiler - source-to-source compiler);
* react router v4.0 - collection of navigational components

### HOW TO RUN THE PROJECT
* please be sure that you already have installed node.js and git.
* to run this project , install it locally using npm:
```
$ cd ../domax-serwis-project
$ npm install
$ npm start
```
* open second terminal
* install json server:
```
$ npm install -g json-server 
$ json-server -p 4000 db.json
```
* if in the terminal you will see:
`Type s + enter at any time to create a snapshot of the database`
please type s + enter to load database
* now in your browser you can see fully configured App.

### INTRODUCTION
Who never had broken Household item, be the first to throw a stone... :)<br>
<br>
Inspired by human problems and needs I would like to present a demo which would help people
to resolve huge part of life witch is called electronic equipment... if it would really existed ;)

### DEMO
Please note that this is a demo version used a free hosting which does not support json server.
It means that you can not send a form to server. To check this functionality please follow the instruction [How to run the project](#how-to-run-the-project).<BR>
Link to demo: [DOMAX-SERWIS-PROJECT-DEMO](https://sad-wing-64b6fe.netlify.com/ "DOMAX-SERWIS DEMO")