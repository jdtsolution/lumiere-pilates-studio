import { type Instructor } from "@shared/schema";
import { Card, CardContent } from "@/components/ui/card";

interface InstructorCardProps {
  instructor: Instructor;
}

export function InstructorCard({ instructor }: InstructorCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl">
      <div className="aspect-[3/4] overflow-hidden bg-gray-100">
        <img
          src={instructor.imageUrl}
          alt={instructor.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
      
      <div className="absolute bottom-0 left-0 w-full p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
        <span className="block text-xs uppercase tracking-widest text-white/80 mb-1">
          {instructor.role}
        </span>
        <h3 className="text-2xl font-serif font-medium mb-3">{instructor.name}</h3>
        <p className="text-sm text-white/90 line-clamp-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
          {instructor.bio}
        </p>
      </div>
    </div>
  );
}
