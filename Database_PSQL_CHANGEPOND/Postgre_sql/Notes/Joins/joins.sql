Joins



select cus.customer_id,
cus.first_name,
cus.last_name,
p.amount,
p.payment_date
from customer cus
inner join payment p on p.customer_id = cus.customer_id
order by p.payment_date;

resulr = 
	dvdrental-# order by p.payment_date;
 customer_id | first_name  |  last_name   | amount |        payment_date
-------------+-------------+--------------+--------+----------------------------
         416 | Jeffery     | Pinson       |   2.99 | 2007-02-14 21:21:59.996577
         516 | Elmer       | Noe          |   4.99 | 2007-02-14 21:23:39.996577
         239 | Minnie      | Romero       |   4.99 | 2007-02-14 21:29:00.996577
         592 | Terrance    | Roush        |   6.99 | 2007-02-14 21:41:12.996577
          49 | Joyce       | Edwards      |   0.99 | 2007-02-14 21:44:52.996577
         264 | Gwendolyn   | May          |   3.99 | 2007-02-14 21:44:53.996577
          46 | Catherine   | Campbell     |   4.99 | 2007-02-14 21:45:29.996577
         481 | Herman      | Devore       |   2.99 | 2007-02-14 22:03:35.996577
         139 | Amber       | Dixon        |   2.99 | 2007-02-14 22:11:22.996577
         595 | Terrence    | Gunderson    |   2.99 | 2007-02-14 22:16:01.996577
         191 | Jeanette    | Greene       |   2.99 | 2007-02-14 22:23:12.996577
          95 | Paula       | Bryant       |   2.99 | 2007-02-14 22:41:17.996577
         197 | Sue         | Peters       |   2.99 | 2007-02-14 22:43:41.996577
         512 | Cecil       | Vines        |   6.99 | 2007-02-14 22:57:03.996577
         210 | Ella        | Oliver       |   2.99 | 2007-02-14 23:01:30.996577
         119 | Sherry      | Marshall     |   7.99 | 2007-02-14 23:05:16.996577
         432 | Edwin       | Burk         |   5.99 | 2007-02-14 23:07:27.996577
         546 | Kelly       | Knott        |   1.99 | 2007-02-14 23:10:43.996577
         196 | Alma        | Austin       |   5.99 | 2007-02-14 23:13:47.996577
           1 | Mary        | Smith        |   5.99 | 2007-02-14 23:22:38.996577
         368 | Harry       | Arce         |   0.99 | 2007-02-14 23:25:11.996577
         173 | Audrey      | Ray          |   2.99 | 2007-02-14 23:32:33.996577
         244 | Viola       | Hanson       |   6.99 | 2007-02-14 23:32:48.996577
         370 | Wayne       | Truong       |   6.99 | 2007-02-14 23:33:58.996577
         186 | Holly       | Fox          |   4.99 | 2007-02-14 23:47:05.996577
         561 | Ian         | Still        |   2.99 | 2007-02-14 23:52:46.996577
         402 | Luis        | Yanez        |   4.99 | 2007-02-14 23:53:34.996577
          84 | Sara        | Perry        |   0.99 | 2007-02-15 00:06:04.996577
          52 | Julie       | Sanchez      |   4.99 | 2007-02-15 00:06:57.996577
         349 | Joe         | Gilliland    |   2.99 | 2007-02-15 00:11:12.996577
         491 | Rick        | Mattox       |   2.99 | 2007-02-15 00:17:24.996577
         238 | Nellie      | Garrett      |   2.99 | 2007-02-15 00:27:16.996577
         516 | Elmer       | Noe          |   1.99 | 2007-02-15 00:28:17.996577
         209 | Tonya       | Chapman      |   4.99 | 2007-02-15 00:34:54.996577
         451 | Jim         | Rea          |   0.99 | 2007-02-15 00:36:30.996577
         452 | Tom         | Milner       |   4.99 | 2007-02-15 00:37:28.996577
         249 | Dora        | Medina       |   0.99 | 2007-02-15 00:50:12.996577
         264 | Gwendolyn   | May          |   4.99 | 2007-02-15 00:55:33.996577
         430 | Ray         | Houle        |   0.99 | 2007-02-15 00:55:34.996577
         376 | Randy       | Gaither      |   0.99 | 2007-02-15 00:58:29.996577
         146 | Jamie       | Rice         |   7.99 | 2007-02-15 00:59:38.996577
         345 | Carl        | Artis        |   0.99 | 2007-02-15 01:26:17.996577
		 
		 
or 

select cus.customer_id,
cus.first_name,
cus.last_name,
p.amount,
p.payment_date
from customer cus
inner join payment p using(customer_id)
order by p.payment_date;



dvdrental-# order by p.payment_date;
 customer_id | first_name  |  last_name   | amount |        payment_date
