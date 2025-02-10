1)Write a SQL statement to create a simple table movies which should include columns movie_id, movie_name, movie_type and movie_rating only if it does not exist. The combination of movie_id and movie_name should be an unique indentifier of the table.


create table movie(
    movie_id int PRIMARY KEY unique,
    movie_name VARCHAR(50) unique,
    movie_type VARCHAR(50),
    movie_rating VARCHAR(50)
);



-- 2) Write a SQL statement to create a table company which should include columns company_id, trade, number_of_employees. The company_id should be an unique indentifier of the table. trade and number_of_employees columns should not be null. The number_of_employees should be 0 by default.

create table company(
    company_id int PRIMARY KEY unique,
    trade VARCHAR(50) not null,
    number_of_employees int not null default 0
);


3) Write a SQL statement to create a table job_offer which should include columns offer_id, offer_title, offer_min_salary and offer_max_salary, company_id, and make sure that, the default value for job_offer_title is blank, offer_min_salary is 5000 and offer_max_salary is null. The offer_id column should be unique. The foreign key company_id can contain only those values which exist in the company table.

create table job_offer(
    offer_id int PRIMARY KEY unique,
    offer_title VARCHAR(50) not null,
    offer_min_salary int default 5000,
    offer_max_salary int null,
    company_id int,
    job_offer_title VARCHAR(30) DEFAULT " ",
    foreign KEY (company_id)
    references company(company_id)
    on update restrict
on delete cascade
);

4)#Write a SQL statement to rename the movies table to movies_renamed.

rename table movies to movies_renamed

5)
Write a SQL statement to add a column movie_director to the movies_renamed table.

alter table movies_renamed
add column movie_director varchar(500);

6)Write a SQL statement to add a column ID as a first column of the movies_renamed table.

alter table movies_renamed
add column coloumn_ID int first;

8)Write a SQL statement to add a column movie_description after the movie_name column in movies_renamed table.


alter table movies_renamed
add column movie_description VARCHAR(30) after movie_name;

9)Write a SQL statement to change the data type of the column movie_rating to integer.

alter TABLE movies_renamed
MODIFY column movie_rating int;

10)Write a SQL statement to drop the movie_director column.

    alter TABLE movies_renamed
    drop column movie_director;


11)Write a SQL statement to drop the existing primary key from the movies_renamed table.


alter TABLE movies_renamed
drop PRIMARY KEY


12)Write a SQL statement to add primary key for the column movie_id in the movies_renamed table.
alter TABLE movie_renamed
add column movie_id PRIMARY key




_____________________________________________________________________________________________________________________________________________________________________________________





create table tasks(
    task_id int auto_increment PRIMARY KEY,
    title VARCHAR(255) not null,
    strat_date date,
    due_date DATE,
    priority TINYINT not null DEFAULT 3,
    DESCRIPTION text);
)



=====only inserting the values to title and priority for it

insert into tasks (title,priority) VALUES
('learn MySqL Insert STATEMENT',1);


ans = 
+---------+------------------------------+------------+----------+----------+-------------+
| task_id | title                        | strat_date | due_date | priority | DESCRIPTION |
+---------+------------------------------+------------+----------+----------+-------------+
|       1 | learn MySqL Insert STATEMENT | NULL       | NULL     |        1 | NULL        |
+---------+------------------------------+------------+----------+----------+-------------+


=====inserting the whole tables

insert into tasks values (2,"This second table contant was developed by basil ahamed","2024-06-01","2025-06-01",2,"this collum passage will contain the big pasage and i am using the txt dataype in it");

ans= 
+---------+---------------------------------------------------------+------------+------------+----------+--------------------------------------------------------------------------------------+
| task_id | title                                                   | strat_date | due_date   | priority | DESCRIPTION                                                                          |
+---------+---------------------------------------------------------+------------+------------+----------+--------------------------------------------------------------------------------------+
|       1 | learn MySqL Insert STATEMENT                            | NULL       | NULL       |        1 | NULL                                                                                 |
|       2 | This second table contant was developed by basil ahamed | 2024-06-01 | 2025-06-01 |        2 | this collum passage will contain the big pasage and i am using the txt dataype in it |
+---------+---------------------------------------------------------+------------+------------+----------+--------------------------------------------------------------------------------------+



=====inserting the value to in it

insert into tasks (title,strat_date,due_date) values
("this title is the thard title","2024-06-1","2024,07-1");


+---------+---------------------------------------------------------+------------+------------+----------+--------------------------------------------------------------------------------------+
| task_id | title                                                   | strat_date | due_date   | priority | DESCRIPTION                                                                          |
+---------+---------------------------------------------------------+------------+------------+----------+--------------------------------------------------------------------------------------+
|       1 | learn MySqL Insert STATEMENT                            | NULL       | NULL       |        1 | NULL                                                                                 |
|       2 | This second table contant was developed by basil ahamed | 2024-06-01 | 2025-06-01 |        2 | this collum passage will contain the big pasage and i am using the txt dataype in it |
|       3 | this title is the thard title                           | 2024-06-01 | 2024-07-01 |        3 | NULL                                                                                 |
+---------+---------------------------------------------------------+------------+------------+----------+--------------------------------------------------------------------------------------+



====inserting the current date by using the date function (current_date())

insert into tasks (title,strat_date,due_date) VALUES
("in this command i will using the current date function",current_date(),current_date() + 6);


+---------+---------------------------------------------------------+------------+------------+----------+--------------------------------------------------------------------------------------+
| task_id | title                                                   | strat_date | due_date   | priority | DESCRIPTION                                                                          |
+---------+---------------------------------------------------------+------------+------------+----------+--------------------------------------------------------------------------------------+
|       1 | learn MySqL Insert STATEMENT                            | NULL       | NULL       |        1 | NULL                                                                                 |
|       2 | This second table contant was developed by basil ahamed | 2024-06-01 | 2025-06-01 |        2 | this collum passage will contain the big pasage and i am using the txt dataype in it |
|       3 | this title is the thard title                           | 2024-06-01 | 2024-07-01 |        3 | NULL                                                                                 |
|       4 | in this command i will using the current date function  | 2024-06-24 | 2024-09-24 |        3 | NULL                                                                                 |
|       5 | in this command i will using the current date function  | 2024-06-24 | 2024-06-30 |        3 | NULL                                                                                 |
+---------+---------------------------------------------------------+------------+------------+----------+--------------------------------------------------------------------------------------+


====== inserting the multiple value in singe inter into


insert into tasks (title,priority) VALUES
("this is firest priority",1),
("this is second stage here",2),
("this is this is also second state",2),
("this is remaing the last reminders",3),
("this is the fierst one was learning",1),
("this is good one",4);


ans =
    
    +---------+---------------------------------------------------------+------------+------------+----------+--------------------------------------------------------------------------------------+
| task_id | title                                                   | strat_date | due_date   | priority | DESCRIPTION                                                                          |
+---------+---------------------------------------------------------+------------+------------+----------+--------------------------------------------------------------------------------------+
|       1 | learn MySqL Insert STATEMENT                            | NULL       | NULL       |        1 | NULL                                                                                 |
|       2 | This second table contant was developed by basil ahamed | 2024-06-01 | 2025-06-01 |        2 | this collum passage will contain the big pasage and i am using the txt dataype in it |
|       3 | this title is the thard title                           | 2024-06-01 | 2024-07-01 |        3 | NULL                                                                                 |
|       4 | in this command i will using the current date function  | 2024-06-24 | 2024-09-24 |        3 | NULL                                                                                 |
|       5 | in this command i will using the current date function  | 2024-06-24 | 2024-06-30 |        3 | NULL                                                                                 |
|       6 | this is firest priority                                 | NULL       | NULL       |        1 | NULL                                                                                 |
|       7 | this is second stage here                               | NULL       | NULL       |        2 | NULL                                                                                 |
|       8 | this is this is also second state                       | NULL       | NULL       |        2 | NULL                                                                                 |
|       9 | this is remaing the last reminders                      | NULL       | NULL       |        3 | NULL                                                                                 |
|      10 | this is the fierst one was learning                     | NULL       | NULL       |        1 | NULL                                                                                 |
|      11 | this is good one                                        | NULL       | NULL       |        4 | NULL                                                                                 |
+---------+---------------------------------------------------------+------------+------------+----------+--------------------------------------------------------------------------------------+



========================================================================================================================================================================================================

25/06/2024

