import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  app.get(api.instructors.list.path, async (req, res) => {
    const instructors = await storage.getInstructors();
    res.json(instructors);
  });

  app.get(api.programs.list.path, async (req, res) => {
    const programs = await storage.getPrograms();
    res.json(programs);
  });

  app.post(api.contact.submit.path, async (req, res) => {
    try {
      const input = api.contact.submit.input.parse(req.body);
      await storage.createContactMessage(input);
      res.status(201).json({ success: true });
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  // Seed data if empty
  const existingPrograms = await storage.getPrograms();
  if (existingPrograms.length === 0) {
    await storage.createProgram({
      title: "Foundation Reformer",
      description: "Perfect for beginners. Learn the core principles of Pilates on the reformer machine.",
      duration: "50 min",
      difficulty: "Beginner"
    });
    await storage.createProgram({
      title: "Power Sculpt",
      description: "A high-intensity class focusing on strength, endurance, and toning.",
      duration: "50 min",
      difficulty: "Advanced"
    });
    await storage.createProgram({
      title: "Restorative Flow",
      description: "Focus on flexibility, breath work, and gentle movements to restore balance.",
      duration: "60 min",
      difficulty: "All Levels"
    });
  }

  const existingInstructors = await storage.getInstructors();
  if (existingInstructors.length === 0) {
    await storage.createInstructor({
      name: "Sarah Kim",
      role: "Lead Instructor",
      bio: "Certified Pilates instructor with 10+ years of experience specializing in rehabilitation.",
      imageUrl: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=800"
    });
    await storage.createInstructor({
      name: "Marcus Chen",
      role: "Strength Coach",
      bio: "Focuses on athletic performance and core stability through dynamic reformer workouts.",
      imageUrl: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=800"
    });
    await storage.createInstructor({
      name: "Emma Davis",
      role: "Mindful Movement",
      bio: "Combines yoga and pilates principles for a holistic approach to wellness.",
      imageUrl: "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&q=80&w=800"
    });
  }

  return httpServer;
}
