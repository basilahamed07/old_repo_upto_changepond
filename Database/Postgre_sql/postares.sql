===========================POSTGRE SQL=============================

1) TO CHECK THE VERSION OF THE DATABASE
	=> SELECT VERSION();
2) TO CREATE THE DATABASE
	=> CREATE DATABASE DATABASENAME;
3) TO CHECK THE LIST OF THE DATABASES
	=> L/  => it will show thw list of databses
4) to import the data from the tar file 
	=> pg_restore -U (user) postgres -d (database) dvdrental (path of the tar file)
	
4) to chenge the user to pgsqls
	-< psql -U (user) postgres
5) TO CHENAGE THE DATABASE
	-> C\ (DATABASE) DVDrental
6) to describer the tables;
	-> \dt -to desctiber the tables