to find the structure of the tables number_of_employees 
===>
    desc employess

    mysql> show employees;
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'employees' at line 1
mysql> desc employees;
+----------------+--------------+------+-----+---------+-------+
| Field          | Type         | Null | Key | Default | Extra |
+----------------+--------------+------+-----+---------+-------+
| employeeNumber | int          | NO   | PRI | NULL    |       |
| lastName       | varchar(50)  | NO   |     | NULL    |       |
| firstName      | varchar(50)  | NO   |     | NULL    |       |
| extension      | varchar(10)  | NO   |     | NULL    |       |
| email          | varchar(100) | NO   |     | NULL    |       |
| officeCode     | varchar(10)  | NO   | MUL | NULL    |       |
| reportsTo      | int          | YES  | MUL | NULL    |       |
| jobTitle       | varchar(50)  | NO   |     | NULL    |       |
+----------------+--------------+------+-----+---------+-------+
8 rows in set (0.03 sec)




display the all the columns and all rows data for the table employess we can use the 
====> select * from employees;








displaying the firstname and lastname and email for the employees we can youe the command;

===> mysql> select firstName, lastName, email from employees;
+-----------+-----------+---------------------------------+
| firstName | lastName  | email                           |
+-----------+-----------+---------------------------------+
| Diane     | Murphy    | dmurphy@classicmodelcars.com    |
| Mary      | Patterson | mpatterso@classicmodelcars.com  |
| Jeff      | Firrelli  | jfirrelli@classicmodelcars.com  |
| William   | Patterson | wpatterson@classicmodelcars.com |
| Gerard    | Bondur    | gbondur@classicmodelcars.com    |
| Anthony   | Bow       | abow@classicmodelcars.com       |
| Leslie    | Jennings  | ljennings@classicmodelcars.com  |
| Leslie    | Thompson  | lthompson@classicmodelcars.com  |
| Julie     | Firrelli  | jfirrelli@classicmodelcars.com  |
| Steve     | Patterson | spatterson@classicmodelcars.com |
| Foon Yue  | Tseng     | ftseng@classicmodelcars.com     |
| George    | Vanauf    | gvanauf@classicmodelcars.com    |
| Loui      | Bondur    | lbondur@classicmodelcars.com    |
| Gerard    | Hernandez | ghernande@classicmodelcars.com  |
| Pamela    | Castillo  | pcastillo@classicmodelcars.com  |
| Larry     | Bott      | lbott@classicmodelcars.com      |
| Barry     | Jones     | bjones@classicmodelcars.com     |
| Andy      | Fixter    | afixter@classicmodelcars.com    |
| Peter     | Marsh     | pmarsh@classicmodelcars.com     |
| Tom       | King      | tking@classicmodelcars.com      |
| Mami      | Nishi     | mnishi@classicmodelcars.com     |
| Yoshimi   | Kato      | ykato@classicmodelcars.com      |
| Martin    | Gerard    | mgerard@classicmodelcars.com    |
+-----------+-----------+---------------------------------+
23 rows in set (0.00 sec)




displaying the firstname and lastname for the employees we can youe the command;

==> mysql> select firstName, lastName from employees;
+-----------+-----------+
| firstName | lastName  |
+-----------+-----------+
| Diane     | Murphy    |
| Mary      | Patterson |
| Jeff      | Firrelli  |
| William   | Patterson |
| Gerard    | Bondur    |
| Anthony   | Bow       |
| Leslie    | Jennings  |
| Leslie    | Thompson  |
| Julie     | Firrelli  |
| Steve     | Patterson |
| Foon Yue  | Tseng     |
| George    | Vanauf    |
| Loui      | Bondur    |
| Gerard    | Hernandez |
| Pamela    | Castillo  |
| Larry     | Bott      |
| Barry     | Jones     |
| Andy      | Fixter    |
| Peter     | Marsh     |
| Tom       | King      |
| Mami      | Nishi     |
| Yoshimi   | Kato      |
| Martin    | Gerard    |
+-----------+-----------+
23 rows in set (0.00 sec)

display the full name for the employees;


mysql> select concat(firstName , " " , lastName) as fullname from employees;
+-------------------+
| fullname          |
+-------------------+
| Diane Murphy      |
| Mary Patterson    |
| Jeff Firrelli     |
| William Patterson |
| Gerard Bondur     |
| Anthony Bow       |
| Leslie Jennings   |
| Leslie Thompson   |
| Julie Firrelli    |
| Steve Patterson   |
| Foon Yue Tseng    |
| George Vanauf     |
| Loui Bondur       |
| Gerard Hernandez  |
| Pamela Castillo   |
| Larry Bott        |
| Barry Jones       |
| Andy Fixter       |
| Peter Marsh       |
| Tom King          |
| Mami Nishi        |
| Yoshimi Kato      |
| Martin Gerard     |
+-------------------+
23 rows in set (0.00 sec)




displaying the current date and TIME

select now() "datetime";

mysql> select now() "datetime";
+---------------------+
| datetime            |
+---------------------+
| 2024-06-25 11:32:37 |
+---------------------+
1 row in set (0.01 sec)



to display the current date ONLY


mysql> select current_date() date;
+------------+
| date       |
+------------+
| 2024-06-25 |
+------------+
1 row in set (0.00 sec)



//to perform the arathimatic calculation we can perform This


mysql> select 23894732894718347*98 aratimatic;
+---------------------+
| aratimatic          |
+---------------------+
| 2341683823682398006 |
+---------------------+
1 row in set (0.00 sec)




//to display the loggeed user

mysql> select current_user() username;
+----------------+
| username       |
+----------------+
| root@localhost |
+----------------+
1 row in set (0.00 sec)



to display the ofice details only city phone and office code frpm offices;


mysql> select officeCode,city,phone from offices;
+------------+---------------+------------------+
| officeCode | city          | phone            |
+------------+---------------+------------------+
| 1          | San Francisco | +1 650 219 4782  |
| 2          | Boston        | +1 215 837 0825  |
| 3          | NYC           | +1 212 555 3000  |
| 4          | Paris         | +33 14 723 4404  |
| 5          | Tokyo         | +81 33 224 5000  |
| 6          | Sydney        | +61 2 9264 2451  |
| 7          | London        | +44 20 7877 2041 |
+------------+---------------+------------------+
7 rows in set (0.00 sec)



to display the ofice details only city phone and office code frpm offices; desending otder

mysql> select officeCode,city,phone from offices order by city desc;
+------------+---------------+------------------+
| officeCode | city          | phone            |
+------------+---------------+------------------+
| 5          | Tokyo         | +81 33 224 5000  |
| 6          | Sydney        | +61 2 9264 2451  |
| 1          | San Francisco | +1 650 219 4782  |
| 4          | Paris         | +33 14 723 4404  |
| 3          | NYC           | +1 212 555 3000  |
| 7          | London        | +44 20 7877 2041 |
| 2          | Boston        | +1 215 837 0825  |
+------------+---------------+------------------+
7 rows in set (0.00 sec)



to disply the city, country phone officecode in country in desending order and city as asending ORDER

mysql> select officeCode,city,phone,country from offices order by country desc, city asc;
+------------+---------------+------------------+-----------+
| officeCode | city          | phone            | country   |
+------------+---------------+------------------+-----------+
| 2          | Boston        | +1 215 837 0825  | USA       |
| 3          | NYC           | +1 212 555 3000  | USA       |
| 1          | San Francisco | +1 650 219 4782  | USA       |
| 7          | London        | +44 20 7877 2041 | UK        |
| 5          | Tokyo         | +81 33 224 5000  | Japan     |
| 4          | Paris         | +33 14 723 4404  | France    |
| 6          | Sydney        | +61 2 9264 2451  | Australia |
+------------+---------------+------------------+-----------+
7 rows in set (0.00 sec)


// to select the order number and quantity and much more and onluy show 10 lines:



mysql> select orderNumber, productCode, quantityOrdered from orderdetails limit 10;
+-------------+-------------+-----------------+
| orderNumber | productCode | quantityOrdered |
+-------------+-------------+-----------------+
|       10100 | S18_1749    |              30 |
|       10100 | S18_2248    |              50 |
|       10100 | S18_4409    |              22 |
|       10100 | S24_3969    |              49 |
|       10101 | S18_2325    |              25 |
|       10101 | S18_2795    |              26 |
|       10101 | S24_1937    |              45 |
|       10101 | S24_2022    |              46 |
|       10102 | S18_1342    |              39 |
|       10102 | S18_1367    |              41 |
+-------------+-------------+-----------------+
10 rows in set (0.00 sec)


select orderNumber, productCode, quantityOrdered,priceEach * quantityOrdered as totalprice from orderdetails limit 10 and dislay the total price;

