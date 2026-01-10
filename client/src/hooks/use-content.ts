import { useQuery, useMutation } from "@tanstack/react-query";
import { api, type InsertContactMessage } from "@shared/routes";

// ============================================
// INSTRUCTORS
// ============================================

export function useInstructors() {
  return useQuery({
    queryKey: [api.instructors.list.path],
    queryFn: async () => {
      const res = await fetch(api.instructors.list.path);
      if (!res.ok) throw new Error("Failed to fetch instructors");
      return api.instructors.list.responses[200].parse(await res.json());
    },
  });
}

// ============================================
// PROGRAMS
// ============================================

export function usePrograms() {
  return useQuery({
    queryKey: [api.programs.list.path],
    queryFn: async () => {
      const res = await fetch(api.programs.list.path);
      if (!res.ok) throw new Error("Failed to fetch programs");
      return api.programs.list.responses[200].parse(await res.json());
    },
  });
}

// ============================================
// CONTACT
// ============================================

export function useSubmitContact() {
  return useMutation({
    mutationFn: async (data: InsertContactMessage) => {
      const validated = api.contact.submit.input.parse(data);
      const res = await fetch(api.contact.submit.path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validated),
      });
      
      if (!res.ok) {
        if (res.status === 400) {
          const error = api.contact.submit.responses[400].parse(await res.json());
          throw new Error(error.message);
        }
        throw new Error("Failed to send message");
      }
      return api.contact.submit.responses[201].parse(await res.json());
    },
  });
}
