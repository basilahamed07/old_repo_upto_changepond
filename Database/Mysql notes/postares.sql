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
	
	
7) to writrive the data
	=> select *
		from customer;

8) to writrive the data with concate the two or adding the two colums
	=> select first_name || ' ' || last_name
		from customer;
		
9) to clear the screen
	=> \! cls;
	
	
10) to manuplate the adding or math pronles
	=> select 100*100
	=> select 100 - 1000
	=> select 2/2
	
11) to show the current date and time 

	=> select now();
	
12) TO GET THE RECORD IN ASE AND DESC

	=> SELECT EMAIL
		FROM CUSTOMER
		ORDER BY EMAIL ASE;

12)  TO CHECK THE LENGTH OF THE PIRTICULAR RECORED LENGTH

	=> SELECT EMAIL, LENGTH(EMAIL) AS LENGTH_OF_EMAIL FROM CUSTOMER ORDER BY  LENGTH_OF_EMAIL DESC LIMITE 1;
	
13) TO CREWATE THE TABLE INIT
	=> CREATE TABLE SORT_TEMP(NUM INT);
	=> INSERT INTO SORT_TEMP(NUM)VALUES(1),(2),(3),(4),(NULL),(6);
14) TO BRING THE SORTE VALUES IN LAST OF NULL
	=> SELECT * FROM SORT_TEMP ORDER BY NUM NULLS LAST;
	
	
==============================================================================	
15) where class

	=> operactors relactional operator
		=> Equal (=)
		=> grater then (>)
		=> less then (<)
		=> grater then and equal to(>=)
		=> less then equal to (<=)
		=> not equal to <>or !=
	
	=> logical operatr
		=> and
		=> or
		=> not
	=> member ship operator	
		=> on
		=> in
	=> specoal operator
		=> like
		=> between
		=>is null


==============================================================================








16) select last_name , first_name from customer where first_name = 'jamie' and last_name = 'Rice';


17) select last_name , first_name from customer where first_name = 'Adam' or last_name = 'Rodriguez';

18) select last_name , first_name from customer where first_name in ('Ann','Anne','Annie');

19) select last_name , first_name from customer where first_name like '%nn';
20) select last_name , first_name from customer where first_name like 'N%';
21) select last_name , first_name from customer where first_name like '_b%';

22) select first_name, last_name , length(first_name) as length_first_name from customer where length(first_name) between 3 and 5;
23) select first_name, last_name from customer where first_name like 'Bra%' and last_name != 'Motley';



24)select title, length, rental_rate from film where length > 180 and rental_rate < 1;

25)select title, length, rental_rate from film where rental_rate > 3 or rental_rate = 0.99;



26) select flim_id, title, release_year from flim order by ase limit 5;

27) dvdrental=# select film_id, title, release_year from film order by film_id limit 5;

28) dvdrental=# select film_id, title, release_year from film order by film_id limit 5 offset 3; it will ignore the first 3 rows

29) select film_id, title, release_year from film order by film_id limit 1 offset 3;

30) select film_id, title, release_year from film order by film_id  desc limit 1 offset 3;








task

31) select film_id, title, release_year, rating from film order by rating desc limit 5;

dvdrental=# select film_id, title, release_year, rating from film order by rating desc limit 5;
 film_id |      title       | release_year | rating
---------+------------------+--------------+--------
      10 | Aladdin Calendar |         2006 | NC-17
      14 | Alice Fantasia   |         2006 | NC-17
     133 | Chamber Italian  |         2006 | NC-17
       3 | Adaptation Holes |         2006 | NC-17
      15 | Alien Center     |         2006 | NC-17
(5 rows)


32)  select film_id, title, release_year, rating from film order by rating desc limit 5 offset 3;

dvdrental=# select film_id, title, release_year, rating from film order by rating desc limit 5 offset 3;
 film_id |       title        | release_year | rating
---------+--------------------+--------------+--------
      15 | Alien Center       |         2006 | NC-17
      14 | Alice Fantasia     |         2006 | NC-17
       3 | Adaptation Holes   |         2006 | NC-17
     133 | Chamber Italian    |         2006 | NC-17
      29 | Antitrust Tomatoes |         2006 | NC-17
(5 rows)

(5 rows)

33) select film_id, title, release_year, rating from film order by rating desc limit 1 offset 3;


select film_id, title, release_year, rating from film order by rating desc limit 1 offset 3;
 film_id |     title      | release_year | rating