mysql> select orderNumber, productCode, quantityOrdered,priceEach * quantityOrdered as totalprice from orderdetails limit 10;
+-------------+-------------+-----------------+------------+
| orderNumber | productCode | quantityOrdered | totalprice |
+-------------+-------------+-----------------+------------+
|       10100 | S18_1749    |              30 |    4080.00 |
|       10100 | S18_2248    |              50 |    2754.50 |
|       10100 | S18_4409    |              22 |    1660.12 |
|       10100 | S24_3969    |              49 |    1729.21 |
|       10101 | S18_2325    |              25 |    2701.50 |
|       10101 | S18_2795    |              26 |    4343.56 |
|       10101 | S24_1937    |              45 |    1463.85 |
|       10101 | S24_2022    |              46 |    2040.10 |
|       10102 | S18_1342    |              39 |    3726.45 |
|       10102 | S18_1367    |              41 |    1768.33 |
+-------------+-------------+-----------------+------------+
10 rows in set (0.02 sec)



in order by asending
select orderNumber, productCode, quantityOrdered,priceEach,priceEach * quantityOrdered as totalprice from orderdetails order by priceEach * quantityOrdered limit 10;

mysql> select orderNumber, productCode, quantityOrdered,priceEach,priceEach * quantityOrdered as totalprice from orderdetails order by priceEach * quantityOrdered limit 10;
+-------------+-------------+-----------------+-----------+------------+
| orderNumber | productCode | quantityOrdered | priceEach | totalprice |
+-------------+-------------+-----------------+-----------+------------+
|       10419 | S24_2972    |              15 |     32.10 |     481.50 |
|       10420 | S24_3969    |              15 |     35.29 |     529.35 |
|       10322 | S24_1937    |              20 |     26.55 |     531.00 |
|       10407 | S18_4409    |               6 |     91.11 |     546.66 |
|       10425 | S32_2509    |              11 |     50.32 |     553.52 |
|       10344 | S24_1937    |              20 |     27.88 |     557.60 |
|       10110 | S24_1937    |              20 |     28.88 |     577.60 |
|       10280 | S24_1937    |              20 |     29.87 |     597.40 |
|       10408 | S24_3969    |              15 |     41.03 |     615.45 |
|       10409 | S18_2325    |               6 |    104.25 |     625.50 |
+-------------+-------------+-----------------+-----------+------------+
10 rows in set (0.00 sec)



total price in desending and limite of the total price


mysql> select orderNumber, productCode, quantityOrdered,priceEach,priceEach * quantityOrdered as totalprice from orderdetails order by priceEach * quantityOrdered desc limit 10;
+-------------+-------------+-----------------+-----------+------------+
| orderNumber | productCode | quantityOrdered | priceEach | totalprice |
+-------------+-------------+-----------------+-----------+------------+
|       10403 | S10_4698    |              66 |    174.29 |   11503.14 |
|       10405 | S12_4675    |              97 |    115.16 |   11170.52 |
|       10407 | S18_1749    |              76 |    141.10 |   10723.60 |
|       10404 | S12_1099    |              64 |    163.44 |   10460.16 |
|       10312 | S10_1949    |              48 |    214.30 |   10286.40 |
|       10424 | S10_1949    |              50 |    201.44 |   10072.00 |
|       10348 | S12_1108    |              48 |    207.80 |    9974.40 |
|       10405 | S24_3856    |              76 |    127.79 |    9712.04 |
|       10196 | S12_1108    |              47 |    203.64 |    9571.08 |
|       10206 | S10_1949    |              47 |    203.59 |    9568.73 |
+-------------+-------------+-----------------+-----------+------------+
10 rows in set (0.00 sec)




to displyay the UNIQUE values 


mysql> select distinct status from orders;
+------------+
| status     |
+------------+
| Shipped    |
| Resolved   |
| Cancelled  |
| On Hold    |
| Disputed   |
| In Process |
+------------+
6 rows in set (0.02 sec)



    display the ordernumber, status from orders;

    
mysql> select ordernumber, status from orders limit 10;
+-------------+---------+
| ordernumber | status  |
+-------------+---------+
|       10100 | Shipped |
|       10101 | Shipped |
|       10102 | Shipped |
|       10103 | Shipped |
|       10104 | Shipped |
|       10105 | Shipped |
|       10106 | Shipped |
|       10107 | Shipped |
|       10108 | Shipped |
|       10109 | Shipped |
+-------------+---------+
10 rows in set (0.00 sec)



display the order i the order in inprocess, on hold and much bore 


    select ordernumber, status 
    from orders 
    order by fiels(status,
    "In Process",
    "On Hold",
    "Cancelled",
    "Resolved",
    "Disputed",
    "Shipped");

    ===>
    mysql> select ordernumber, status from orders order by field(status,"In Process","On Hold","Cancelled","Resolved","Disputed","Shipped") limit 30;
+-------------+------------+
| ordernumber | status     |
+-------------+------------+
|       10422 | In Process |
|       10425 | In Process |
|       10423 | In Process |
|       10421 | In Process |
|       10424 | In Process |
|       10420 | In Process |
|       10401 | On Hold    |
|       10414 | On Hold    |
|       10334 | On Hold    |
|       10407 | On Hold    |
|       10253 | Cancelled  |
|       10260 | Cancelled  |
|       10248 | Cancelled  |
|       10262 | Cancelled  |
|       10179 | Cancelled  |
|       10167 | Cancelled  |
|       10327 | Resolved   |
|       10386 | Resolved   |
|       10367 | Resolved   |
|       10164 | Resolved   |
|       10406 | Disputed   |
|       10415 | Disputed   |
|       10417 | Disputed   |
|       10104 | Shipped    |
|       10111 | Shipped    |
|       10112 | Shipped    |
|       10122 | Shipped    |
|       10125 | Shipped    |
|       10126 | Shipped    |
|       10127 | Shipped    |
+-------------+------------+
30 rows in set (0.00 sec)


==============================================================================================================================================================

///////filtering are don by the where clasue 

// seelct the value wheer the values are in process in orderlist

mysql> select *
    -> from orders
    -> where status = "In Process";
