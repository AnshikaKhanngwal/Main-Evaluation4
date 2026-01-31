create extension if not exists "uuid-ossp";

create table trip(
  id uuid default uuid_generate_v4() primary key,
  customer_id uui references userss(id) on delete cascade,
  vehical_id uui references vehical(id) on delete cascade,
  start_date text,
  end_date text,
  location text,
  distance_km text not null,
  passengers text,
  tripCost text,
  isCompleted text,
  created_at text

)