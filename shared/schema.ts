import { pgTable, text, serial } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const instructors = pgTable("instructors", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  role: text("role").notNull(),
  bio: text("bio").notNull(),
  imageUrl: text("image_url").notNull(),
});

export const programs = pgTable("programs", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  duration: text("duration").notNull(),
  difficulty: text("difficulty").notNull(),
});

export const contactMessages = pgTable("contact_messages", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  message: text("message").notNull(),
});

export const insertInstructorSchema = createInsertSchema(instructors).omit({ id: true });
export const insertProgramSchema = createInsertSchema(programs).omit({ id: true });
export const insertContactMessageSchema = createInsertSchema(contactMessages).omit({ id: true });

export type Instructor = typeof instructors.$inferSelect;
export type InsertInstructor = z.infer<typeof insertInstructorSchema>;

export type Program = typeof programs.$inferSelect;
export type InsertProgram = z.infer<typeof insertProgramSchema>;

export type ContactMessage = typeof contactMessages.$inferSelect;
export type InsertContactMessage = z.infer<typeof insertContactMessageSchema>;
