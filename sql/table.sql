
create table routes (
 routes_id serial not null primary key, 
 route_name text not null,
 fare  decimal (10,2)  
);


create table region(
region_id serial not null primary key,  
region_name text not null  

);
create table taxi(
taxi_id serial not null primary key, 
regNum text not null,

region_id int not null,

foreign key (region_id) references region (region_id)
);
create table trip ( 
   trip_id serial not null primary key,
   routes_id int not null,
   taxi_id int not null, 
   foreign key (routes_id) references routes (routes_id),
   foreign key (taxi_id) references taxi (taxi_id)

 );
--  dbname = taxiapp