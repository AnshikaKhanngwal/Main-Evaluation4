create extension if not exists "uuid-ossp";

create table vehical(
   id uuid default uuid_generate_v4() primary key,
   name text,
   registration_number text unique ,
   allowed_passengers text,
   isAvailable text default true,
   driver_id text,
   rate_per_km text,
   owner_id text,
   create_at timestamp default now()
)