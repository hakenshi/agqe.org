ALTER TABLE "events" ALTER COLUMN "slug" SET DATA TYPE varchar;--> statement-breakpoint
ALTER TABLE "events" ADD COLUMN "cover_image" varchar NOT NULL;--> statement-breakpoint
ALTER TABLE "events" DROP COLUMN "description";