-------------+-------------+--------------+--------+----------------------------
         416 | Jeffery     | Pinson       |   2.99 | 2007-02-14 21:21:59.996577
         516 | Elmer       | Noe          |   4.99 | 2007-02-14 21:23:39.996577
         239 | Minnie      | Romero       |   4.99 | 2007-02-14 21:29:00.996577
         592 | Terrance    | Roush        |   6.99 | 2007-02-14 21:41:12.996577
          49 | Joyce       | Edwards      |   0.99 | 2007-02-14 21:44:52.996577
         264 | Gwendolyn   | May          |   3.99 | 2007-02-14 21:44:53.996577
          46 | Catherine   | Campbell     |   4.99 | 2007-02-14 21:45:29.996577
         481 | Herman      | Devore       |   2.99 | 2007-02-14 22:03:35.996577
         139 | Amber       | Dixon        |   2.99 | 2007-02-14 22:11:22.996577
         595 | Terrence    | Gunderson    |   2.99 | 2007-02-14 22:16:01.996577
         191 | Jeanette    | Greene       |   2.99 | 2007-02-14 22:23:12.996577
          95 | Paula       | Bryant       |   2.99 | 2007-02-14 22:41:17.996577
         197 | Sue         | Peters       |   2.99 | 2007-02-14 22:43:41.996577
         512 | Cecil       | Vines        |   6.99 | 2007-02-14 22:57:03.996577
         210 | Ella        | Oliver       |   2.99 | 2007-02-14 23:01:30.996577
         119 | Sherry      | Marshall     |   7.99 | 2007-02-14 23:05:16.996577
         432 | Edwin       | Burk         |   5.99 | 2007-02-14 23:07:27.996577
         546 | Kelly       | Knott        |   1.99 | 2007-02-14 23:10:43.996577
         196 | Alma        | Austin       |   5.99 | 2007-02-14 23:13:47.996577
           1 | Mary        | Smith        |   5.99 | 2007-02-14 23:22:38.996577
         368 | Harry       | Arce         |   0.99 | 2007-02-14 23:25:11.996577
         173 | Audrey      | Ray          |   2.99 | 2007-02-14 23:32:33.996577
         244 | Viola       | Hanson       |   6.99 | 2007-02-14 23:32:48.996577
         370 | Wayne       | Truong       |   6.99 | 2007-02-14 23:33:58.996577
         186 | Holly       | Fox          |   4.99 | 2007-02-14 23:47:05.996577
         561 | Ian         | Still        |   2.99 | 2007-02-14 23:52:46.996577
         402 | Luis        | Yanez        |   4.99 | 2007-02-14 23:53:34.996577
          84 | Sara        | Perry        |   0.99 | 2007-02-15 00:06:04.996577
          52 | Julie       | Sanchez      |   4.99 | 2007-02-15 00:06:57.996577
         349 | Joe         | Gilliland    |   2.99 | 2007-02-15 00:11:12.996577
         491 | Rick        | Mattox       |   2.99 | 2007-02-15 00:17:24.996577
         238 | Nellie      | Garrett      |   2.99 | 2007-02-15 00:27:16.996577
         516 | Elmer       | Noe          |   1.99 | 2007-02-15 00:28:17.996577
         209 | Tonya       | Chapman      |   4.99 | 2007-02-15 00:34:54.996577
         451 | Jim         | Rea          |   0.99 | 2007-02-15 00:36:30.996577
         452 | Tom         | Milner       |   4.99 | 2007-02-15 00:37:28.996577
         249 | Dora        | Medina       |   0.99 | 2007-02-15 00:50:12.996577
         264 | Gwendolyn   | May          |   4.99 | 2007-02-15 00:55:33.996577
         430 | Ray         | Houle        |   0.99 | 2007-02-15 00:55:34.996577
         376 | Randy       | Gaither      |   0.99 | 2007-02-15 00:58:29.996577
         146 | Jamie       | Rice         |   7.99 | 2007-02-15 00:59:38.996577
		 
		 
		 
select cus.customer_id,
cus.first_name || '  ' || cus.last_name as Full_name_customer,
s.first_name || '  ' || s.last_name as Full_name_staff,
p.amount,
p.payment_date
from customer cus
inner join payment p using(customer_id)
inner join staff s using (staff_id)
order by p.payment_date;


result 


 customer_id |   full_name_customer   | full_name_staff | amount |        payment_date
