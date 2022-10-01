# Databases - postgresql
Things you need to know about databases and postgres.

## psql & pgadmin4
```bash
sudo -u postgres psql # login with user:postgres in psql
sudo service postgresql status
sudo service postgresql start
sudo service postgresql stop
```

```psql
\l # list all databases
\c <database_name> # connect to database
\d <table_name> # table description/schema
\dt+ # list of database tables/relations
\du # list of roles
\q # quit
```

## Relational algebra

## Statements

```postgresql
SELECT
  DISTINCT
  JOIN --all joins
  WHERE
  GROUP BY
  HAVING
  ORDER BY
  LIMIT
  -- aggregate functions
```

```postgresql
CREATE TABLE <table_name> (
    col1 <type> [PRIMARY KEY] [UNIQUE] [NOT NULL] [CHECK (condition)] [DEFAULT <value>] [REFERENCES table(column)],
    col2 <type> ...,
    ...,
    [PRIMARY KEY (col1, col2, ...),]
    [UNIQUE (col1, col2, ...),]
    [CHECK (condition),]
    [FOREIGN KEY (col1, col2, ...) REFERENCES table(col1, col2, ...)]
);
```
```postgresql
INSERT INTO <table_name> [(col1, col2, ...)]
VALUES (row1, row2, ...);
```
```postgresql
UPDATE <table_name> 
SET <column_name> = { expression | DEFAULT }
WHERE <condition>
```

```postgresql
DELETE FROM <table_name>
WHERE <condition>;
```

```postgresql
CREATE VIEW <view_name> AS
SELECT ...
```

## Normalization
For reducing redundancy
## Roles and Grants
User permissions
## Indexes
For fasters searches
## Transactions
## Triggers
For logging changes to database (insert, update, delete)
## Functions
You can define costum functions