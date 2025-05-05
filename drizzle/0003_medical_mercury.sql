CREATE TYPE "public"."event_type" AS ENUM('gallery', 'event', 'event_gallery');--> statement-breakpoint
ALTER TABLE "events" ADD COLUMN "event_type" "event_type" NOT NULL;