-------------+------------------------+-----------------+--------+----------------------------
         416 | Jeffery  Pinson        | Jon  Stephens   |   2.99 | 2007-02-14 21:21:59.996577
         516 | Elmer  Noe             | Jon  Stephens   |   4.99 | 2007-02-14 21:23:39.996577
         239 | Minnie  Romero         | Mike  Hillyer   |   4.99 | 2007-02-14 21:29:00.996577
         592 | Terrance  Roush        | Jon  Stephens   |   6.99 | 2007-02-14 21:41:12.996577
          49 | Joyce  Edwards         | Mike  Hillyer   |   0.99 | 2007-02-14 21:44:52.996577
         264 | Gwendolyn  May         | Jon  Stephens   |   3.99 | 2007-02-14 21:44:53.996577
          46 | Catherine  Campbell    | Mike  Hillyer   |   4.99 | 2007-02-14 21:45:29.996577
         481 | Herman  Devore         | Jon  Stephens   |   2.99 | 2007-02-14 22:03:35.996577
         139 | Amber  Dixon           | Jon  Stephens   |   2.99 | 2007-02-14 22:11:22.996577
         595 | Terrence  Gunderson    | Jon  Stephens   |   2.99 | 2007-02-14 22:16:01.996577
         191 | Jeanette  Greene       | Jon  Stephens   |   2.99 | 2007-02-14 22:23:12.996577
          95 | Paula  Bryant          | Jon  Stephens   |   2.99 | 2007-02-14 22:41:17.996577
         197 | Sue  Peters            | Jon  Stephens   |   2.99 | 2007-02-14 22:43:41.996577
         512 | Cecil  Vines           | Mike  Hillyer   |   6.99 | 2007-02-14 22:57:03.996577
         210 | Ella  Oliver           | Jon  Stephens   |   2.99 | 2007-02-14 23:01:30.996577
         119 | Sherry  Marshall       | Mike  Hillyer   |   7.99 | 2007-02-14 23:05:16.996577
         432 | Edwin  Burk            | Jon  Stephens   |   5.99 | 2007-02-14 23:07:27.996577
         546 | Kelly  Knott           | Mike  Hillyer   |   1.99 | 2007-02-14 23:10:43.996577
         196 | Alma  Austin           | Mike  Hillyer   |   5.99 | 2007-02-14 23:13:47.996577
           1 | Mary  Smith            | Mike  Hillyer   |   5.99 | 2007-02-14 23:22:38.996577
         368 | Harry  Arce            | Mike  Hillyer   |   0.99 | 2007-02-14 23:25:11.996577
         173 | Audrey  Ray            | Jon  Stephens   |   2.99 | 2007-02-14 23:32:33.996577
         244 | Viola  Hanson          | Jon  Stephens   |   6.99 | 2007-02-14 23:32:48.996577
         370 | Wayne  Truong          | Jon  Stephens   |   6.99 | 2007-02-14 23:33:58.996577
         186 | Holly  Fox             | Mike  Hillyer   |   4.99 | 2007-02-14 23:47:05.996577
         561 | Ian  Still             | Jon  Stephens   |   2.99 | 2007-02-14 23:52:46.996577
         402 | Luis  Yanez            | Jon  Stephens   |   4.99 | 2007-02-14 23:53:34.996577
          84 | Sara  Perry            | Jon  Stephens   |   0.99 | 2007-02-15 00:06:04.996577
          52 | Julie  Sanchez         | Mike  Hillyer   |   4.99 | 2007-02-15 00:06:57.996577
         349 | Joe  Gilliland         | Mike  Hillyer   |   2.99 | 2007-02-15 00:11:12.996577
         491 | Rick  Mattox           | Jon  Stephens   |   2.99 | 2007-02-15 00:17:24.996577
         238 | Nellie  Garrett        | Mike  Hillyer   |   2.99 | 2007-02-15 00:27:16.996577
         516 | Elmer  Noe             | Mike  Hillyer   |   1.99 | 2007-02-15 00:28:17.996577
         209 | Tonya  Chapman         | Jon  Stephens   |   4.99 | 2007-02-15 00:34:54.996577
         451 | Jim  Rea               | Mike  Hillyer   |   0.99 | 2007-02-15 00:36:30.996577
         452 | Tom  Milner            | Jon  Stephens   |   4.99 | 2007-02-15 00:37:28.996577
         249 | Dora  Medina           | Mike  Hillyer   |   0.99 | 2007-02-15 00:50:12.996577
         264 | Gwendolyn  May         | Mike  Hillyer   |   4.99 | 2007-02-15 00:55:33.996577
         430 | Ray  Houle             | Jon  Stephens   |   0.99 | 2007-02-15 00:55:34.996577
         376 | Randy  Gaither         | Jon  Stephens   |   0.99 | 2007-02-15 00:58:29.996577
         146 | Jamie  Rice            | Jon  Stephens   |   7.99 | 2007-02-15 00:59:38.996577
		 
		 
=======================================================Left outer join========================================================
select f.film_id , f.title, i.inventory_id
from film f left join inventory i using(film_id);

result :

dvdrental-# from film f left join inventory i using(film_id);
 film_id |            title            | inventory_id
---------+-----------------------------+--------------
       1 | Academy Dinosaur            |            1
       1 | Academy Dinosaur            |            2
       1 | Academy Dinosaur            |            3
       1 | Academy Dinosaur            |            4
       1 | Academy Dinosaur            |            5
       1 | Academy Dinosaur            |            6
       1 | Academy Dinosaur            |            7
       1 | Academy Dinosaur            |            8
       2 | Ace Goldfinger              |            9
       2 | Ace Goldfinger              |           10
       2 | Ace Goldfinger              |           11
       3 | Adaptation Holes            |           12
       3 | Adaptation Holes            |           13
       3 | Adaptation Holes            |           14
       3 | Adaptation Holes            |           15
       4 | Affair Prejudice            |           16
       4 | Affair Prejudice            |           17
       4 | Affair Prejudice            |           18
       4 | Affair Prejudice            |           19
       4 | Affair Prejudice            |           20
       4 | Affair Prejudice            |           21
       4 | Affair Prejudice            |           22
       5 | African Egg                 |           23
       5 | African Egg                 |           24
       5 | African Egg                 |           25
       6 | Agent Truman                |           26
       6 | Agent Truman                |           27
       6 | Agent Truman                |           28
       6 | Agent Truman                |           29
       6 | Agent Truman                |           30
       6 | Agent Truman                |           31
       7 | Airplane Sierra             |           32
       7 | Airplane Sierra             |           33
       7 | Airplane Sierra             |           34
       7 | Airplane Sierra             |           35
       7 | Airplane Sierra             |           36
       8 | Airport Pollock             |           37
       8 | Airport Pollock             |           38
       8 | Airport Pollock             |           39
       8 | Airport Pollock             |           40
       9 | Alabama Devil               |           41
       9 | Alabama Devil               |           42
       9 | Alabama Devil               |           43
       9 | Alabama Devil               |           44
	   
	 
