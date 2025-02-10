assignment1


drop table if exists students;
create table if not EXISTS students(
student_id SERIAL  not null unique primary key,
student_name varchar(100) not null unique,
age int not null,
email varchar(100) not null unique,
frontend_mark int not null,
backend_mark int not null,
status varchar(50));



drop table if exists courses;
CREATE TABLE courses(
course_id int not null unique primary key,
course_name varchar(100) not null,
credits int not null );

drop table if exists enrollment;
create table enrollment(
enrollment_id serial not null unique primary key,
student_id  int,
course_id  int,
foreign key(student_id) REFERENCES  students(student_id),
foreign key(course_id) REFERENCES courses(course_id));



insert into students(student_name,age,email,frontend_mark,backend_mark)
values('Alice', 22, 'alice@example.com',55,57,),
('mohamed basil', 21,'mohamedbasil46@gmail.com',34,45),
('Mohamed Farvez', 23, 'mohamedfarvez@gmail.com',60,59),
('mohamed mishal', 28, 'mohamedmishal@gmail.com',40,49),
('Sandeep', 30, 'Sandeep@gmail.com',45,34),
('siva', 40, 'siva@gmail.com',46,42);



update students
set status = null;



insert into courses(course_id,course_name,credits)values(1,
'Next.js',3),
(2, 'React.js',4),
(3, 'Database',3),
(4, 'Prisma',3);

insert into enrollment(enrollment_id,student_id,course_id)values(1,1,1),(2,1,2),(3,2,1),(4,3,2);




university_db=# insert into enrollment(enrollment_id,student_id,course_id)values(1,1,1),(2,1,2),(3,2,1),(4,3,2);
INSERT 0 4
university_db=# select *
university_db-# from enrollment;


insert into students(student_name,age,email,frontend_mark,backend_mark)
values('ahamed basil', 22, 'ahamedbasil46@gmail.com',50,50);







select student_name
from students
where student_id in (select student_id
from enrollment
where course_id = (select course_id
from courses
where course_name = 'Next.js'));





update students
set status = 'Awarded'
where student_id = (select student_id
from students
order by (frontend_mark+backend_mark) desc
limit 1);

update students
set status = 'Awarded'
where student_id = (select student_id
from students
order by (frontend_mark+backend_mark) desc
limit 1);



Query 4:
Delete all courses that have no students enrolled.

DELETE FROM courses
WHERE course_id NOT IN (SELECT DISTINCT course_id FROM enrollment);





Query 5:
Retrieve the names of students using a limit of 2, starting from the 3rd student.




select student_name
from students
offset 3
limit 2;





Query 6:
Retrieve the course names and the number of students enrolled in each course.


select c.course_name , count(enrollment_id)
from courses c inner join 
enrollment e on c.course_id = e.course_id
group by c.course_name;




Query 7:
Calculate and display the average age of all students.


select avg(age)
from students




Query 8:
Retrieve the names of students whose email addresses contain 'example.com'.

select student_name
from students
where email like '%gmail.com';








