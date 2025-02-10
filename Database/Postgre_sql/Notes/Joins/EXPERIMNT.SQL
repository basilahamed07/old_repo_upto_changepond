task concept

1)string
2)math
3)date

4) merge
5)upsert


1) String function below
===============================ASCCI FUNTION=====================================
	1) ascci function;
		->select ASCII('A');
			 ascii
-------
    65
(1 row)
		->select ASCII('d');
		 ascii
-------
   100
(1 row)
		->select ASCII('g');
		 ascii
-------
   103
(1 row)
		->select ASCII('4');
		 ascii
-------
    52
(1 row)

		->select ASCII('w');
		
dvdrental=# select ASCII('w');
 ascii
-------
   119
(1 row)

===============================CHR FUNTION=====================================

2) Chr Function
	->select chr(34);
	
dvdrental=# select chr(34);
 chr
-----
 "
(1 row)"

===============================CONCAT FUNTION=====================================

3) concat function

	-> select concat('a','b','c','d','e');	\
	dvdrental=# select concat('a','b','c','d','e');
 concat
--------
 abcde
(1 row)

===============================intercap FUNTION=====================================

select INITCAP('hI tHERE');

 initcap
----------
 Hi There
(1 row)
===============================intercap FUNTION=====================================


select LEFT('basil',2);

dvdrental=# select LEFT('basil',2);
 left
------
 ba
(1 row)
===============================length FUNTION=====================================

select 	LENGTH('basil ahamed');

dvdrental=# select LENGTH('basil ahamed');
 length
--------
     12
(1 row)
===============================LOWER FUNTION=====================================

select lower('BASIL AhaMED');

dvdrental=# select lower('BASIL AhaMED');
    lower
--------------
 basil ahamed
(1 row)

===============================LPAD FUNTION=====================================

dvdrental=# select LPAD('333',6,'321');
  lpad
--------
 321333
(1 row)


===============================LTRIM FUNTION=====================================

select LTRIM('003245600');
select LTRIM('00123');
dvdrental=# select LTRIM('00123');
 ltrim
-------
 00123
(1 row)


===============================position FUNTION=====================================
select POSITION('B' in 'basil ahamed B');

dvdrental=# select POSITION('B' in 'basil ahamed B');
 position
----------
       14
(1 row)

===============================REPEAT FUNTION=====================================

select REPEAT('basil ', 5);



dvdrental=# select REPEAT('basil ', 5);
             repeat
--------------------------------
 basil basil basil basil basil
(1 row)


===============================Replace FUNTION=====================================

select replace('basil ahamed','b','he');

dvdrental=# select replace('basil ahamed','b','he');
    replace
---------------
 heasil ahamed
(1 row)

===============================REVERSE FUNTION=====================================
select reverse('basil ahamed is good boy');


dvdrental=# select reverse('basil ahamed is good boy');
         reverse
--------------------------
 yob doog si demaha lisab
(1 row)


===============================trim FUNTION=====================================
select TRIM('     basil     ahamed      ');

dvdrental=# select TRIM('     basil     ahamed      ');
      btrim
------------------
 basil     ahamed
 
 
 ===============================Upper FUNTION=====================================
 select UPPER('basil ahamed Basil AHAMED');
 
 dvdrental=#  select UPPER('basil ahamed Basil AHAMED');
           upper
---------------------------
 BASIL AHAMED BASIL AHAMED
(1 row)
	




 ===============================MATCH FUNTION=====================================

===============================absolute value  FUNTION=====================================

	select abs(-23450);
	
	
dvdrental=# select abs(-23450);
  abs
-------
 23450
(1 row)

===============================cube root  FUNTION=====================================


select CBRT(20); 

dvdrental=# select CBRT(20);
        cbrt
--------------------
 2.7144176165949068
(1 row)


===============================CEIL FUNTION=====================================

select ceil(-545.323);

 ceil
------
 -545
(1 row)


===============================DEGREES FUNTION=====================================

select DEGREES(10);

dvdrental=#
dvdrental=# select DEGREES(10);
      degrees
-------------------
 572.9577951308232
 
 
 or
 
 select DEGREES(pi());
 
 dvdrental=# select DEGREES(pi());
 degrees
---------
     180
(1 row)


===============================DIV FUNTION=====================================
select div(34,5);

dvdrental=# select div(34,5);
 div
-----
   6
(1 row)




===============================exp FUNTION=====================================

select exp(6);
 
 
 dvdrental=# select exp(6);
        exp