select f.film_id , f.title, i.inventory_id
from film f left join inventory i using(film_id)
order by i.inventory_id desc;

dvdrental-# order by i.inventory_id desc;
 film_id |            title            | inventory_id
---------+-----------------------------+--------------
     607 | Muppet Mile                 |
     144 | Chinatown Gladiator         |
     217 | Dazed Punk                  |
     874 | Tadpole Park                |
     943 | Villain Desperate           |
      14 | Alice Fantasia              |
      87 | Boondock Ballroom           |
     909 | Treasure Command            |
     671 | Perdition Fargo             |
     495 | Kentuckian Giant            |
     860 | Suicides Silence            |
      36 | Argonauts Town              |
     148 | Chocolate Duck              |
     171 | Commandments Express        |
     713 | Rainbow Shock               |
      41 | Arsenic Independence        |
     192 | Crossing Divorce            |
     955 | Walls Artist                |
     742 | Roof Champion               |
     386 | Gump Date                   |
     950 | Volume House                |
     669 | Pearl Destiny               |
     318 | Firehouse Vietnam           |
     195 | Crowds Telemark             |
      38 | Ark Ridgemont               |
     128 | Catch Amistad               |
     701 | Psycho Shrunk               |
     108 | Butch Panther               |
     221 | Deliverance Mulholland      |
     954 | Wake Jaws                   |
     642 | Order Betrayed              |
     404 | Hate Handicap               |
     712 | Raiders Antitrust           |
     332 | Frankenstein Stranger       |
     419 | Hocus Frida                 |
     198 | Crystal Breaking            |
      33 | Apollo Teen                 |
     325 | Floats Garden               |
	 
=======================================================Right outer join========================================================

select f.film_id , f.title, i.inventory_id
from inventory i right join film f using(film_id);


dvdrental=# select f.film_id , f.title, i.inventory_id
dvdrental-# from inventory i right join film f using(film_id);
 film_id |            title            | inventory_id
---------+-----------------------------+--------------
       1 | Academy Dinosaur            |            1
       1 | Academy Dinosaur            |            2
       1 | Academy Dinosaur            |            3
       1 | Academy Dinosaur            |            4
       1 | Academy Dinosaur            |            5
       1 | Academy Dinosaur            |            6
       1 | Academy Dinosaur            |            7
       1 | Academy Dinosaur            |            8
       2 | Ace Goldfinger              |            9
       2 | Ace Goldfinger              |           10
       2 | Ace Goldfinger              |           11
       3 | Adaptation Holes            |           12
       3 | Adaptation Holes            |           13
       3 | Adaptation Holes            |           14
       3 | Adaptation Holes            |           15
       4 | Affair Prejudice            |           16
       4 | Affair Prejudice            |           17
       4 | Affair Prejudice            |           18
       4 | Affair Prejudice            |           19
       4 | Affair Prejudice            |           20
       4 | Affair Prejudice            |           21
       4 | Affair Prejudice            |           22
       5 | African Egg                 |           23
       5 | African Egg                 |           24
       5 | African Egg                 |           25
       6 | Agent Truman                |           26
       6 | Agent Truman                |           27
       6 | Agent Truman                |           28
       6 | Agent Truman                |           29
       6 | Agent Truman                |           30
       6 | Agent Truman                |           31
       7 | Airplane Sierra             |           32
       7 | Airplane Sierra             |           33
       7 | Airplane Sierra             |           34
       7 | Airplane Sierra             |           35
	   
	   
	
	

=========================================================Self Join=======================================================================
CREATE TABLE employee (
employee_id INT PRIMARY KEY,
first_name VARCHAR (255) NOT NULL,
last_name VARCHAR (255) NOT NULL,
manager_id INT,
FOREIGN KEY (manager_id) REFERENCES employee (employee_id) ON DELETE CASCADE
);
	 
select e.first_name||' ' || e.last_name as Employee,
m.first_name||' ' || m.last_name as Manager
from employee e inner join employee m on m.employee_id = e.manager_id
order by Manager;

result:

    employee     |     manager
-----------------+-----------------
 Sau Norman      | Ava Christensen
 Anna Reeves     | Ava Christensen
 Salley Lester   | Hassan Conner
 Kelsie Hays     | Hassan Conner
 Tory Goff       | Hassan Conner
 Ava Christensen | Windy Hays
 Hassan Conner   | Windy Hays
(7 rows)


=========================================================Full Outer Join=======================================================================
dvdrental=# select c.*, p.* from customer c full outer join payment p using(customer_id);
 customer_id | store_id | first_name  |  last_name   |                  email                   | address_id | activebool | create_date |       last_update       | active | payment_id | customer_id | staff_id | rental_id | amount |        payment_date
