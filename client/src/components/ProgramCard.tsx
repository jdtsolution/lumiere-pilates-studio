import { type Program } from "@shared/schema";
import { Clock, BarChart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProgramCardProps {
  program: Program;
}

export function ProgramCard({ program }: ProgramCardProps) {
  return (
    <Card className="border-none shadow-sm hover:shadow-lg transition-all duration-300 bg-white group overflow-hidden rounded-2xl h-full flex flex-col">
      <div className="h-2 bg-primary/20 group-hover:bg-primary transition-colors duration-500 w-full" />
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start mb-2">
          <Badge variant="secondary" className="bg-secondary text-secondary-foreground font-normal tracking-wide">
            {program.difficulty}
          </Badge>
          <div className="flex items-center text-muted-foreground text-xs">
            <Clock size={14} className="mr-1" />
            {program.duration}
          </div>
        </div>
        <CardTitle className="text-2xl font-serif font-medium group-hover:text-primary transition-colors">
          {program.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-muted-foreground leading-relaxed">
          {program.description}
        </p>
      </CardContent>
    </Card>
  );
}
