## Table of contents
* [General info](#domax-serwis-project)
* [Technologies](#technologies)
* [Setup](#setup)



# DOMAX-SERWIS PROJECT
Project of household products services website with the form to complete for repairing request 
and admin interface to see added requests (json-server) with delete option.
Created with JavaScript, React, Sass, Webpack and json-server.
### PROJECT PURPOSE
This project was created for the purpose of completing a course 
Javascript with React library at CodersLab Programming School.
### INTRODUCTION
Who never had broken Household item, be the first to throw a stone... :)<br>
<br>
Inspired by human problems and needs I would like to present a demo which would help people
to resolve huge part of life witch is called electronic equipment... if it would really existed ;)
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
### DEMO
Please note that this is a demo version used a free hosting which does not support json server.
It means that you can not send a form to server. To check this functionality please go to the code.<BR>
Link to demo: [DOMAX-SERWIS-PROJECT-DEMO](https://sad-wing-64b6fe.netlify.com/ "DOMAX-SERWIS DEMO")
### FEATURES
* budowa komponentowa według założeń biblioteki react



#SZCZEGÓŁOWY OPIS APLIKACJI I UŻYTYCH ROZWIĄZAŃ
(App.js)
* komponent switch pochodzący z ReactRouter - dzieki temu doprowadzamy do sytuacji, w której ładuje się tylko jeden komponent
komponent navigacji umieszczony przed switchem co pozwala na przełączanie treści stron (pages)
nawigacja pozostaje statyczna. Możemy przełączać między osobno stworzonymi komponentami znajdującymi
się w folderze pages: AboutUs, Home, Prices oraz  opisanych poniżej RepairVisit prowadzący do formularza i niedostępnej
 zakładki Admin, która prowadzi do prostej symulacji interfejsu administratora.

(Navbar.js)
* Nawigacja (Navbar) zbudowana na bibliotece React Router z użyciem komponentu Link który generuje odpowiednie elementy a z atrybutem href