-------------+----------+-------------+--------------+------------------------------------------+------------+------------+-------------+-------------------------+--------+------------+-------------+----------+-----------+--------+----------------------------
         341 |        1 | Peter       | Menard       | peter.menard@sakilacustomer.org          |        346 | t          | 2006-02-14  | 2013-05-26 14:49:45.738 |      1 |      17503 |         341 |        2 |      1520 |   7.99 | 2007-02-15 22:25:46.996577
         341 |        1 | Peter       | Menard       | peter.menard@sakilacustomer.org          |        346 | t          | 2006-02-14  | 2013-05-26 14:49:45.738 |      1 |      17504 |         341 |        1 |      1778 |   1.99 | 2007-02-16 17:23:14.996577
         341 |        1 | Peter       | Menard       | peter.menard@sakilacustomer.org          |        346 | t          | 2006-02-14  | 2013-05-26 14:49:45.738 |      1 |      17505 |         341 |        1 |      1849 |   7.99 | 2007-02-16 22:41:45.996577
         341 |        1 | Peter       | Menard       | peter.menard@sakilacustomer.org          |        346 | t          | 2006-02-14  | 2013-05-26 14:49:45.738 |      1 |      17506 |         341 |        2 |      2829 |   2.99 | 2007-02-19 19:39:56.996577
         341 |        1 | Peter       | Menard       | peter.menard@sakilacustomer.org          |        346 | t          | 2006-02-14  | 2013-05-26 14:49:45.738 |      1 |      17507 |         341 |        2 |      3130 |   7.99 | 2007-02-20 17:31:48.996577
         341 |        1 | Peter       | Menard       | peter.menard@sakilacustomer.org          |        346 | t          | 2006-02-14  | 2013-05-26 14:49:45.738 |      1 |      17508 |         341 |        1 |      3382 |   5.99 | 2007-02-21 12:33:49.996577
         342 |        1 | Harold      | Martino      | harold.martino@sakilacustomer.org        |        347 | t          | 2006-02-14  | 2013-05-26 14:49:45.738 |      1 |      17509 |         342 |        2 |      2190 |   5.99 | 2007-02-17 23:58:17.996577
         342 |        1 | Harold      | Martino      | harold.martino@sakilacustomer.org        |        347 | t          | 2006-02-14  | 2013-05-26 14:49:45.738 |      1 |      17510 |         342 |        1 |      2914 |   5.99 | 2007-02-20 02:11:44.996577
         342 |        1 | Harold      | Martino      | harold.martino@sakilacustomer.org        |        347 | t          | 2006-02-14  | 2013-05-26 14:49:45.738 |      1 |      17511 |         342 |        1 |      3081 |   2.99 | 2007-02-20 13:57:39.996577
         343 |        1 | Douglas     | Graf         | douglas.graf@sakilacustomer.org          |        348 | t          | 2006-02-14  | 2013-05-26 14:49:45.738 |      1 |      17512 |         343 |        2 |      1547 |   4.99 | 2007-02-16 00:10:50.996577
         343 |        1 | Douglas     | Graf         | douglas.graf@sakilacustomer.org          |        348 | t          | 2006-02-14  | 2013-05-26 14:49:45.738 |      1 |      17513 |         343 |        1 |      1564 |   6.99 | 2007-02-16 01:15:33.996577
         343 |        1 | Douglas     | Graf         | douglas.graf@sakilacustomer.org          |        348 | t          | 2006-02-14  | 2013-05-26 14:49:45.738 |      1 |      17514 |         343 |        2 |      1879 |   0.99 | 2007-02-17 01:26:00.996577
         343 |        1 | Douglas     | Graf         | douglas.graf@sakilacustomer.org          |        348 | t          | 2006-02-14  | 2013-05-26 14:49:45.738 |      1 |      17515 |         343 |        2 |      1922 |   0.99 | 2007-02-17 04:32:51.996577
         343 |        1 | Douglas     | Graf         | douglas.graf@sakilacustomer.org          |        348 | t          | 2006-02-14  | 2013-05-26 14:49:45.738 |      1 |      17516 |         343 |        2 |      2461 |   6.99 | 2007-02-18 18:26:38.996577
         343 |        1 | Douglas     | Graf         | douglas.graf@sakilacustomer.org          |        348 | t          | 2006-02-14  | 2013-05-26 14:49:45.738 |      1 |      17517 |         343 |        1 |      2980 |   8.99 | 2007-02-20 07:03:29.996577
         343 |        1 | Douglas     | Graf         | douglas.graf@sakilacustomer.org          |        348 | t          | 2006-02-14  | 2013-05-26 14:49:45.738 |      1 |      17518 |         343 |        1 |      3407 |   0.99 | 2007-02-21 14:42:28.996577
         344 |        1 | Henry       | Billingsley  | henry.billingsley@sakilacustomer.org     |        349 | t          | 2006-02-14  | 2013-05-26 14:49:45.738 |      1 |      17519 |         344 |        1 |      1341 |   3.99 | 2007-02-15 10:54:44.996577
         344 |        1 | Henry       | Billingsley  | henry.billingsley@sakilacustomer.org     |        349 | t          | 2006-02-14  | 2013-05-26 14:49:45.738 |      1 |      17520 |         344 |        2 |      1475 |   4.99 | 2007-02-15 19:36:27.996577
         344 |        1 | Henry       | Billingsley  | henry.billingsley@sakilacustomer.org     |        349 | t          | 2006-02-14  | 2013-05-26 14:49:45.738 |      1 |      17521 |         344 |        1 |      1731 |   0.99 | 2007-02-16 14:00:38.996577
         345 |        1 | Carl        | Artis        | carl.artis@sakilacustomer.org            |        350 | t          | 2006-02-14  | 2013-05-26 14:49:45.738 |      1 |      17522 |         345 |        2 |      1210 |   0.99 | 2007-02-15 01:26:17.996577
         345 |        1 | Carl        | Artis        | carl.artis@sakilacustomer.org            |        350 | t          | 2006-02-14  | 2013-05-26 14:49:45.738 |      1 |      17523 |         345 |        1 |      1457 |   4.99 | 2007-02-15 18:34:15.996577
         345 |        1 | Carl        | Artis        | carl.artis@sakilacustomer.org            |        350 | t          | 2006-02-14  | 2013-05-26 14:49:45.738 |      1 |      17524 |         345 |        2 |      1550 |   0.99 | 2007-02-16 00:27:01.996577
         345 |        1 | Carl        | Artis        | carl.artis@sakilacustomer.org            |        350 | t          | 2006-02-14  | 2013-05-26 14:49:45.738 |      1 |      17525 |         345 |        2 |      2766 |   4.99 | 2007-02-19 16:13:41.996577
         346 |        1 | Arthur      | Simpkins     | arthur.simpkins@sakilacustomer.org       |        351 | t          | 2006-02-14  | 2013-05-26 14:49:45.738 |      1 |      17526 |         346 |        1 |      1994 |   5.99 | 2007-02-17 09:35:32.996577
         346 |        1 | Arthur      | Simpkins     | arthur.simpkins@sakilacustomer.org       |        351 | t          | 2006-02-14  | 2013-05-26 14:49:45.738 |      1 |      17527 |         346 |        2 |      3372 |   2.99 | 2007-02-21 12:02:45.996577
         346 |        1 | Arthur      | Simpkins     | arthur.simpkins@sakilacustomer.org       |        351 | t          | 2006-02-14  | 2013-05-26 14:49:45.738 |      1 |      17528 |         346 |        1 |      3421 |   2.99 | 2007-02-21 15:51:24.996577
         347 |        2 | Ryan        | Salisbury    | ryan.salisbury@sakilacustomer.org        |        352 | t          | 2006-02-14  | 2013-05-26 14:49:45.738 |      1 |      17529 |         347 |        2 |      1711 |   8.99 | 2007-02-16 12:40:18.996577
         347 |        2 | Ryan        | Salisbury    | ryan.salisbury@sakilacustomer.org        |        352 | t          | 2006-02-14  | 2013-05-26 14:49:45.738 |      1 |      17530 |         347 |        2 |      2274 |   0.99 | 2007-02-18 04:59:41.996577
         347 |        2 | Ryan        | Salisbury    | ryan.salisbury@sakilacustomer.org        |        352 | t          | 2006-02-14  | 2013-05-26 14:49:45.738 |      1 |      17531 |         347 |        1 |      3026 |   4.99 | 2007-02-20 10:16:26.996577
