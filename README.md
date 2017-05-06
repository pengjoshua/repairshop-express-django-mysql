# repairshop-express-django-mysql
Web application that calculates the length of service for cars in a repair shop. Separate servers made with Node/Express and Python/Django.

## Setup MySQL database
- install MySQL
- open a terminal window (command line) and run `mysql.server start` to start MySQL server
- run `mysql -u root -p` and enter your password to connect to MySQL (by default the password is empty, just hit `enter`)
- open the `data.sql` file with a code/text editor, select all, copy, paste the code (SQL statements) in the terminal, and run
    - the first SQL statements will load data from the repairs.csv file and create the `repairshop` database and `repairs` table
    - the last 2 SQL statements will create new tables (`repairs1` and `repairs2`) from which we will query for specific records

## Run the Node/Express server with MySQL
- open a new terminal window/tab, navigate to the root directory of this repo, and run `npm run serve` to run the server
- open a new terminal window/tab, in the root directory, run `npm start` to run the command line application
    - the repairshop results will be displayed in the command line
    - the mechanics are ranked based on their expected length of repair based on the national average (ratio)

## Run the Python/Django server with MySQL
- open a new terminal window/tab, navigate to the `/repairshop` directory, and run `python manage.py runserver` to run the server
    - the repairshop results will be displayed in the command line (same results generated as the Node/Express server)
    - the mechanics are ranked based on their expected length of repair based on the national average (ratio)   
