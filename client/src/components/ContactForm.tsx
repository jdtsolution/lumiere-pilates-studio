import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactMessageSchema, type InsertContactMessage } from "@shared/schema";
import { useSubmitContact } from "@/hooks/use-content";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Send } from "lucide-react";

export function ContactForm() {
  const { toast } = useToast();
  const mutation = useSubmitContact();

  const form = useForm<InsertContactMessage>({
    resolver: zodResolver(insertContactMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: InsertContactMessage) => {
    mutation.mutate(data, {
      onSuccess: () => {
        toast({
          title: "메시지가 전송되었습니다",
          description: "빠른 시일 내에 답변 드리겠습니다.",
        });
        form.reset();
      },
      onError: (error) => {
        toast({
          title: "오류",
          description: error.message,
          variant: "destructive",
        });
      },
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground/80">이름</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="홍길동" 
                    {...field} 
                    className="bg-white/50 border-gray-200 focus:border-primary focus:ring-primary/20 rounded-xl"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground/80">이메일</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="example@email.com" 
                    {...field} 
                    className="bg-white/50 border-gray-200 focus:border-primary focus:ring-primary/20 rounded-xl"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-foreground/80">문의 내용</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="궁금하신 점이나 목표에 대해 알려주세요..." 
                  className="min-h-[150px] bg-white/50 border-gray-200 focus:border-primary focus:ring-primary/20 rounded-xl resize-none"
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button 
          type="submit" 
          disabled={mutation.isPending}
          className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-6 rounded-xl transition-all shadow-lg shadow-primary/20 hover:shadow-primary/30"
        >
          {mutation.isPending ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              전송 중...
            </>
          ) : (
            <>
              메시지 보내기
              <Send className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>
      </form>
    </Form>
  );
}