---------+----------------+--------------+--------
      14 | Alice Fantasia |         2006 | NC-17
(1 row)





34) Featch alternative for lin=mite



select film_id, title, release_year
from film
order by film_id
offset 5 rows
fetch first 5 row only;

35)
select payment_id , amount, payment_date
from payment
where payment_date :: date in ('2007-02-15', '2007-02-16');

36)
select payment_id , amount, payment_date
from payment
where payment_date :: date not in ('2007-02-15', '2007-02-16');


37)

select payment_id , amount, payment_date
from payment
where payment_date between '2007-02-15' and '2007-02-16';


38)select first_name , last_name from customer where first_name like 'Dar%'; or 
select first_name , last_name from customer where first_name not ~~* 'dar%';

39)  select first_name , last_name from customer where first_name  !~~* 'dar%';





==========================

create table t(message text)

insert into t(message)values ('the rents are now 10% higher then ;ast month'),('the new filas will have in the _ title');


select address, address2 from address where address2 is not null;	
	


address
select address , district from address where address = '47 MySakila Drive' and district = 'Alberta';

dvdrental=# select address , district from address where address = '47 MySakila Drive' and district = 'Alberta';
      address      | district
-------------------+----------
 47 MySakila Drive | Alberta
(1 row)



2) select address , district from address where address = '808 Bhopal Manor' or  district = 'Esprito Santo';

dvdrental=# select address , district from address where address = '808 Bhopal Manor' or  district = 'Esprito Santo';
        address        |   district
-----------------------+---------------
 808 Bhopal Manor      | Haryana
 306 Antofagasta Place | Esprito Santo
(2 rows)

3)select address , district from address where district in('Esprito Santo','Central Serbia','Cear');


dvdrental=# select address , district from address where district in('Esprito Santo','Central Serbia','Cear');
              address               |    district
------------------------------------+----------------
 900 Santiago de Compostela Parkway | Central Serbia
 306 Antofagasta Place              | Esprito Santo
 686 Garland Manor                  | Cear
(3 rows)

4) select address , district from address where district like '%b'


dvdrental=#  select address , district from address where district like '%b';
        address         | district
------------------------+----------
 1697 Tanauan Lane      | Punjab
 1820 Maring Parkway    | Punjab
 816 Cayenne Parkway    | Manab
 951 Stara Zagora Manor | Punjab
 734 Bchar Place        | Punjab
 791 Salinas Street     | Punjab
(6 rows)



5) select address , district from address where district like 'A%'


dvdrental=# select address , district from address where district like 'A%';
           address           |    district
-----------------------------+----------------
 47 MySakila Drive           | Alberta
 23 Workhaven Lane           | Alberta
 692 Joliet Street           | Attika
 1718 Valencia Street        | Antofagasta
 669 Firozabad Loop          | Abu Dhabi
 733 Mandaluyong Place       | Asir
 1963 Moscow Place           | Assam
 842 Salzburg Lane           | Adana
 387 Mwene-Ditu Drive        | Ahal
 1679 Antofagasta Street     | Alto Paran
 751 Lima Loop               | Aden
 201 Effon-Alaiye Way        | Asuncin
 1966 Tonghae Street         | Anhalt Sachsen
 663 Baha Blanca Parkway     | Adana
 1157 Nyeri Loop             | Adygea
 1009 Zanzibar Lane          | Arecibo
 230 Urawa Drive             | Andhra Pradesh
 614 Pak Kret Street         | Addis Abeba
 331 Bydgoszcz Parkway       | Asturia
 535 Ahmadnagar Manor        | Abu Dhabi
 1078 Stara Zagora Drive     | Aceh
 1 Valle de Santiago Avenue  | Apulia
 758 Korolev Parkway         | Andhra Pradesh
 635 Brest Manor             | Andhra Pradesh
 502 Mandi Bahauddin Parkway | Anzotegui
(25 rows)



6) select address , district from address where district like '_l%' 

dvdrental=# select address , district from address where district like '_l%' ;
             address              |   district
