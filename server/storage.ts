import { db } from "./db";
import { eq } from "drizzle-orm";
import {
  instructors,
  programs,
  contactMessages,
  type Instructor,
  type InsertInstructor,
  type Program,
  type InsertProgram,
  type InsertContactMessage,
  type ContactMessage
} from "@shared/schema";

export interface IStorage {
  getInstructors(): Promise<Instructor[]>;
  createInstructor(instructor: InsertInstructor): Promise<Instructor>;
  
  getPrograms(): Promise<Program[]>;
  createProgram(program: InsertProgram): Promise<Program>;
  
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
}

export class DatabaseStorage implements IStorage {
  async getInstructors(): Promise<Instructor[]> {
    return await db.select().from(instructors);
  }

  async createInstructor(instructor: InsertInstructor): Promise<Instructor> {
    const result = await db.insert(instructors).values(instructor);
    const insertId = Number((result as any).insertId);
    const [newInstructor] = await db.select().from(instructors).where(eq(instructors.id, insertId));
    return newInstructor;
  }

  async getPrograms(): Promise<Program[]> {
    return await db.select().from(programs);
  }

  async createProgram(program: InsertProgram): Promise<Program> {
    const result = await db.insert(programs).values(program);
    const insertId = Number((result as any).insertId);
    const [newProgram] = await db.select().from(programs).where(eq(programs.id, insertId));
    return newProgram;
  }

  async createContactMessage(message: InsertContactMessage): Promise<ContactMessage> {
    const result = await db.insert(contactMessages).values(message);
    const insertId = Number((result as any).insertId);
    const [newMessage] = await db.select().from(contactMessages).where(eq(contactMessages.id, insertId));
    return newMessage;
  }
}

export const storage = new DatabaseStorage();
