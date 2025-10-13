import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Bot, Send, User } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { role: "bot", content: "Hello! I'm here to support you. How are you feeling today?" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    
    setMessages([...messages, { role: "user", content: input }]);
    setInput("");
    
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: "bot", 
        content: "I understand you're going through a difficult time. Would you like to try some breathing exercises or talk more about what's troubling you?" 
      }]);
    }, 1000);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-foreground">AI Support Chatbot</h2>
        <p className="text-muted-foreground mt-1">24/7 emotional support and guidance</p>
      </div>

      <Card className="border-border h-[600px] flex flex-col">
        <CardHeader className="border-b border-border">
          <CardTitle className="flex items-center gap-2 text-foreground">
            <Bot className="w-5 h-5 text-primary" />
            MindCare Assistant
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-1 p-0 flex flex-col">
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex gap-3 ${message.role === "user" ? "flex-row-reverse" : ""}`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.role === "bot" ? "bg-primary/10" : "bg-secondary/10"
                  }`}>
                    {message.role === "bot" ? (
                      <Bot className="w-5 h-5 text-primary" />
                    ) : (
                      <User className="w-5 h-5 text-secondary" />
                    )}
                  </div>
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.role === "bot"
                        ? "bg-muted text-foreground"
                        : "bg-primary text-primary-foreground"
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
          
          <div className="p-4 border-t border-border">
            <div className="flex gap-2">
              <Input
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                className="flex-1"
              />
              <Button onClick={handleSend} className="bg-primary hover:bg-primary/90">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-border bg-gradient-to-br from-primary/10 to-accent/10">
        <CardHeader>
          <CardTitle className="text-foreground">How I Can Help</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-foreground">
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>Check your current mood and stress levels</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>Suggest personalized coping strategies</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>Guide you through meditation and breathing exercises</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>Answer mental health questions</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default Chatbot;
