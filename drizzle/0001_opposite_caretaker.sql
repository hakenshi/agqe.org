CREATE TABLE "sponsors" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"logo" varchar NOT NULL,
	"website" varchar(255) NOT NULL,
	"sponsoring_since" timestamp NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now()
);
