CREATE TYPE "public"."colors" AS ENUM('black', 'pink', 'purple', 'blue', 'teal', 'red', 'indigo', 'yellow', 'green', 'gray', 'orange', 'cyan', 'lime');--> statement-breakpoint
ALTER TABLE "events" RENAME COLUMN "content" TO "markdown";--> statement-breakpoint
ALTER TABLE "event_images" ALTER COLUMN "updated_at" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "events" ALTER COLUMN "date" SET DATA TYPE date;--> statement-breakpoint
ALTER TABLE "events" ALTER COLUMN "updated_at" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "sponsors" ALTER COLUMN "updated_at" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "joined_at" SET DATA TYPE date;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "updated_at" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "events" ADD COLUMN "starting_time" time NOT NULL;--> statement-breakpoint
ALTER TABLE "events" ADD COLUMN "ending_time" time NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "cpf" varchar(14) NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "colors" "colors" DEFAULT 'pink' NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "password" varchar(255) NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "birth_date" date NOT NULL;