=========================================================Cross Join=======================================================================


select * from language cross join category;




Tavle structure






dvdrental=# \dt
             List of relations
 Schema |     Name      | Type  |  Owner
--------+---------------+-------+----------
 public | actor         | table | postgres
 public | address       | table | postgres
 public | category      | table | postgres
 public | city          | table | postgres
 public | country       | table | postgres
 public | customer      | table | postgres
 public | employee      | table | postgres
 public | film          | table | postgres
 public | film_actor    | table | postgres
 public | film_category | table | postgres
 public | inventory     | table | postgres
 public | language      | table | postgres
 public | payment       | table | postgres
 public | rental        | table | postgres
 public | sort_demo     | table | postgres
 public | staff         | table | postgres
 public | store         | table | postgres
 public | t             | table | postgres
(18 rows)







task 1 to retrive the data from three table like actor and film_actor and film

select a.* , fi.film_id, f.title 
from actor a inner join film_actor fi using (actor_id)
inner join film f using (film_id)
where film_id between 32 and 88
order by film_id;










sub qurary


select city from city where country_id in (select country_id from country where country = 'Argentina');


      city
----------------------
 Almirante Brown
 Avellaneda
 Baha Blanca
 Crdoba
 Escobar
 Ezeiza
 La Plata
 Merlo
 Quilmes
 San Miguel de Tucumn
 Santa F
 Tandil
 Vicente Lpez
(13 rows)



select category_id from category where name ='Action';
s


select title from film where film_id in (select film_id from film_category where category_id = (select category_id from category where name = 'Action' ));

dvdrental=# select title from film where film_id in (select film_id from film_category where category_id = (select category_id from category where name = 'Action' ));
          title
