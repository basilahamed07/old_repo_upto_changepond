for looping concept



step 1 = {to create the calander here}
create table calendars(
date DATE primary key,
month int not null,
quarter int not null,
year int not null);



setp2 = {to create another procideure and inserting the vakues inti}

use classicmodels;
drop Procedure if exists insertcalendr;

delimiter $$
create PROCEDURE insertcalendr(currentdate date)
begin
	insert into calendars(date,month,quarter,year)
	values
	(currentdate,
	month(currentdate),
	quarter(currentdate),
	year(currentdate));
	
end$$

delimiter ;


step 3 = {to generate the while looping here or looping condiction}
use classicmodels;
drop Procedure if exists localdates;

delimiter $$
create PROCEDURE localdates(startdate date,day int)
begin
	declare counter int default 0;
	declare currentdate date default startdate;
	
	while counter <= day DO
		call insertcalendr(currentdate);
		set counter = counter +1;
		set currentdate = date_add(currentdate, interval 1 day);
	end while;
	
end$$

delimiter ;