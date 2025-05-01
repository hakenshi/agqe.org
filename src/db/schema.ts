import { pgTable, serial, timestamp, varchar } from "drizzle-orm/pg-core";

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
    sponseringSince: timestamp('sponsoring_since').notNull(),
    createAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().$onUpdate(() => new Date())
})