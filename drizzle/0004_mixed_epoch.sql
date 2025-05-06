ALTER TABLE "events" ALTER COLUMN "description" SET DATA TYPE varchar(255);--> statement-breakpoint
ALTER TABLE "events" ADD COLUMN "content" varchar NOT NULL;