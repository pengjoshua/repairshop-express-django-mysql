drop database if exists repairshop;
create database repairshop;
use repairshop;

create table repairs (
  id int not null auto_increment,
  dropoff date not null,
  pickup date not null,
  mechanic varchar(10) not null,
  type varchar(1) not null,
  primary key (id)
);

load data local infile '~/Desktop/interview/repairshop/repairs.csv' into table repairs fields terminated by ',' enclosed by '"' lines terminated by '\n' ignore 1 rows;

create table repairs1 select mechanic,
  cast((datediff(pickup, dropoff) + 1) as decimal(2,1)) los,
  cast(replace(replace(replace(replace(replace(replace(type, 'F', '2.5'), 'E', '3'), 'D', '2'), 'C', '3'), 'B', '1'), 'A', '1') as decimal(2,1)) nationalavg,
  type from repairs;

create table repairs2 select mechanic, type, avg(los) avg, nationalavg from repairs1 group by mechanic, type, nationalavg;
