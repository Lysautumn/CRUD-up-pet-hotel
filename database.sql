-- create table for owners
CREATE TABLE owners (
id SERIAL PRIMARY KEY,
first_name varchar(300),
last_name varchar(300)
);

-- create table for pets
CREATE TABLE pets (
id SERIAL PRIMARY KEY,
name varchar(50),
breed varchar(50),
color varchar(50),
owner_id integer REFERENCES owner
);

-- create table for visits
CREATE TABLE visits(
id SERIAL PRIMARY KEY,
check_in_date date,
check_out_date date,
pet_id integer REFERENCES pets
);

-- enter data for owners table
INSERT INTO owners
VALUES (1, 'Simone', 'Biles'),
(2, 'Prince', 'Nelson'),
(3, 'Kanye', 'West'),
(4, 'Boba', 'Fett'),
(5, 'Luke', 'Skywalker'),
(6, 'Katy', 'Perry'),
(7, 'Harley', 'Quinn'),
(8, 'Rosie', 'Riveter');

-- enter data for pets table
INSERT INTO pets
VALUES (1, 'Gatsby', 'Norwegian Forest Cat', 'White and Gray', 1),
(2, 'Scout', 'Domestic Shorthair', 'Black and White', 2),
(3, 'Vegas', 'Tabby', 'Gold', 4),
(4, 'Zoe', 'Pit Bull', 'Beige', 5),
(5, 'Judas Priest', 'New Foundland', 'Black', 6),
(6, 'Bella', 'Collie', 'White and Brown', 7),
(7, 'Keebler', 'Terrier', 'Black', 3),
(8, 'Clifford', 'Bloodhound', 'Red', 8);

-- enter data for visits table
INSERT INTO visits
VALUES (1, '2016-10-01', '2016-10-02', 1),
(2, '2016-09-25', '2016-09-30', 2),
(3, '2016-10-01', '2016-10-05', 3),
(4, '2016-09-15', '2016-09-17', 4),
(5, '2016-09-30', '2016-10-10', 5),
(6, '2016-10-02', '2016-10-10', 6),
(7, '2016-10-04', '2016-10-05', 7),
(8, '2016-10-10', '2016-10-11', 8);
