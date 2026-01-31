//created a table for users 


create extension if not exists "uuid-ossp";

create table userss(
    id uuid default uuid_generate_v4() primary key,
    name text not null,
    email text unique not null,
    password text not null,
    role text not null,
    created_at timestamp default now()
);
