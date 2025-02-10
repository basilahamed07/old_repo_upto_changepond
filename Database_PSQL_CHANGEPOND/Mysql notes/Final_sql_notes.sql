to create the faster retrive data and it was store in ram 

view concept

create view Customerpayments
as
select customername as cname , checknumber as cheque , paymentdate, amount
from customers
inner join
payments using(customernumber)