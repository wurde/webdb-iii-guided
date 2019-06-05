BEGIN TRANSACTION;

CREATE TABLE `knex_migrations` (
  `id` integer not null primary key autoincrement,
  `name` varchar(255),
  `batch` integer,
  `migration_time` datetime
);

CREATE TABLE `knex_migrations_lock` (
  `index` integer not null primary key autoincrement,
  `is_locked` integer
);

CREATE TABLE `roles` (
  `id` integer not null primary key autoincrement,
  `name` varchar(128) not null,
  `created_at` datetime not null default CURRENT_TIMESTAMP,
  `updated_at` datetime not null default CURRENT_TIMESTAMP
);
CREATE UNIQUE INDEX `roles_name_unique` on `roles` (`name`);

CREATE TABLE `users` (
  `id` integer not null primary key autoincrement,
  `name` varchar(128) not null,
  `role_id` integer,
  `created_at` datetime not null default CURRENT_TIMESTAMP,
  `updated_at` datetime not null default CURRENT_TIMESTAMP,
  foreign key(`role_id`) references `roles`(`id`) on delete CASCADE on update CASCADE
);

COMMIT TRANSACTION;
