'server-only'

import { relations } from "drizzle-orm";
import { pgTable, serial, timestamp, varchar, integer, pgEnum } from "drizzle-orm/pg-core";

export const usersSchema = pgTable('users', {
    id: serial('id').primaryKey().notNull(),
    firstName: varchar('first_name', { length: 255 }).notNull(),
    secondName: varchar('second_name', { length: 255 }).notNull(),
    photo: varchar("photo"),
    occupation: varchar("occupation", { length: 255 }).notNull(),
    joinedAt: timestamp("joined_at").notNull(),
    createAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().$onUpdate(() => new Date())
})

export const sponsorsSchema = pgTable('sponsors', {
    id: serial('id').primaryKey().notNull(),
    name: varchar('name', { length: 255 }).notNull(),
    logo: varchar('logo').notNull(),
    website: varchar('website', { length: 255 }).notNull(),
    sponsoringSince: timestamp('sponsoring_since').notNull(),
    createAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().$onUpdate(() => new Date())
})

export const eventTypeEnum = pgEnum('event_type', ['gallery', 'event', 'event_gallery']);

export const eventsSchema = pgTable('events', {
    id: serial('id').primaryKey().notNull(),
    name: varchar('name', { length: 255 }).notNull(),
    eventType: eventTypeEnum('event_type').notNull(),
    slug: varchar('slug', { length: 255 }).notNull(),
    description: varchar('description').notNull(),
    content: varchar('content'),
    date: timestamp('date').notNull(),
    location: varchar('location', { length: 255 }).notNull(),
    createAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().$onUpdate(() => new Date())
})

export const eventImagesSchema = pgTable('event_images', {
    id: serial('id').primaryKey().notNull(),
    eventId: integer('event_id').references(() => eventsSchema.id).notNull(),
    imageUrl: varchar('image_url').notNull(),
    createAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().$onUpdate(() => new Date())
})

export const eventImagesRelation = relations(eventsSchema, ({ many }) => ({
    images: many(eventImagesSchema)
}))

export const imageEventsRelation = relations(eventImagesSchema, ({ one }) => ({
    event: one(eventsSchema, {
        fields: [eventImagesSchema.eventId],
        references: [eventsSchema.id]
    })
}))