----------------------------------+--------------
 47 MySakila Drive                | Alberta
 23 Workhaven Lane                | Alberta
 1987 Coacalco de Berriozbal Loop | al-Qalyubiya
 1050 Garden Grove Avenue         | Slaskie
 765 Southampton Drive            | al-Qalyubiya
 1679 Antofagasta Street          | Alto Paran
 1309 Weifang Street              | Florida
 1980 Kamjanets-Podilskyi Street  | Illinois
 587 Benguela Manor               | Illinois
 1642 Charlotte Amalie Drive      | Slaskie
 1152 Citrus Heights Manor        | al-Qadarif
 289 Santo Andr Manor             | al-Sharqiya
 1485 Bratislava Place            | Illinois
 775 ostka Drive                  | al-Daqahliya
 786 Matsue Way                   | Illinois
 1427 Tabuk Place                 | Florida
 1741 Hoshiarpur Boulevard        | al-Sharqiya
 1405 Hagonoy Avenue              | Slaskie
 1759 Niznekamsk Avenue           | al-Manama
(19 rows)


7) select address , district, length(district) as length_distroct from address where length(district) between 5 and 12;


dvdrental=# select address , district, length(district) as length_distroct from address where length(district) between 5 and 12;
                address                 |   district   | length_distroct
----------------------------------------+--------------+-----------------
 47 MySakila Drive                      | Alberta      |               7
 23 Workhaven Lane                      | Alberta      |               7
 1913 Hanoi Way                         | Nagasaki     |               8
 1121 Loja Avenue                       | California   |              10
 692 Joliet Street                      | Attika       |               6
 1566 Inegl Manor                       | Mandalay     |               8
 53 Idfu Parkway                        | Nantou       |               6
 1795 Santiago de Compostela Way        | Texas        |               5
 478 Joliet Way                         | Hamilton     |               8
 613 Korolev Drive                      | Masqat       |               6
 1531 Sal Drive                         | Esfahan      |               7
 1542 Tarlac Parkway                    | Kanagawa     |               8
 808 Bhopal Manor                       | Haryana      |               7
 270 Amroha Parkway                     | Osmaniye     |               8
 770 Bydgoszcz Avenue                   | California   |              10
 360 Toulouse Parkway                   | England      |               7
 270 Toulon Boulevard                   | Kalmykia     |               8
 320 Brest Avenue                       | Kaduna       |               6
 262 A Corua (La Corua) Parkway         | Dhaka        |               5
 1780 Hino Boulevard                    | Liepaja      |               7
 96 Tafuna Way                          | Crdoba       |               6
 1425 Shikarpur Manor                   | Bihar        |               5
 786 Aurora Avenue                      | Yamaguchi    |               9
 1668 Anpolis Street                    | Taipei       |               6
 33 Gorontalo Way                       | West Bengali |              12
 127 Purnea (Purnia) Manor              | Piemonte     |               8
 61 Tama Street                         | Okayama      |               7
 
 
 
 
 8)select address , district as length_distroct from address where district like 'A%' and address != '23 Workhaven Lane';
 
 
 dvdrental=# select address , district as length_distroct from address where district like 'A%' and address != '23 Workhaven Lane';
           address           | length_distroct
-----------------------------+-----------------
 47 MySakila Drive           | Alberta
 692 Joliet Street           | Attika
 1718 Valencia Street        | Antofagasta
 669 Firozabad Loop          | Abu Dhabi
 733 Mandaluyong Place       | Asir
 1963 Moscow Place           | Assam
 842 Salzburg Lane           | Adana
 387 Mwene-Ditu Drive        | Ahal
 1679 Antofagasta Street     | Alto Paran
 751 Lima Loop               | Aden
 201 Effon-Alaiye Way        | Asuncin
 1966 Tonghae Street         | Anhalt Sachsen
 663 Baha Blanca Parkway     | Adana
 1157 Nyeri Loop             | Adygea
 1009 Zanzibar Lane          | Arecibo
 230 Urawa Drive             | Andhra Pradesh
 614 Pak Kret Street         | Addis Abeba
 331 Bydgoszcz Parkway       | Asturia
 535 Ahmadnagar Manor        | Abu Dhabi
 1078 Stara Zagora Drive     | Aceh
 1 Valle de Santiago Avenue  | Apulia
 758 Korolev Parkway         | Andhra Pradesh
 635 Brest Manor             | Andhra Pradesh
 502 Mandi Bahauddin Parkway | Anzotegui
(24 rows)





group y clause



1) select customer_id  from payment group by customer_id order by customer_id;
2) select customer_id, sum(amount)  from payment group by customer_id order by sum(amount) desc;


3) select staff_id, count(payment_id) from payment group by staff_id;

3) select customer_id , sum(amount) from payment group by customer_id having sum(amount)> 200 order by sum(amount) desc;