+-------------+------------+--------------+-------------+------------+-----------------------------------------------------+----------------+
| orderNumber | orderDate  | requiredDate | shippedDate | status     | comments                                            | customerNumber |
+-------------+------------+--------------+-------------+------------+-----------------------------------------------------+----------------+
|       10420 | 2005-05-29 | 2005-06-07   | NULL        | In Process | NULL                                                |            282 |
|       10421 | 2005-05-29 | 2005-06-06   | NULL        | In Process | Custom shipping instructions were sent to warehouse |            124 |
|       10422 | 2005-05-30 | 2005-06-11   | NULL        | In Process | NULL                                                |            157 |
|       10423 | 2005-05-30 | 2005-06-05   | NULL        | In Process | NULL                                                |            314 |
|       10424 | 2005-05-31 | 2005-06-08   | NULL        | In Process | NULL                                                |            141 |
|       10425 | 2005-05-31 | 2005-06-07   | NULL        | In Process | NULL                                                |            119 |
+-------------+------------+--------------+-------------+------------+-----------------------------------------------------+----------------+
6 rows in set (0.02 secsee




// selecting the ordernumber and ordrdate and STATUS

mysql> select ordernumber, orderdate, status
    -> from orders
    -> where status = "In Process";
+-------------+------------+------------+
| ordernumber | orderdate  | status     |
+-------------+------------+------------+
|       10420 | 2005-05-29 | In Process |
|       10421 | 2005-05-29 | In Process |
|       10422 | 2005-05-30 | In Process |
|       10423 | 2005-05-30 | In Process |
|       10424 | 2005-05-31 | In Process |
|       10425 | 2005-05-31 | In Process |
+-------------+------------+------------+
6 rows in set (0.00 sec)



//to display the content by desending order 

mysql> select ordernumber, orderdate, status
    -> from orders
    -> where status = "In Process"
    -> order by orderdate;
+-------------+------------+------------+
| ordernumber | orderdate  | status     |
+-------------+------------+------------+
|       10420 | 2005-05-29 | In Process |
|       10421 | 2005-05-29 | In Process |
|       10422 | 2005-05-30 | In Process |
|       10423 | 2005-05-30 | In Process |
|       10424 | 2005-05-31 | In Process |
|       10425 | 2005-05-31 | In Process |
+-------------+------------+------------+
6 rows in set (0.00 sec)


display the all the employees whois re woerking in the sales rep in the employess details


mysql> select firstname, lastname, jobtitle from employees where jobtitle="sales rep";
+-----------+-----------+-----------+
| firstname | lastname  | jobtitle  |
+-----------+-----------+-----------+
| Leslie    | Jennings  | Sales Rep |
| Leslie    | Thompson  | Sales Rep |
| Julie     | Firrelli  | Sales Rep |
| Steve     | Patterson | Sales Rep |
| Foon Yue  | Tseng     | Sales Rep |
| George    | Vanauf    | Sales Rep |
| Loui      | Bondur    | Sales Rep |
| Gerard    | Hernandez | Sales Rep |
| Pamela    | Castillo  | Sales Rep |
| Larry     | Bott      | Sales Rep |
| Barry     | Jones     | Sales Rep |
| Andy      | Fixter    | Sales Rep |
| Peter     | Marsh     | Sales Rep |
| Tom       | King      | Sales Rep |
| Mami      | Nishi     | Sales Rep |
| Yoshimi   | Kato      | Sales Rep |
| Martin    | Gerard    | Sales Rep |
+-----------+-----------+-----------+
17 rows in set (0.00 sec)


// display the employess how job are president and vp sale

mysql> select firstname, lastname, jobtitle from employees where jobtitle in ("President","VP Sales", "sales rep");
+-----------+-----------+-----------+
| firstname | lastname  | jobtitle  |
+-----------+-----------+-----------+
| Diane     | Murphy    | President |
| Mary      | Patterson | VP Sales  |
+-----------+-----------+-----------+
2 rows in set (0.00 sec)





// display the employess how job are president and vp sale and salses rep
mysql> select firstname, lastname, jobtitle from employees where jobtitle in ("President","VP Sales", "sales rep");
+-----------+-----------+-----------+
| firstname | lastname  | jobtitle  |
+-----------+-----------+-----------+
| Diane     | Murphy    | President |
| Mary      | Patterson | VP Sales  |
| Leslie    | Jennings  | Sales Rep |
| Leslie    | Thompson  | Sales Rep |
| Julie     | Firrelli  | Sales Rep |
| Steve     | Patterson | Sales Rep |
| Foon Yue  | Tseng     | Sales Rep |
| George    | Vanauf    | Sales Rep |
| Loui      | Bondur    | Sales Rep |
| Gerard    | Hernandez | Sales Rep |
| Pamela    | Castillo  | Sales Rep |
| Larry     | Bott      | Sales Rep |
| Barry     | Jones     | Sales Rep |
| Andy      | Fixter    | Sales Rep |
| Peter     | Marsh     | Sales Rep |
| Tom       | King      | Sales Rep |
| Mami      | Nishi     | Sales Rep |
| Yoshimi   | Kato      | Sales Rep |
| Martin    | Gerard    | Sales Rep |
+-----------+-----------+-----------+
19 rows in set (0.00 sec)



// display the employess how job are president and vp sale and salses rep and reporting to 
mysql> select firstname, lastname, jobtitle, reportsto from employees where jobtitle in ("President","VP Sales", "sales rep");
+-----------+-----------+-----------+-----------+
| firstname | lastname  | jobtitle  | reportsto |
+-----------+-----------+-----------+-----------+
| Diane     | Murphy    | President |      NULL |
| Mary      | Patterson | VP Sales  |      1002 |
| Leslie    | Jennings  | Sales Rep |      1143 |
| Leslie    | Thompson  | Sales Rep |      1143 |
| Julie     | Firrelli  | Sales Rep |      1143 |
| Steve     | Patterson | Sales Rep |      1143 |
| Foon Yue  | Tseng     | Sales Rep |      1143 |
| George    | Vanauf    | Sales Rep |      1143 |
| Loui      | Bondur    | Sales Rep |      1102 |
| Gerard    | Hernandez | Sales Rep |      1102 |
| Pamela    | Castillo  | Sales Rep |      1102 |
| Larry     | Bott      | Sales Rep |      1102 |
| Barry     | Jones     | Sales Rep |      1102 |
| Andy      | Fixter    | Sales Rep |      1088 |
| Peter     | Marsh     | Sales Rep |      1088 |
| Tom       | King      | Sales Rep |      1088 |
| Mami      | Nishi     | Sales Rep |      1056 |
| Yoshimi   | Kato      | Sales Rep |      1621 |
| Martin    | Gerard    | Sales Rep |      1102 |
+-----------+-----------+-----------+-----------+
19 rows in set (0.00 sec)




// display the employess how job are president and vp sale and salses rep and reporting to  the numebr of 1143

mysql> select firstname, lastname, jobtitle, reportsto from employees where jobtitle in ("President","VP Sales", "sales rep") and reportsto = 1143;
+-----------+-----------+-----------+-----------+
| firstname | lastname  | jobtitle  | reportsto |
+-----------+-----------+-----------+-----------+
| Leslie    | Jennings  | Sales Rep |      1143 |
| Leslie    | Thompson  | Sales Rep |      1143 |
| Julie     | Firrelli  | Sales Rep |      1143 |
| Steve     | Patterson | Sales Rep |      1143 |
| Foon Yue  | Tseng     | Sales Rep |      1143 |
| George    | Vanauf    | Sales Rep |      1143 |
+-----------+-----------+-----------+-----------+
6 rows in set (0.03 sec)




// display the employess how job are president and vp sale and salses rep and reporting to  the numebr of 1143 except

mysql> select firstname, lastname, jobtitle, reportsto from employees where jobtitle in ("President","VP Sales", "sales rep") and reportsto != 1143;
+-----------+-----------+-----------+-----------+
| firstname | lastname  | jobtitle  | reportsto |
+-----------+-----------+-----------+-----------+
| Mary      | Patterson | VP Sales  |      1002 |
| Loui      | Bondur    | Sales Rep |      1102 |
| Gerard    | Hernandez | Sales Rep |      1102 |
| Pamela    | Castillo  | Sales Rep |      1102 |
| Larry     | Bott      | Sales Rep |      1102 |
| Barry     | Jones     | Sales Rep |      1102 |
| Andy      | Fixter    | Sales Rep |      1088 |
| Peter     | Marsh     | Sales Rep |      1088 |
| Tom       | King      | Sales Rep |      1088 |
| Mami      | Nishi     | Sales Rep |      1056 |
| Yoshimi   | Kato      | Sales Rep |      1621 |
| Martin    | Gerard    | Sales Rep |      1102 |
+-----------+-----------+-----------+-----------+
12 rows in set (0.00 sec)



// display the employess how job are president and vp sale and salses rep and reporting to  the numebr of 1143 grater then 

mysql> select firstname, lastname, jobtitle, reportsto from employees where jobtitle in ("President","VP Sales", "sales rep") and reportsto >= 1143;
+-----------+-----------+-----------+-----------+
| firstname | lastname  | jobtitle  | reportsto |
+-----------+-----------+-----------+-----------+
| Leslie    | Jennings  | Sales Rep |      1143 |
| Leslie    | Thompson  | Sales Rep |      1143 |
| Julie     | Firrelli  | Sales Rep |      1143 |
| Steve     | Patterson | Sales Rep |      1143 |
| Foon Yue  | Tseng     | Sales Rep |      1143 |
| George    | Vanauf    | Sales Rep |      1143 |
| Yoshimi   | Kato      | Sales Rep |      1621 |
+-----------+-----------+-----------+-----------+
7 rows in set (0.02 sec)




// display the employess how job are president and vp sale and salses rep and reporting to  the numebr of 1143 grater then and display the null values also
mysql> select firstname, lastname, jobtitle, reportsto from employees where jobtitle in ("President","VP Sales", "sales rep") and reportsto >= 1143 or reportsto is null;
+-----------+-----------+-----------+-----------+
| firstname | lastname  | jobtitle  | reportsto |
+-----------+-----------+-----------+-----------+
| Diane     | Murphy    | President |      NULL |
| Leslie    | Jennings  | Sales Rep |      1143 |
| Leslie    | Thompson  | Sales Rep |      1143 |
| Julie     | Firrelli  | Sales Rep |      1143 |
| Steve     | Patterson | Sales Rep |      1143 |
| Foon Yue  | Tseng     | Sales Rep |      1143 |
| George    | Vanauf    | Sales Rep |      1143 |
| Yoshimi   | Kato      | Sales Rep |      1621 |
+-----------+-----------+-----------+-----------+
8 rows in set (0.00 sec)



// display the employess how job are president and vp sale and salses rep and not reporting 

mysql> select firstname, lastname, jobtitle, reportsto from employees where jobtitle in ("President","VP Sales", "sales rep") and reportsto is null;
+-----------+----------+-----------+-----------+
| firstname | lastname | jobtitle  | reportsto |
+-----------+----------+-----------+-----------+
| Diane     | Murphy   | President |      NULL |
+-----------+----------+-





=======================================================================================================================================================================================================================
self learning


table structures


mysql> show tables;
+-------------------------+
| Tables_in_classicmodels |
+-------------------------+
| customers               |
| employees               |
| offices                 |
| orderdetails            |
| orders                  |
| payments                |
| productlines            |
| products                |
+-------------------------+
8 rows in set (0.00 sec)



mysql> desc customers;
+------------------------+---------------+------+-----+---------+-------+
| Field                  | Type          | Null | Key | Default | Extra |
+------------------------+---------------+------+-----+---------+-------+
| customerNumber         | int           | NO   | PRI | NULL    |       |
| customerName           | varchar(50)   | NO   |     | NULL    |       |
| contactLastName        | varchar(50)   | NO   |     | NULL    |       |
| contactFirstName       | varchar(50)   | NO   |     | NULL    |       |
| phone                  | varchar(50)   | NO   |     | NULL    |       |
| addressLine1           | varchar(50)   | NO   |     | NULL    |       |
| addressLine2           | varchar(50)   | YES  |     | NULL    |       |
| city                   | varchar(50)   | NO   |     | NULL    |       |
| state                  | varchar(50)   | YES  |     | NULL    |       |
| postalCode             | varchar(15)   | YES  |     | NULL    |       |
| country                | varchar(50)   | NO   |     | NULL    |       |
| salesRepEmployeeNumber | int           | YES  | MUL | NULL    |       |
| creditLimit            | decimal(10,2) | YES  |     | NULL    |       |
+------------------------+---------------+------+-----+---------+-------+
13 rows in set (0.09 sec)

mysql> desc employees;
+----------------+--------------+------+-----+---------+-------+
| Field          | Type         | Null | Key | Default | Extra |
+----------------+--------------+------+-----+---------+-------+
| employeeNumber | int          | NO   | PRI | NULL    |       |
| lastName       | varchar(50)  | NO   |     | NULL    |       |
| firstName      | varchar(50)  | NO   |     | NULL    |       |
| extension      | varchar(10)  | NO   |     | NULL    |       |
| email          | varchar(100) | NO   |     | NULL    |       |
| officeCode     | varchar(10)  | NO   | MUL | NULL    |       |
| reportsTo      | int          | YES  | MUL | NULL    |       |
| jobTitle       | varchar(50)  | NO   |     | NULL    |       |
+----------------+--------------+------+-----+---------+-------+
8 rows in set (0.00 sec)

mysql> desc ofices
    -> ;
-- ERROR 1146 (42S02): Table 'classicmodels.ofices' doesn't exist
mysql> desc offices
    -> ;
+--------------+-------------+------+-----+---------+-------+
| Field        | Type        | Null | Key | Default | Extra |
+--------------+-------------+------+-----+---------+-------+
| officeCode   | varchar(10) | NO   | PRI | NULL    |       |
| city         | varchar(50) | NO   |     | NULL    |       |
| phone        | varchar(50) | NO   |     | NULL    |       |
| addressLine1 | varchar(50) | NO   |     | NULL    |       |
| addressLine2 | varchar(50) | YES  |     | NULL    |       |
| state        | varchar(50) | YES  |     | NULL    |       |
| country      | varchar(50) | NO   |     | NULL    |       |
| postalCode   | varchar(15) | NO   |     | NULL    |       |
| territory    | varchar(10) | NO   |     | NULL    |       |
+--------------+-------------+------+-----+---------+-------+
9 rows in set (0.00 sec)

mysql> desc orderdetails
    -> ;
+-----------------+---------------+------+-----+---------+-------+
| Field           | Type          | Null | Key | Default | Extra |
+-----------------+---------------+------+-----+---------+-------+
| orderNumber     | int           | NO   | PRI | NULL    |       |
| productCode     | varchar(15)   | NO   | PRI | NULL    |       |
| quantityOrdered | int           | NO   |     | NULL    |       |
| priceEach       | decimal(10,2) | NO   |     | NULL    |       |
| orderLineNumber | smallint      | NO   |     | NULL    |       |
+-----------------+---------------+------+-----+---------+-------+
5 rows in set (0.00 sec)



mysql> desc orders;
+----------------+-------------+------+-----+---------+-------+
| Field          | Type        | Null | Key | Default | Extra |
+----------------+-------------+------+-----+---------+-------+
| orderNumber    | int         | NO   | PRI | NULL    |       |
| orderDate      | date        | NO   |     | NULL    |       |
| requiredDate   | date        | NO   |     | NULL    |       |
| shippedDate    | date        | YES  |     | NULL    |       |
| status         | varchar(15) | NO   |     | NULL    |       |
| comments       | text        | YES  |     | NULL    |       |
| customerNumber | int         | NO   | MUL | NULL    |       |
+----------------+-------------+------+-----+---------+-------+
7 rows in set (0.02 sec)

mysql> desc payments;
+----------------+---------------+------+-----+---------+-------+
| Field          | Type          | Null | Key | Default | Extra |
+----------------+---------------+------+-----+---------+-------+
| customerNumber | int           | NO   | PRI | NULL    |       |
| checkNumber    | varchar(50)   | NO   | PRI | NULL    |       |
| paymentDate    | date          | NO   |     | NULL    |       |
| amount         | decimal(10,2) | NO   |     | NULL    |       |
+----------------+---------------+------+-----+---------+-------+
4 rows in set (0.00 sec)

mysql> desc productlines;
+-----------------+---------------+------+-----+---------+-------+
| Field           | Type          | Null | Key | Default | Extra |
+-----------------+---------------+------+-----+---------+-------+
| productLine     | varchar(50)   | NO   | PRI | NULL    |       |
| textDescription | varchar(4000) | YES  |     | NULL    |       |
| htmlDescription | mediumtext    | YES  |     | NULL    |       |
| image           | mediumblob    | YES  |     | NULL    |       |
+-----------------+---------------+------+-----+---------+-------+
4 rows in set (0.01 sec)

mysql> desc products;
+--------------------+---------------+------+-----+---------+-------+
| Field              | Type          | Null | Key | Default | Extra |
+--------------------+---------------+------+-----+---------+-------+
| productCode        | varchar(15)   | NO   | PRI | NULL    |       |
| productName        | varchar(70)   | NO   |     | NULL    |       |
| productLine        | varchar(50)   | NO   | MUL | NULL    |       |
| productScale       | varchar(10)   | NO   |     | NULL    |       |
| productVendor      | varchar(50)   | NO   |     | NULL    |       |
| productDescription | text          | NO   |     | NULL    |       |
| quantityInStock    | smallint      | NO   |     | NULL    |       |
| buyPrice           | decimal(10,2) | NO   |     | NULL    |       |
| MSRP               | decimal(10,2) | NO   |     | NULL    |       |
+--------------------+---------------+------+-----+---------+-------+
9 rows in set (0.00 sec)


=================================================================================


morning reversing concepts


order by (asc, desc , Fields())
limit
WHERE
comparison operacits = , <, >, <=, >=, !=
logical operators = and or NOT
other operators is numm , is not null


pattern like(
displauy the record satrt with the "a"

mysql> select productname from products where productname like "%A";
+-------------------------+
| productname             |
+-------------------------+
| 1972 Alfa Romeo GTA     |
| 1969 Corvair Monza      |
| 1970 Plymouth Hemi Cuda |
| 1903 Ford Model A       |
| 1985 Toyota Supra       |
| 1961 Chevrolet Impala   |
+-------------------------+
6 rows in set (0.28 sec)


display the record start with the j

mysql> select firstname, lastname from employees where firstname like "j%";
+-----------+----------+
| firstname | lastname |
+-----------+----------+
| Jeff      | Firrelli |
| Julie     | Firrelli |
+-----------+----------+
2 rows in set (0.00 sec)


get the detail of the emply start with m and end with NAMES

mysql> select firstname, lastname from employees where firstname like "m%n";
+-----------+----------+
| firstname | lastname |
+-----------+----------+
| Martin    | Gerard   |
+-----------+----------+
1 row in set (0.00 sec)


end with the i 

mysql> select firstname, lastname from employees where firstname like "%i";
+-----------+----------+
| firstname | lastname |
+-----------+----------+
| Loui      | Bondur   |
| Mami      | Nishi    |
| Yoshimi   | Kato     |
+-----------+----------+
3 rows in set (0.00 sec)


end with MIN

mysql> select firstname, lastname from employees where firstname like "%mi";
+-----------+----------+
| firstname | lastname |
+-----------+----------+
| Mami      | Nishi    |
| Yoshimi   | Kato     |
+-----------+----------+
2 rows in set (0.00 sec)



thard letter was r 

mysql> select firstname, lastname from employees where firstname like "__r%";
+-----------+-----------+
| firstname | lastname  |
+-----------+-----------+
| Mary      | Patterson |
| Gerard    | Bondur    |
| Gerard    | Hernandez |
| Larry     | Bott      |
| Barry     | Jones     |
| Martin    | Gerard    |
+-----------+-----------+
6 rows in set (0.00 sec)

mysql>


2 r in the database
mysql> select firstname, lastname from employees where firstname like "__rr%";
+-----------+----------+
| firstname | lastname |
+-----------+----------+
| Larry     | Bott     |
| Barry     | Jones    |
+-----------+----------+
2 rows in set (0.00 sec)
)

3 and 5 letter whoude be RADIANS


mysql>  select firstname, lastname from employees where firstname like "__r_r%";
+-----------+-----------+
| firstname | lastname  |
+-----------+-----------+
| Gerard    | Bondur    |
| Gerard    | Hernandez |
+-----------+-----------+
2 rows in set (0.00 sec)




mysql>  select firstname, lastname from employees where firstname like "%r__d";
+-----------+-----------+
| firstname | lastname  |
+-----------+-----------+
| Gerard    | Bondur    |
| Gerard    | Hernandez |
+-----------+-----------+
2 rows in set (0.00 sec)




mysql> select productname,productcode from products where productname like "a%";
+--------------------------------+-------------+
| productname                    | productcode |
+--------------------------------+-------------+
| American Airlines: B767-300    | S700_1691   |
| America West Airlines B757-200 | S700_2466   |
| ATA: B757-300                  | S700_2834   |
| American Airlines: MD-11S      | S700_4002   |
+--------------------------------+-------------+
4 rows in set (0.00 sec)

mysql> select productname,productcode from products where productcode like "%20"
    -> ;
+---------------------------+-------------+
| productname               | productcode |
+---------------------------+-------------+
| 1917 Maxwell Touring Car  | S18_3320    |
| 1937 Horch 930V Limousine | S24_3420    |
| 1961 Chevrolet Impala     | S24_4620    |
+---------------------------+-------------+
3 rows in set (0.00 sec)

mysql> select productname,productcode from products where productcode like "%__20";
+---------------------------+-------------+
| productname               | productcode |
+---------------------------+-------------+
| 1917 Maxwell Touring Car  | S18_3320    |
| 1937 Horch 930V Limousine | S24_3420    |
| 1961 Chevrolet Impala     | S24_4620    |
+---------------------------+-------------+
3 rows in set (0.00 sec)


excape characters

mysql> select productname,productcode from products where productcode like "%\_20%";
+-------------------------------------------+-------------+
| productname                               | productcode |
+-------------------------------------------+-------------+
| 1996 Moto Guzzi 1100i                     | S10_2016    |
| 1960 BSA Gold Star DBD34                  | S24_2000    |
| 18th century schooner                     | S24_2011    |
| 1938 Cadillac V-16 Presidential Limousine | S24_2022    |
| HMS Bounty                                | S700_2047   |
+-------------------------------------------+-------------+
5 rows in set (0.00 sec)


=================================================================================

between 

// select ordern betwwebn 2003 1 to 2003 3

mysql> select ordernumber, orderdate from orders where orderdate between "2003-01-01" and "2003-03-03";
+-------------+------------+
| ordernumber | orderdate  |
+-------------+------------+
|       10100 | 2003-01-06 |
|       10101 | 2003-01-09 |
|       10102 | 2003-01-10 |
|       10103 | 2003-01-29 |
|       10104 | 2003-01-31 |
|       10105 | 2003-02-11 |
|       10106 | 2003-02-17 |
|       10107 | 2003-02-24 |
|       10108 | 2003-03-03 |
+-------------+------------+
9 rows in set (0.06 sec)


dislay the ccost betwwen 90 to 100

mysql> select productcode, productname, buyprice
    -> from products
    -> where buyprice between 90 and 100;
+-------------+--------------------------------------+----------+
| productcode | productname                          | buyprice |
+-------------+--------------------------------------+----------+
| S10_1949    | 1952 Alpine Renault 1300             |    98.58 |
| S10_4698    | 2003 Harley-Davidson Eagle Drag Bike |    91.02 |
| S12_1099    | 1968 Ford Mustang                    |    95.34 |
| S12_1108    | 2001 Ferrari Enzo                    |    95.59 |
| S18_1984    | 1995 Honda Civic                     |    93.89 |
| S18_4027    | 1970 Triumph Spitfire                |    91.92 |
| S24_3856    | 1956 Porsche 356A Coupe              |    98.30 |
+-------------+--------------------------------------+----------+
7 rows in set (0.00 sec)


not betweenb 90 to 100


mysql> select productcode, productname, buyprice
    -> from products
    -> where buyprice not between 90 and 100
    -> limit 30;
+-------------+------------------------------------------+----------+
| productcode | productname                              | buyprice |
+-------------+------------------------------------------+----------+
| S10_1678    | 1969 Harley Davidson Ultimate Chopper    |    48.81 |
| S10_2016    | 1996 Moto Guzzi 1100i                    |    68.99 |
| S10_4757    | 1972 Alfa Romeo GTA                      |    85.68 |
| S10_4962    | 1962 LanciaA Delta 16V                   |   103.42 |
| S12_1666    | 1958 Setra Bus                           |    77.90 |
| S12_2823    | 2002 Suzuki XREO                         |    66.27 |
| S12_3148    | 1969 Corvair Monza                       |    89.14 |
| S12_3380    | 1968 Dodge Charger                       |    75.16 |
| S12_3891    | 1969 Ford Falcon                         |    83.05 |
| S12_3990    | 1970 Plymouth Hemi Cuda                  |    31.92 |
| S12_4473    | 1957 Chevy Pickup                        |    55.70 |
| S12_4675    | 1969 Dodge Charger                       |    58.73 |
| S18_1097    | 1940 Ford Pickup Truck                   |    58.33 |
| S18_1129    | 1993 Mazda RX-7                          |    83.51 |
| S18_1342    | 1937 Lincoln Berline                     |    60.62 |
| S18_1367    | 1936 Mercedes-Benz 500K Special Roadster |    24.26 |
| S18_1589    | 1965 Aston Martin DB5                    |    65.96 |
| S18_1662    | 1980s Black Hawk Helicopter              |    77.27 |
| S18_1749    | 1917 Grand Touring Sedan                 |    86.70 |
| S18_1889    | 1948 Porsche 356-A Roadster              |    53.90 |
| S18_2238    | 1998 Chrysler Plymouth Prowler           |   101.51 |
| S18_2248    | 1911 Ford Town Car                       |    33.30 |
| S18_2319    | 1964 Mercedes Tour Bus                   |    74.86 |
| S18_2325    | 1932 Model A Ford J-Coupe                |    58.48 |
| S18_2432    | 1926 Ford Fire Engine                    |    24.92 |
| S18_2581    | P-51-D Mustang                           |    49.00 |
| S18_2625    | 1936 Harley Davidson El Knucklehead      |    24.23 |
| S18_2795    | 1928 Mercedes-Benz SSK                   |    72.56 |
| S18_2870    | 1999 Indy 500 Monte Carlo SS             |    56.76 |
| S18_2949    | 1913 Ford Model T Speedster              |    60.78 |
+-------------+------------------------------------------+----------+




============================================================================
get the record from startting from 6 and to 10 records


mysql> select customername, creditlimit from customers order by creditlimit desc limit 5,10;
+----------------------------+-------------+
| customername               | creditlimit |
+----------------------------+-------------+
| Saveley & Henriot, Co.     |   123900.00 |
| Marta's Replicas Co.       |   123700.00 |
| L'ordine Souveniers        |   121400.00 |
| Heintze Collectables       |   120800.00 |
| Toms Spezialit├ñten, Ltd   |   120400.00 |
| Rovelli Gifts              |   119600.00 |
| La Rochelle Gifts          |   118200.00 |
| Australian Collectors, Co. |   117300.00 |
| Scandinavian Gift Ideas    |   116400.00 |
| Land of Toys Inc.          |   114900.00 |
+----------------------------+-------------+
10 rows in set (0.00 sec)


get the record second topest record



mysql> select customername, creditlimit from customers order by creditlimit desc limit 1,1;
+------------------------------+-------------+
| customername                 | creditlimit |
+------------------------------+-------------+
| Mini Gifts Distributors Ltd. |   210500.00 |
+------------------------------+-------------+
1 row in set (0.00 sec)



limite 0(position of the row) , 1 (row_count from from position)



=======================================================================================================


aggregate FUNCTION

count FUNCTION

mysql> select count(*) from orders;
+----------+
| count(*) |
+----------+
|      326 |
+----------+
1 row in set (0.00 sec)


aggregate FUNCTION

select productcode, max(quantityOrdered) as Max of quantity,min(quantityOrdered),avg(quantityOrdered),count(quantityOrdered)from orderdetails group by productcode
linit 20;



mysql> select productcode, max(quantityOrdered) max ,min(quantityOrdered) min ,avg(quantityOrdered) avg ,count(quantityOrdered) count from orderdetails where priceeach > 100 group by productcode, priceeach haveing count(priceeach)> 4 order by productcode limit 20;
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'haveing count(priceeach)> 4 order by productcode limit 20' at line 1
mysql> select productcode, max(quantityOrdered) max ,min(quantityOrdered) min ,avg(quantityOrdered) avg ,count(quantityOrdered) count from orderdetails where priceeach > 100 group by productcode, priceeach having count(priceeach)> 4 order by productcode limit 20;
+-------------+------+------+---------+-------+
| productcode | max  | min  | avg     | count |
+-------------+------+------+---------+-------+
| S12_1666    |   49 |   21 | 35.8000 |     5 |
| S12_2823    |   49 |   20 | 33.8000 |     5 |
| S12_3148    |   47 |   34 | 40.0000 |     5 |
| S18_1129    |   42 |   23 | 34.0000 |     5 |
| S18_1129    |   38 |   25 | 30.8000 |     5 |
| S18_1749    |   42 |   21 | 32.5000 |     6 |
| S18_3232    |   36 |   25 | 29.1667 |     6 |
| S18_4027    |   50 |   23 | 30.0000 |     5 |
| S18_4721    |   48 |   28 | 39.6000 |     5 |
| S18_4721    |   48 |   20 | 34.8000 |     5 |
| S24_1578    |   46 |   20 | 33.6000 |     5 |
+-------------+------+------+---------+-------+
11 rows in set (0.15 sec)

mysql> select productcode,priceeach, max(quantityOrdered) max ,min(quantityOrdered) min ,avg(quantityOrdered) avg ,count(quantityOrdered) count from orderdetails where priceeach > 100 group by productcode, priceeach having count(priceeach)> 4 order by productcode limit 20;
+-------------+-----------+------+------+---------+-------+
| productcode | priceeach | max  | min  | avg     | count |
+-------------+-----------+------+------+---------+-------+
| S12_1666    |    121.64 |   49 |   21 | 35.8000 |     5 |
| S12_2823    |    131.04 |   49 |   20 | 33.8000 |     5 |
| S12_3148    |    145.04 |   47 |   34 | 40.0000 |     5 |
| S18_1129    |    114.65 |   42 |   23 | 34.0000 |     5 |
| S18_1129    |    117.48 |   38 |   25 | 30.8000 |     5 |
| S18_1749    |    153.00 |   42 |   21 | 32.5000 |     6 |
| S18_3232    |    137.17 |   36 |   25 | 29.1667 |     6 |
| S18_4027    |    126.39 |   50 |   23 | 30.0000 |     5 |
| S18_4721    |    120.53 |   48 |   28 | 39.6000 |     5 |
| S18_4721    |    124.99 |   48 |   20 | 34.8000 |     5 |
| S24_1578    |    109.32 |   46 |   20 | 33.6000 |     5 |
+-------------+-----------+------+------+---------+-------+
11 rows in set (0.00 sec)







===================================================================================



assign,ent 1




1. Get difference between JOINING_DATE and INCENTIVE_DATE from employee and incentives table

select 

2. Select first_name, incentive amount from employee and incentives table for those employees who have incentives -- and incentive amount greater than 3000

select first_name, incentive from 
3. Select EmployeeName, ManagerName from the employee table.

select employeename, mamagerName from employee
group by 

4. Get department,total salary with respect to a department from employee table.
8. Get department,total salary with respect to a department from employee table order by total salary descending
9. Get department wise maximum salary from employee table order by salary ascending
10. Get department wise minimum salary from employee table order by salary ascending
11. Select department,total salary with respect to a department from employee table where total salary greater
-- than 800000 order by Total_Salary descending




=======================================================================================================================================




1. Get department,total salary with respect to a department from employee table.

sql> select department_id, sum(salary) as total_salary
    -> from employee
    -> group by department_id;
+---------------+--------------+
| department_id | total_salary |
+---------------+--------------+
|            20 |        41000 |
|            30 |        30800 |
|            40 |        16900 |
|            50 |        34100 |
|            60 |        22400 |
|            70 |         2900 |
|            80 |         8900 |
|            90 |         2400 |
|           100 |        12000 |
|           110 |         2800 |
|           130 |         2500 |
|           140 |         6900 |
|           150 |         7800 |
|           160 |         7700 |
|           170 |        17200 |
+---------------+--------------+
15 rows in set (0.00 sec)

2. Get department,total salary with respect to a department from employee table order by total salary descending

mysql> select department_id, sum(salary) as total_salary
    -> from employee
    -> group by department_id
    -> order by sum(salary) desc;
+---------------+--------------+
| department_id | total_salary |
+---------------+--------------+
|            20 |        41000 |
|            50 |        34100 |
|            30 |        30800 |
|            60 |        22400 |
|           170 |        17200 |
|            40 |        16900 |
|           100 |        12000 |
|            80 |         8900 |
|           150 |         7800 |
|           160 |         7700 |
|           140 |         6900 |
|            70 |         2900 |
|           110 |         2800 |
|           130 |         2500 |
|            90 |         2400 |
+---------------+--------------+
15 rows in set (0.00 sec)

3. Get department wise maximum salary from employee table order by salary ascending

mysql> select department_id, max(salary) as maximum_salary
    -> from employee
    -> group by department_id
    -> order by max(salary) ASC;
+---------------+----------------+
| department_id | maximum_salary |
+---------------+----------------+
|            90 |           2400 |
|           130 |           2500 |
|           110 |           2800 |
|            70 |           2900 |
|            80 |           5800 |
|           140 |           6900 |
|           160 |           7700 |
|           150 |           7800 |
|            40 |           7900 |
|            50 |           8200 |
|            60 |           9000 |
|           170 |           9000 |
|           100 |          12000 |
|            30 |          17000 |
|            20 |          24000 |
+---------------+----------------+
15 rows in set (0.07 sec)

4. Get department wise minimum salary from employee table order by salary ascending


mysql> select department_id, min(salary) as minimum_salary
    -> from employee
    -> group by department_id
    -> order by min(salary) ASC;
+---------------+----------------+
| department_id | minimum_salary |
+---------------+----------------+
|            50 |           2200 |
|            90 |           2400 |
|           130 |           2500 |
|            60 |           2600 |
|            30 |           2800 |
|           110 |           2800 |
|            70 |           2900 |
|            80 |           3100 |
|            40 |           4200 |
|           140 |           6900 |
|           160 |           7700 |
|           150 |           7800 |
|           170 |           8200 |
|           100 |          12000 |
|            20 |          17000 |
+---------------+----------------+
15 rows in set (0.00 sec)





5. Select department,total salary with respect to a department from employee table where total salary greater
-- than 800000 order by Total_Salary descending


mysql> select department_id, sum(salary)
    -> from employee
    -> group by department_id
    -> having sum(salary) > 800000
    -> order by sum(salary) desc;
Empty set (0.00 sec)




6. Select employees first name, last name, job_id and salary whose first name starts with alphabet S


mysql> select first_name, last_name, job_id , salary
    -> from employee
    -> where first_name like "s%";
+------------+-----------+----------+--------+
| first_name | last_name | job_id   | salary |
+------------+-----------+----------+--------+
| Steven     | King      | AD_PRES  |  24000 |
| Shelli     | Baida     | PU_CLERK |   2900 |
| Sigal      | Tobias    | PU_CLERK |   2800 |
| Shanta     | Vollman   | ST_MAN   |   6500 |
| Steven     | Markle    | ST_CLERK |   2200 |
+------------+-----------+----------+--------+
5 rows in set (0.00 sec)



7. Write a query to select employee with the highest salary

mysql> select *
    -> from employee
    -> order by salary desc
    -> limit 0,1;
+-------------+------------+-----------+-------+--------------+------------+---------+--------+----------------+------------+---------------+
| employee_id | first_name | last_name | email | phone_number | hire_date  | job_id  | salary | commission_pct | manager_id | department_id |
+-------------+------------+-----------+-------+--------------+------------+---------+--------+----------------+------------+---------------+
|         100 | Steven     | King      | SKING | 515.123.4567 | 1987-06-17 | AD_PRES |  24000 |           NULL |       NULL |            20 |
+-------------+------------+-----------+-------+--------------+------------+---------+--------+----------------+------------+---------------+
1 row in set (0.02 sec)


8. Select employee with the second highest salary

mysql> select *
    -> from employee
    -> order by salary desc
    -> limit 1,1;
+-------------+------------+-----------+----------+--------------+------------+--------+--------+----------------+------------+---------------+
| employee_id | first_name | last_name | email    | phone_number | hire_date  | job_id | salary | commission_pct | manager_id | department_id |
+-------------+------------+-----------+----------+--------------+------------+--------+--------+----------------+------------+---------------+
|         101 | Neena      | Kochhar   | NKOCHHAR | 515.123.4568 | 1989-11-21 | AD_VP  |  17000 |           NULL |        100 |            20 |
+-------------+------------+-----------+----------+--------------+------------+--------+--------+----------------+------------+---------------+
1 row in set (0.00 sec)


9. Get the count of employees hired year wise

mysql>  select year(hire_date) , count(*)
    ->     from employee
    ->     group by year(hire_date)
    ->     order by year(hire_date)
    -> ;
+-----------------+----------+
| year(hire_date) | count(*) |
+-----------------+----------+
|            1987 |        1 |
|            1989 |        1 |
|            1990 |        1 |
|            1991 |        1 |
|            1993 |        1 |
|            1994 |        3 |
|            1995 |        2 |
|            1996 |        1 |
|            1997 |       10 |
|            1998 |        4 |
|            1999 |        5 |
|            2000 |        1 |
+-----------------+----------+
12 rows in set (0.00 sec)


10. Select the employees whose first_name contains “an”

ysql> select first_name
    -> from employee
    -> where first_name like "%an%";
+-------------+
| first_name  |
+-------------+
| Alexander   |
| Diana       |
| Nancy       |
| Daniel      |
| Jose Manuel |
| Alexander   |
| Shanta      |
+-------------+
7 rows in set (0.00 sec)


11. Find the employees who joined in August, 1994.

mysql> select *
    -> from employee
    -> where month(hire_date) = 8;;
+-------------+------------+-----------+----------+--------------+------------+------------+--------+----------------+------------+---------------+
| employee_id | first_name | last_name | email    | phone_number | hire_date  | job_id     | salary | commission_pct | manager_id | department_id |
+-------------+------------+-----------+----------+--------------+------------+------------+--------+----------------+------------+---------------+
|         108 | Nancy      | Greenberg | NGREENBE | 515.124.4569 | 1994-08-17 | FI_MGR     |  12000 |           NULL |        101 |           100 |
|         109 | Daniel     | Faviet    | DFAVIET  | 515.124.4169 | 1994-08-12 | FI_ACCOUNT |   9000 |           NULL |        108 |           170 |
|         121 | Adam       | Fripp     | AFRIPP   | 650.123.2234 | 1997-08-09 | ST_MAN     |   8200 |           NULL |        100 |            50 |
+-------------+------------+-----------+----------+--------------+------------+------------+--------+----------------+------------+---------------+
3 rows in set (0.00 sec)

12. Write a SQL query to display the 5 least earning employees

mysql> select *
    -> from employee
    -> order by salary asc
    -> limit 0,5;
+-------------+------------+-------------+----------+--------------+------------+----------+--------+----------------+------------+---------------+
| employee_id | first_name | last_name   | email    | phone_number | hire_date  | job_id   | salary | commission_pct | manager_id | department_id |
+-------------+------------+-------------+----------+--------------+------------+----------+--------+----------------+------------+---------------+
|         128 | Steven     | Markle      | SMARKLE  | 650.124.1434 | 2000-03-04 | ST_CLERK |   2200 |           NULL |        120 |            50 |
|         127 | James      | Landry      | JLANDRY  | 650.124.1334 | 1999-01-02 | ST_CLERK |   2400 |           NULL |        120 |            90 |
|         119 | Karen      | Colmenares  | KCOLMENA | 515.127.4566 | 1999-04-08 | PU_CLERK |   2500 |           NULL |        114 |           130 |
|         118 | Guy        | Himuro      | GHIMURO  | 515.127.4565 | 1998-01-02 | PU_CLERK |   2600 |           NULL |        114 |            60 |
|         126 | Irene      | Mikkilineni | IMIKKILI | 650.124.1224 | 1998-11-12 | ST_CLERK |   2700 |           NULL |        120 |            50 |
+-------------+------------+-------------+----------+--------------+------------+----------+--------+----------------+------------+---------------+
5 rows in set (0.00 sec)

13. Find the employees hired in the 80s

mysql> select *
    -> from employee
    -> where year(hire_date) between 1980 and 1989;
+-------------+------------+-----------+----------+--------------+------------+---------+--------+----------------+------------+---------------+
| employee_id | first_name | last_name | email    | phone_number | hire_date  | job_id  | salary | commission_pct | manager_id | department_id |
+-------------+------------+-----------+----------+--------------+------------+---------+--------+----------------+------------+---------------+
|         100 | Steven     | King      | SKING    | 515.123.4567 | 1987-06-17 | AD_PRES |  24000 |           NULL |       NULL |            20 |
|         101 | Neena      | Kochhar   | NKOCHHAR | 515.123.4568 | 1989-11-21 | AD_VP   |  17000 |           NULL |        100 |            20 |
+-------------+------------+-----------+----------+--------------+------------+---------+--------+----------------+------------+---------------+
2 rows in set (0.00 sec)



14. Find the employees who joined the company after 15th of the month


mysql> select *
    -> from employee
    -> where day(hire_date) > 15;
+-------------+------------+-----------+----------+--------------+------------+---------+--------+----------------+------------+---------------+
| employee_id | first_name | last_name | email    | phone_number | hire_date  | job_id  | salary | | manager_id | department_id |
+-------------+------------+-----------+----------+--------------+------------+---------+--------+----------------+------------+---------------+
|         100 | Steven     | King      | SKING    | 515.123.4567 | 1987-06-17 | AD_PRES |  24000 |           NULL |       NULL |            20 |
|         101 | Neena      | Kochhar   | NKOCHHAR | 515.123.4568 | 1989-11-21 | AD_VP   |  17000 |           NULL |        100 |            20 |
|         103 | Alexander  | Hunold    | AHUNOLD  | 590.423.4567 | 1990-09-30 | IT_PROG |   9000 |           NULL |        102 |            60 |
|         104 | Bruce      | Ernst     | BERNST   | 590.423.4568 | 1991-05-21 | IT_PROG |   6000 |           NULL |        103 |            60 |
|         105 | David      | Austin    | DAUSTIN  | 590.423.4569 | 1997-06-25 | IT_PROG |   4800 |           NULL |        103 |            60 |
|         108 | Nancy      | Greenberg | NGREENBE | 515.124.4569 | 1994-08-17 | FI_MGR  |  12000 |           NULL |        101 |           100 |
|         120 | Matthew    | Weiss     | MWEISS   | 650.123.1234 | 1996-07-18 | ST_MAN  |   8000 |           NULL |        100 |            50 |
+-------------+------------+-----------+----------+--------------+------------+---------+--------+----------------+------------+---------------+
7 rows in set (0.02 sec)


15. find the count of employees who not received the commission

mysql> select commission_pct
    -> from employee
    -> where commission_pct is null;
+----------+
| count(*) |
+----------+
|       31 |
+----------+
1 row in set (0.00 sec)



16. Calculate the total salary inclusive of commission for all the employees

mysql> select salary + commission_pct as total_salary
    -> from employee
    -> where commission_pct is null;
+--------------+
| total_salary |
+--------------+
|         NULL |
|         NULL |
|         NULL |
|         NULL |
|         NULL |
|         NULL |
|         NULL |
|         NULL |
|         NULL |
|         NULL |
|         NULL |
|         NULL |
|         NULL |
|         NULL |
|         NULL |
|         NULL |
|         NULL |
|         NULL |
|         NULL |
|         NULL |
|         NULL |
|         NULL |
|         NULL |
|         NULL |
|         NULL |
|         NULL |
|         NULL |
|         NULL |
|         NULL |
|         NULL |
|         NULL |
+--------------+
31 rows in set (0.00 sec)
