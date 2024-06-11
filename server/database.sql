-- Queries involving todolist database

-- Create table

CREATE TABLE todos (
    id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);

-- Get data from todos

SELECT * FROM todos;

-- Insert data into todos

INSERT INTO todos (description) VALUES ("I need to apply 10 jobs this week.");