4) select rating, special_Features, count(release_year)
from film
group by cube(rating,special_Features);

dvdrental-# group by cube(rating,special_Features);
 rating |                       special_features                       | count
--------+--------------------------------------------------------------+-------
        |                                                              |  1000
 R      | {Commentaries}                                               |    14
 PG-13  | {"Deleted Scenes","Behind the Scenes"}                       |    14
 NC-17  | {"Behind the Scenes"}                                        |    10
 G      | {Trailers}                                                   |    16
 NC-17  | {Trailers,"Deleted Scenes","Behind the Scenes"}              |     7
 PG     | {Trailers,"Behind the Scenes"}                               |    10
 NC-17  | {Commentaries,"Behind the Scenes"}                           |    17
 NC-17  | {"Deleted Scenes"}                                           |    12
 R      | {Trailers,Commentaries}                                      |    16
 PG     | {Commentaries,"Deleted Scenes","Behind the Scenes"}          |    13
 PG-13  | {Trailers,Commentaries,"Deleted Scenes","Behind the Scenes"} |    13
 R      | {Trailers,Commentaries,"Behind the Scenes"}                  |    11
 PG-13  | {Trailers,Commentaries,"Behind the Scenes"}                  |    17
 PG     | {Trailers,Commentaries,"Behind the Scenes"}                  |    13
 R      | {"Deleted Scenes"}                                           |    12
 NC-17  | {Trailers,"Deleted Scenes"}                                  |    16
 G      | {Trailers,"Behind the Scenes"}                               |     9
 G      | {Commentaries,"Deleted Scenes","Behind the Scenes"}          |     7
 NC-17  | {Commentaries}                                               |    12
 R      | {Trailers,"Deleted Scenes"}                                  |    11
 PG-13  | {Commentaries,"Deleted Scenes","Behind the Scenes"}          |    15
 R      | {Commentaries,"Behind the Scenes"}                           |     7
 PG-13  | {Trailers,"Deleted Scenes","Behind the Scenes"}              |     8
 NC-17  | {Trailers,Commentaries,"Behind the Scenes"}                  |    24
 G      | {"Deleted Scenes"}                                           |    14
 R      | {Commentaries,"Deleted Scenes"}                              |    12
-- More  --

or

select rating, special_Features, count(release_year)
from film
group by rollup(rating,special_Features)
order by rating desc;




dvdrental-# order by rating desc;
 rating |                       special_features                       | count
--------+--------------------------------------------------------------+-------
        |                                                              |  1000
 NC-17  | {Trailers,Commentaries,"Deleted Scenes","Behind the Scenes"} |    12
 NC-17  | {Commentaries}                                               |    12
 NC-17  | {Trailers,Commentaries,"Behind the Scenes"}                  |    24
 NC-17  | {Trailers,"Deleted Scenes","Behind the Scenes"}              |     7
 NC-17  | {Trailers,Commentaries}                                      |    12
 NC-17  | {Commentaries,"Behind the Scenes"}                           |    17
 NC-17  | {"Deleted Scenes"}                                           |    12
 NC-17  |                                                              |   210
 NC-17  | {"Deleted Scenes","Behind the Scenes"}                       |    16
 NC-17  | {Trailers,Commentaries,"Deleted Scenes"}                     |    11
 NC-17  | {"Behind the Scenes"}                                        |    10
 NC-17  | {Trailers,"Behind the Scenes"}                               |    14
 NC-17  | {Commentaries,"Deleted Scenes","Behind the Scenes"}          |    19
 NC-17  | {Trailers}                                                   |    12
 NC-17  | {Commentaries,"Deleted Scenes"}                              |    16
 NC-17  | {Trailers,"Deleted Scenes"}                                  |    16
 R      | {Trailers,"Deleted Scenes"}                                  |    11
 R      | {Commentaries}                                               |    14
 R      | {Trailers,Commentaries}                                      |    16
 R      | {Trailers,Commentaries,"Behind the Scenes"}                  |    11
 R      | {"Deleted Scenes"}                                           |    12
 R      | {Commentaries,"Behind the Scenes"}                           |     7
 R      | {Commentaries,"Deleted Scenes"}                              |    12
 R      | {"Behind the Scenes"}                                        |    16
 R      | {"Deleted Scenes","Behind the Scenes"}                       |    17
 R      | {Trailers,Commentaries,"Deleted Scenes","Behind the Scenes"} |    11