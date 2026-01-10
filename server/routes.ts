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
      title: "기초 리포머",
      description: "초보자에게 완벽한 클래스입니다. 리포머 기구에서 필라테스의 핵심 원리를 배워보세요.",
      duration: "50분",
      difficulty: "초급"
    });
    await storage.createProgram({
      title: "파워 스컬프트",
      description: "근력, 지구력, 토닝에 집중하는 고강도 클래스입니다.",
      duration: "50분",
      difficulty: "상급"
    });
    await storage.createProgram({
      title: "리스토러티브 플로우",
      description: "유연성, 호흡법, 부드러운 움직임에 집중하여 균형을 회복하는 클래스입니다.",
      duration: "60분",
      difficulty: "전 레벨"
    });
  }

  const existingInstructors = await storage.getInstructors();
  if (existingInstructors.length === 0) {
    await storage.createInstructor({
      name: "김서연",
      role: "수석 강사",
      bio: "재활 전문 10년 이상 경력의 공인 필라테스 강사입니다.",
      imageUrl: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=800"
    });
    await storage.createInstructor({
      name: "이준호",
      role: "스트렝스 코치",
      bio: "다이나믹한 리포머 운동을 통해 운동 능력과 코어 안정성에 집중합니다.",
      imageUrl: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=800"
    });
    await storage.createInstructor({
      name: "박지현",
      role: "마음챙김 무브먼트",
      bio: "요가와 필라테스의 원리를 결합하여 전인적인 웰니스 접근법을 제공합니다.",
      imageUrl: "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&q=80&w=800"
    });
  }

  return httpServer;
}
