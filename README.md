## Project Details:

This is a company webpage for a group of adventurers. 


Added a API to fetch equipment data for the shop page. 
Created a randomize function to add random items to the shop page.

Using Express created a CRUD app to make a shopping cart. In the shopping cart include the ability to delete an item from the list. 


## Requires: 

---
This project used Git Bash which can be downloaded for both Windows and Mac at: https://git-scm.com/downloads

---
**Mac: Homebrew** -- https://brew.sh/

**Windows: Chocolatey** -- https://chocolatey.org/

**Node.JS Version** - 14.7.0 -- https://nodejs.org/en/download/current/

**Express.JS Verson** - 6.14.7 -- In console install using "npm install express"

**Pug Version** - 3.0.0 -- In console install using "npm install pug@3.0.0"

**Sequelize Version** - 6.3.4 -- In console install using "npm install sequelize@6.3.4"

**Sequelize-CLI Version** - 6.2.0 -- In console install using "npm install sequelize-cli"

**SQLite3 Version** - 5.0.0 -- Install in console using "npm install sqlite3@5.0.0"

**nodemon Version** - 2.0.4 -- Install in console using "npm install nodemon"

This project used DB Browser for SQLite. The program can be found at https://sqlitebrowser.org/dl/

---
The project was tested with HeidiSQL using the following commands:

    1. Start a new Session
    2. Network Type: Select SQLite from the dropdown menu.
    3. Library: sqlite3.dll
    4. Datatbase filename: select the development.db from the file path.
    5. Hit Open
    
---
This project is run using a node server. After installation of required programs, start the server using the command "npm start". 

After the server has started navigate to an internet browser(Chrome was used in development). The webpage can be viewed on *localhost:3000*.