-------------------------
 Amadeus Holy
 American Circus
 Antitrust Tomatoes
 Ark Ridgemont
 Casualties Encino
 Barefoot Manchurian
 Berets Agent
 Bride Intrigue
 Bull Shawshank
 Caddyshack Jedi
 Campus Remember
 Celebrity Horn
 Clueless Bucket
 Crow Grease
 Dances None
 Darko Dorado
 Darn Forrester
 Devil Desire
 Dragon Squad
 Dream Pickup
 Drifter Commandments
 Easy Gladiator
 Entrapment Satisfaction
 Excitement Eve
 Fantasy Troopers
 Firehouse Vietnam
 Fool Mockingbird
 
 
 select film_id, length, rating from film  f where length > (select avg(length) from film where rating = f.rating); 
 
 
 
 
 
 film_id | length | rating
---------+--------+--------
     133 |    117 | NC-17
       4 |    117 | G
       5 |    130 | G
       6 |    169 | PG
      11 |    126 | G
      12 |    136 | PG
      13 |    150 | PG
      16 |    180 | NC-17
      19 |    113 | PG
      21 |    129 | R
      24 |    181 | R
      27 |    179 | NC-17
      29 |    168 | NC-17
      32 |    119 | R
      33 |    153 | PG-13
      35 |    147 | PG-13
      36 |    127 | PG-13
      37 |    121 | PG
      40 |    148 | R
      41 |    137 | PG
      42 |    170 | NC-17
     265 |    168 | PG
	 
	 
	 
	 
	 select staff_id,first_name, last_name from staff where store_id > any (select store_id from store); 



dvdrental=# select staff_id,first_name, last_name from staff where store_id > any (select store_id from store);
 staff_id | first_name | last_name
----------+------------+-----------
        2 | Jon        | Stephens
(1 row)




select first_name, last_name , customer_id
from customer
where customer_id > all(select customer_id from rental where rental_id in (18, 25));


dvdrental-# where customer_id > all(select customer_id from rental where rental_id in (18, 25));
 first_name  |  last_name   | customer_id
-------------+--------------+-------------
 Jared       | Ely          |         524
 Martha      | Gonzalez     |          38
 Debra       | Nelson       |          39
 Amanda      | Carter       |          40
 Stephanie   | Mitchell     |          41
 Carolyn     | Perez        |          42
 Christine   | Roberts      |          43
 Marie       | Turner       |          44
 Janet       | Phillips     |          45
 Catherine   | Campbell     |          46
 Frances     | Parker       |          47
 Ann         | Evans        |          48
 Joyce       | Edwards      |          49
 Diane       | Collins      |          50
 Alice       | Stewart      |          51
 Julie       | Sanchez      |          52
 Heather     | Morris       |          53
 Teresa      | Rogers       |          54
 Doris       | Reed         |          55
 Gloria      | Cook         |          56
 Evelyn      | Morgan       |          57
 Jean        | Bell         |          58
 Cheryl      | Murphy       |          59
 Mildred     | Bailey       |          60
 Katherine   | Rivera       |          61
 Joan        | Cooper       |          62
 Ashley      | Richardson   |          63
 Judith      | Cox          |          64
 
 
 
 
 select customer_id, first_name, last_name from customer c where  exists 
 (select 1 from payment p where  p.customer_id = c.customer_id and amount > 11);
 
 
 dvdrental-#  (select 1 from payment p where  p.customer_id = c.customer_id and amount > 11);
 customer_id | first_name | last_name
-------------+------------+-----------
          13 | Karen      | Jackson
         116 | Victoria   | Gibson
         195 | Vanessa    | Sims
         204 | Rosemary   | Schmidt
         237 | Tanya      | Gilbert
         362 | Nicholas   | Barfield
         591 | Kent       | Arsenault
         592 | Terrance   | Roush
(8 rows)


select * from top_rated_films
union
select * from most_popular_films;
          title           | release_year
--------------------------+--------------
 An American Pickle       |         2020
 The Dark Knight          |         2008
 Greyhound                |         2020
 The Shawshank Redemption |         1994
 The Godfather            |         1972
 12 Angry Men             |         1957
(6 rows)




========================================================union==============================================

select title from top_rated_films
union
select title from most_popular_films;




dvdrental=# select title from top_rated_films
dvdrental-# union
dvdrental-# select title from most_popular_films;
          title
--------------------------
 12 Angry Men
 The Shawshank Redemption
 The Dark Knight
 An American Pickle
 Greyhound
 The Godfather
(6 rows)



 select release_year from top_rated_films
 union
 select release_year from most_popular_films;
 
 
 dvdrental-#  select release_year from most_popular_films;
 release_year
--------------
         1994
         2008
         1957
         1972
         2020
(5 rows)

========================================================union all (having Duplication)==============================================


 select * from top_rated_films
 union all
 select * from most_popular_films;




dvdrental=#  select * from top_rated_films
dvdrental-#  union all
dvdrental-#  select * from most_popular_films;
          title           | release_year
--------------------------+--------------
 The Shawshank Redemption |         1994
 The Godfather            |         1972
 The Dark Knight          |         2008
 12 Angry Men             |         1957
 An American Pickle       |         2020
 The Godfather            |         1972
 The Dark Knight          |         2008
 Greyhound                |         2020
(8 rows)



 select release_year from top_rated_films
 intersect
 select release_year from most_popular_films;
 
 
  release_year
--------------
         2008
         1972
(2 rows)




 select * from top_rated_films
 except
 select * from most_popular_films;
 
 
           title           | release_year
--------------------------+--------------
 The Shawshank Redemption |         1994
 12 Angry Men             |         1957
