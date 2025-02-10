Delimiter $$
create procedure CreatePerson()
begin
drop table if exists persons;
create table persons(
id int auto_increment primary key,
first_name varchar(255) not null,
last_name varchar(255) not null);

insert into persons(first_name,last_name)
values("Basil", "ahamed"),
("Ahamed", "ahamed"),
("Basil", "basil"),
("Bl", "ahamed");

select id, CONCAT(first_name,'',last_name) as "Personal name" from persons;

end$$
Delimiter ;

call CreatePerson();


output:

---------------------------------------------------------------------------------------------------------------------------------------------
mysql> Delimiter ;
mysql> call CreatePerson();
+----+---------------+
| id | Personal name |
+----+---------------+
|  1 | Basilahamed   |
|  2 | Ahamedahamed  |
|  3 | Basilbasil    |
|  4 | Blahamed      |
+----+---------------+
4 rows in set (1.20 sec)

Query OK, 0 rows affected (1.20 sec)

---------------------------------------------------------------------------------------------------------------------------------------------

use classicmodels;

drop procedure if exists GetOfficeByCountry;

Delimiter //



create procedure GetOfficeByCountry(in countryName varchar(255))
BEGIN

select * from offices where counrty = countryName;

end//

Delimiter ;

call GetOfficeByCountry("France")





--------------------------------------------------------------------------------------------------------------------------



use classicmodels;

drop procedure if exists GetOfficeByCountry;

Delimiter //



create procedure GetOfficeByCountry(in orderstatus varchar(255), out total int)
BEGIN

select count(orderstatus) into total from orders 
where status = orderstatus;

end//

Delimiter ;

call GetOfficeByCountry("In Process", @total);
select @total as total_in_process;


output::

mysql> call GetOfficeByCountry("shipped", @total);
Query OK, 1 row affected (0.24 sec)

mysql> select @total;
+--------+
| @total |
+--------+
|    303 |
+--------+
1 row in set (0.00 sec)


to see the all the procide names;


select routine_name from information_schema.routines
    -> where routine_type = "PROCEDURE"
    -> and routine_schema = "classicmodels";



	show procedure status like "%Orders%"



---------------------------------------------------------------------------------------------------------------------------

sql code here:

$) to check the credite level check

single row customer (or) implesity cuesor
delimiter $$

drop procedure if exists getcustomerlevel;
create procedure getcustomerlevel(
in pcustomernumber int,
out pcustomerlevel varchar(255))
begin
declare credit decimal(10,2) default 0;
select creditlimit into credit
from customers
where customernumber = pcustomernumber;

if credit > 100000 then
	set pcustomerlevel = "platinum";
ELSEIF credit >=50000  and credit < 100000 then
	set pcustomerlevel = "Gold";
else
	set pcustomerlevel = "bronze";
END IF;



end$$
delimiter ;



call getcustomerlevel(444,@level);

select @level;

code destructuring

delimiter $$
create procedure getcustomerlevel(
in pcustomernumber int,
out pcustomerlevel varchar(255)) ==> creating the procideure by with the parameters in (in and out function)
begin   ==> start of the code here
declare create decimal(10,2) default 0;  ==> to decelaring the variable here(variable syntax)



end$$;    ==> end of the code here;
delimiter ; ==> end of the delimiter;






delimiter $$

drop procedure if exists getcusomershipping;

create procedure getcusomershipping(

in pcustomernumber int,

out pshipping varchar(255))
																					Ṇ
begin
declare customercountry varchar(100);

select country into customercountry

from customers

where customernumber = pcustomernumber;

case customercountry
	when 'USA' Then
		set pshipping = '2-day shipping__sofast';
	when 'CANADA' Then
		set pshipping = '1-day shipping__siper_fast';
	when 'Belgium' or 'Italy' then
		set pshipping = '-4 day shipping dont, by this procudet';
	else
	set pshipping = 'dont bye this product more then 10 day shipping';
	end case;
end$$
delimiter ;

call getcusomershipping(484,@shipstatus);
select @shipstatus;




task::::
delimiter $$

drop procedure if exists getshipingdateinfo;

create procedure getshipingdateinfo(

in ordernumbers int,

out status_delivary varchar(255))

begin
declare datedefferent decimal(10) default NULL;

select DATEDIFF(requiredDate,  shippedDate) into datedefferent

from orders

where orderNumber = ordernumbers;


IF datedefferent IS NULL THEN
    SET status_delivary = 'data not found';
ELSEIF datedefferent = 0 THEN
    SET status_delivary = 'early delivery';
ELSEIF datedefferent >= 0 AND datedefferent < 1 THEN
    SET status_delivary = 'same day delevary';
ELSEIF datedefferent >=  AND datedefferent <= 3 THEN
    SET status_delivary = 'tomorrow or day after tomorrow delivery';
ELSEIF datedefferent > 3 THEN
    SET status_delivary = 'more days to take for delivery';
else
	set status_delivary = "not data found";
END IF;
end$$
delimiter ;

call getshipingdateinfo(111,@statussss);
select @statusss;





DATEDIFF(day, '2017/08/25', '2011/08/25') AS DateDiff;