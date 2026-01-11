import { db } from "./db";
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
    const [newInstructor] = await db.insert(instructors).values(instructor).returning();
    return newInstructor;
  }

  async getPrograms(): Promise<Program[]> {
    return await db.select().from(programs);
  }

  async createProgram(program: InsertProgram): Promise<Program> {
    const [newProgram] = await db.insert(programs).values(program).returning();
    return newProgram;
  }

  async createContactMessage(message: InsertContactMessage): Promise<ContactMessage> {
    const [newMessage] = await db.insert(contactMessages).values(message).returning();
    return newMessage;
  }
}

export const storage = new DatabaseStorage();
