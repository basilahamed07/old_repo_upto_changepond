use classocmodels;
drop procedure if exists Create_Email_List;

delimiter $$

create PROCEDURE Create_Email_List( inout email_list text)
begin
	declare email_address varchar(200) default "";
	declare done bool default false;
	
	declare cur_email_list  cursor for select email from employees;
	
	declare continue handler
	for not found set done = true;
	
	
	open cur_email_list;
	set email_list = "";
	
	
	process_email : loop
		fetch cur_email_list into email_address;
			if done = true then
				leave process_email;
			end if;
		set email_list  = concat(email_address,";",email_list);
		end loop;
	close cur_email_list;
	
	end $$
	
	delimiter ;
	
	
	=====while looping=========
	use classocmodels;
drop procedure if exists Create_Email_List_loop;

delimiter $$

create PROCEDURE Create_Email_List_loop(inout email_list text)
begin
	declare email_address varchar(200) default "";
	declare done bool default false;
	
	declare cur_email_list  cursor for select email from employees;
	
	declare continue handler
	for not found set done = true;
	
	
	open cur_email_list;
	set email_list = "";
	
	while done = false do
	
		fetch cur_email_list into email_address;
		set email_list  = concat(email_address,";",email_list);
		end while;
	close cur_email_list;
	
	end $$
	
	delimiter ;
	
	
	call Create_Email_List_loop(@email_list);
	select @email_list;
	
	
	=====================================================================================================================================================================================
	
	use classocmodels;
	drop function id exists CustomerLevel;
	
	delimiter $$
	create function CustomerLevel(credit decimal(10,2))
	returns varchar(20)
	deterministic
	begin
		declare customerLevel varchar(20);
		if credit > 50000 then
			set customerLevel = "platinum";
		elseif credit <= 50000 and credit > 10000 then
			set customerLevel = "Gold";
		else
			set customerLevel = "silver";
		end if;
		return(customerLevel);
		end$$
	delimiter ;
	