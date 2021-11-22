
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

insert into region(region_id, region_name) values (1, 'Durban');
insert into region(region_id, region_name) values (2, 'Cape Town');
insert into region(region_id, region_name) values (3, 'Gauteng');

insert into routes(route_name,fare) values('Cape Town - Bellville',20.50);
insert into routes(route_name,fare) values('Cape Town - Gugulethu',15.00);
insert into routes(route_name,fare) values('Cape Town - Langa',16.00);

insert into routes(route_name,fare) values('Sandton - Randburg',21.50);
insert into routes(route_name,fare) values('Alexandra - Sandton',30.00);
insert into routes(route_name,fare) values('Sandton - Midrand',28.00);

insert into routes(route_name,fare) values('Umlazi - Durban Central',24.00);
insert into routes(route_name,fare) values('Durban Central - Umhlanga Rocks',18.00);
insert into routes(route_name,fare) values('Durban Central - Umbilo',20.00);

insert into taxi (regNum ,region_id)values('CA 123 546', 2 );
insert into taxi (regNum ,region_id)values('CA 245 326', 2 );
insert into taxi (regNum ,region_id)values('CA 421 123', 2 );
insert into taxi (regNum ,region_id)values('GP 123 546', 3);
insert into taxi (regNum ,region_id)values('GP 123 546', 3);
insert into taxi (regNum ,region_id)values('CF 123 546', 1 );

insert into trip(routes_id,taxi_id)values(4,2);
insert into trip(routes_id,taxi_id)values(5,3);
insert into trip(routes_id,taxi_id)values(6,7);
insert into trip(routes_id,taxi_id)values(7,4);
insert into trip(routes_id,taxi_id)values(8,5);
insert into trip(routes_id,taxi_id)values(10,6);