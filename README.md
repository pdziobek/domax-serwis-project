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



# --->PONIŻEJ WERSJA ROBOCZA<---
### FEATURES
* budowa komponentowa według założeń biblioteki react
## SZCZEGÓŁOWY OPIS APLIKACJI I UŻYTYCH ROZWIĄZAŃ
### (App.js) src/App.js
* komponent switch pochodzący z ReactRouter - dzieki temu doprowadzamy do sytuacji, w której ładuje się tylko jeden komponent
komponent navigacji umieszczony przed switchem co pozwala na przełączanie treści stron (pages)
nawigacja pozostaje statyczna. Możemy przełączać między osobno stworzonymi komponentami znajdującymi
się w folderze pages: src/pages:
Statycznymi podstronami:
* src/pages/AboutUs,
* src/pages/Home, 
* src/pages/Prices.
oraz  niestandardowymi szerzej opisanymi poniżej:
* src/pages/RepairVisit prowadzący do formularza 
* src/pages/Admin, której nie ma w nawigacji, prowadzi do prostej symulacji interfejsu administratora.

###### (Navbar.js) src/components/Navbar/Navbar.js
* Nawigacja (Navbar) zbudowana na bibliotece React Router z użyciem komponentu Link który generuje odpowiednie elementy a z atrybutem href

### FORMULARZ src/pages/RepairVisit/RepairVisit.js
zaczepiony div o id="modal-root" z pliku html znajdującego się w: public/index.html

W folderze RepairVisit komponent Modal zwraca funkcję createPortal() która tworzy(renderuje?) Portal exists outside the DOM hierarchy of the parent component. (umożliwia nam przeniesienie elementów strony w miejsce bardzo odległe od komponentu - rodzica, będące poza jego hierarchią, a jednocześnie zachowuje się jak jego komponent - dziecko)

Tak powstaje modal z formularzem - element strony wyświetlony ponad wszystkim zaimportowany pakiet ReactDOM, gdzie znajduje się funkcjonalność tworzenia portali.


#### KROKI
Komponent RepairVisit zwraca funkcję wbudowaną createPortal() która tworzy Portal.
Tak powstaje modal z formularzem - element strony wyświetlony ponad wszystkim.
w komponencie modal:
1.  jest tworzony div
2. pobieramy wartość step z routera a dokładnie z adresu url
service/5 pobierze wartość 5 dla ścieżki w routerze path="service/:step"
3.  ustawiamy stan komponentu i 7 stanów - czyli wyświetlanie kolejnych okienek formularza??
4. używamy hooka useEffect który jako ostatnie dziecko dla zlapanego elementu z klasą modal-root tworzy diva...? i zwraca go. Ten [step] na koncu nie wiem co robi, powoduje ze funkcja wykona sie tylko raz?
5. Potem zwraca funkcje wbudowaną i tu juz zwariowalam. Która ustawia stan aktualizując stan orderu zapisywanego w json serwerze?

### src/components/RequestForm/RequestForm.js
1. wszystkie wymienione komponenty dostają dostęp do propsów??
2.optimizeStep - powoduje ze kazdy inny wpisany numer przeniesie do jakiegos stepu?
3. ustawienie stanu...?
4. use History ? co robi? zapisuje w serwerze stan formularza? jak?
5. history.push 
stoppropagation - dzieki temu onClick traci wlasciwosci?