-------------------
 403.4287934927351
(1 row)


===============================FACTORIAL FUNTION=====================================

SELECT FACTORIAL(30);

dvdrental=# SELECT FACTORIAL(30);
             factorial
-----------------------------------
 265252859812191058636308480000000
(1 row)

===============================fLOOR FUNTION=====================================



SELECT FLOOR(10.54);

dvdrental=# SELECT FLOOR(10.54);
 floor
-------
    10
(1 row)

===============================gcd FUNTION=====================================


SELECT GCD(5,133);

dvdrental=# SELECT GCD(5,133);
 gcd
-----
   1
(1 row)

===============================lcm FUNTION=====================================


SELECT lcm(5,133);



dvdrental=# SELECT lcm(5,133);
 lcm
-----
 665
(1 row)


===============================LOG FUNTION=====================================


SELECT LOG(22345);

dvdrental=# SELECT LOG(22345);
        log
-------------------
 4.349180358996378
(1 row)



===============================mod FUNTION=====================================

SELECT MOD(4335654,4);

dvdrental=# SELECT MOD(4335654,4);
 mod
-----
   2
(1 row)


===============================PI() FUNTION=====================================


SELECT PI();

dvdrental=# SELECT PI();
        pi
-------------------
 3.141592653589793
(1 row)




===============================PI() FUNTION=====================================

SELECT RANDOM();

dvdrental=# SELECT RANDOM();
       random
--------------------
 0.4880177296272665
(1 row)



===============================sCALE FUNTION=====================================

SELECT SCALE(4.4355254);

dvdrental=# SELECT SCALE(4.4355254);
 scale
-------
     7
(1 row)



==============================date function==========================

==============================CURRENT_DATE function==========================


SELECT CURRENT_DATE;

dvdrental=# SELECT CURRENT_DATE;
 current_date
--------------
 2024-07-17
(1 row)

==============================CURRENT_TIME function==========================


SELECT CURRENT_TIME;

dvdrental=# SELECT CURRENT_TIME;
     current_time
-----------------------
 17:38:55.834014+05:30
(1 row)
==============================CURRENT_TIMESTAMP function==========================

SELECT CURRENT_TIMESTAMP;


dvdrental=# SELECT CURRENT_TIMESTAMP;
        current_timestamp
----------------------------------
 2024-07-17 17:39:06.247503+05:30
(1 row)

==============================CLOCK_TIMESTAMP function==========================


SELECT STATEMENT_TIMESTAMP();

       statement_timestamp
----------------------------------
 2024-07-17 17:39:48.383549+05:30
(1 row)

==============================NOW function==========================


SELECT NOW();


dvdrental=# SELECT NOW();
               now
----------------------------------
 2024-07-17 17:40:01.159026+05:30
(1 row)


==============================LOCALTIME function==========================


SELECT LOCALTIME;


dvdrental=# SELECT LOCALTIME;
    localtime
-----------------
 17:40:10.150992
(1 row)

==================Extracting date and time components=============


SELECT date_part('year',TIMESTAMP '2017-01-01');


dvdrental=# SELECT date_part('year',TIMESTAMP '2017-01-01');
 date_part
-----------
      2017
(1 row)




SELECT date_part('DAYS',TIMESTAMP '2017-01-01');

dvdrental=# SELECT date_part('DAYS',TIMESTAMP '2017-01-01');
 date_part
-----------
         1
(1 row)


==================Converting to date and time=============



dvdrental=# SELECT TO_TIMESTAMP(
dvdrental(#     '2017-03-31 9:30:20',
dvdrental(#     'YYYY-MM-DD HH:MI:SS'
dvdrental(# );
       to_timestamp
---------------------------
 2017-03-31 09:30:20+05:30
(1 row)


================UTC CINVERT=========================


dvdrental=# SELECT TIMESTAMP '2024-03-21 10:00:00' AT TIME ZONE 'UTC';
         timezone
---------------------------
 2024-03-21 15:30:00+05:30
(1 row)




================================MERGE===================================


CREATE TABLE leads(
    lead_id serial PRIMARY key,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    active bool NOT NULL DEFAULT TRUE
);

CREATE TABLE customers(
    customer_id serial PRIMARY key,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    active bool NOT NULL DEFAULT TRUE
);


INSERT INTO leads(name, email)
VALUES
   ('John Doe', 'john.doe@gmail.com'),
   ('Jane Doe', 'jane.doe@yahoo.com')
RETURNING *;