(2 rows)



types of unionos operators


1)UNION
2)UNION ALL
3)INTERSECT
4)EXCEPT


select sum(
	case when rental_rate = 0.99 then 1 else 0 end
	) as "Economy",
	sum(
	case when rental_rate = 2.99 then 1 else 0 end
	) as "Mass",
	sum(
	case when rental_rate = 4.99 then 1 else 0 end
	) as "Platinum"
from film;



select title, rating,
case rating
	when 'G' then "General Audiences"
	when "PG" then "paranted guidance suggistance"
	when "PG-13" then "paranted strongly suggistance"
	when "R" then "restisted"
	when "NC-17" then "somthing els"
end as description	
	
from film;
	how many filem for the each reaings
	


select sum(
	case When rating = 'G' then 1 else 0 end
	) as "General_Audiences",
	
	sum(
	case When rating = 'PG' then 1 else 0 end
	) as "paranted guidance suggistance",
	
	sum(
	case When rating = 'PG-13' then 1 else 0 end
	) as "paranted strongly suggistance",
	
	sum(
	case When rating = 'R' then 1 else 0 end
	) as "restisted",
	
	sum(
	case When rating = 'NC-17' then 1 else 0 end
	) as "somthing else"
	from film;
	
	
	
	dvdrental-# from film;
 General_Audiences | paranted guidance suggistance | paranted strongly suggistance | restisted | somthing else
-------------------+-------------------------------+-------------------------------+-----------+---------------
               178 |                           194 |                           223 |       195 |           210
(1 row)





select coalesce(address2, 'basil', 'ahamed', 'name') from address order by address2 desc;
	
	
	


create table if not exists accounts(
user_id serial primary key,
username varchar(50) unique not null,
password varchar(50) unique not null,
email varchar(255) unique not null,
created_at timestamp not null,
last_login timestamp);
	

select film_id, title, rental_rate
into table film_r from film
where rating = 'R' and rental_duration = 5
order by title;



create table fruits(
id serial primary key,
name varchar(30) not null
);

insert into fruits(name) values('apple'),('orange'),('dragon fruits');


dvdrental=# select *
dvdrental-# from fruits;
 id |     name
----+---------------
  1 | apple
  2 | orange
  3 | dragon fruits
(3 rows)



select currval(pg_get_serial_sequence('fruits','id'));

ERROR:  syntax error at or near "↑"
LINE 1: ↑
        ^
 currval
---------
       3
(1 row)



insert into fruits(id,name) values(6,'jack fruits') returning id;

dvdrental=# insert into fruits(id,name) values(6,'jack fruits') returning id;
 id
----
  6
(1 row)


INSERT 0 1
dvdrental=# select *
dvdrental-# from fruits;
 id |     name
----+---------------
  1 | apple
  2 | orange
  3 | dragon fruits
  6 | jack fruits
  
  
  create sequence mysequance
 increment 5
 start 100;
 
 
 
 
 dvdrental=# select nextval('mysequance');
 nextval
---------
     100
(1 row)


dvdrental=# select nextval('mysequance');
 nextval
---------
     105
(1 row)








create table order_details(
order_id serial,
item_id int not null,
item_text varchar not null,
price dec(10,2) not null,
primary key(order_id, item_id));


create sequence order_item_id
increment 10
start 10
minvalue 10
owned by order_details.order_id;


insert into order_details(order_id, item_id, item_text,price) values(default,nextval('order_item_id'),'laptop', 12321),
(default,nextval('order_item_id'),'gaming pc', 345),
(default,nextval('order_item_id'),'gta6', 213),
(default,nextval('order_item_id'),'bike', 546754),
(default,nextval('order_item_id'),'bote', 3245643),
(default,nextval('order_item_id'),'somthing els', 3223);


dvdrental-# (default,nextval('order_item_id'),'bote', 3245643),
dvdrental-# (default,nextval('order_item_id'),'somthing els', 3223);
INSERT 0 6
dvdrental=# select *
dvdrental-# from order_details;
 order_id | item_id |  item_text   |   price
----------+---------+--------------+------------
        1 |      10 | laptop       |   12321.00
        2 |      20 | gaming pc    |     345.00
        3 |      30 | gta6         |     213.00
        4 |      40 | bike         |  546754.00
        5 |      50 | bote         | 3245643.00
        6 |      60 | somthing els |    3223.00
(6 rows)





create table color(
colour_id int generated by default as identity(start with 10 increment by 20),
colour_name varchar not null
);


insert into color(colour_id, colour_name) values(default,'black'),(default,'yellow'),(2323,'blue');


dvdrental=# select *
dvdrental-# from color;
 colour_id | colour_name
-----------+-------------
        10 | black
        30 | yellow
      2323 | blue
(3 rows)




create table contac(
id serial primary key,
first_name varchar(50) not null,
last_name varchar(50) not null,
full_name varchar(101) generated always as (first_name || ' ' || last_name) stored,
email varchar(300) unique
);


insert into contac(first_name,last_name,email) values('basil','ahamed','basilahamed46@gmail.com'),('sil','aham','basilahamed@gmail.com') 
returning *;



select distinct special_features from film;


task concept

1)string
2)math
3)date

4) merge
5)upsert