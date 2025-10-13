import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MessageSquare, Mic, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Input = () => {
  const [text, setText] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const { toast } = useToast();

  const handleAnalyze = () => {
    if (!text.trim()) {
      toast({
        title: "Please enter some text",
        description: "Share your thoughts or feelings to get started.",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Analyzing your input...",
      description: "AI is processing your message to detect stress levels.",
    });
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    toast({
      title: isRecording ? "Recording stopped" : "Recording started",
      description: isRecording ? "Processing your voice..." : "Speak clearly about your feelings.",
    });
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-foreground">Share Your Feelings</h2>
        <p className="text-muted-foreground mt-1">Express yourself through text or voice</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-foreground">
              <MessageSquare className="w-5 h-5 text-primary" />
              Text Input
            </CardTitle>
            <CardDescription>Type how you're feeling today</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea
              placeholder="I'm feeling a bit overwhelmed today because..."
              className="min-h-[200px] resize-none"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <Button onClick={handleAnalyze} className="w-full bg-primary hover:bg-primary/90">
              <Send className="w-4 h-4 mr-2" />
              Analyze Text
            </Button>
          </CardContent>
        </Card>

        <Card className="border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-foreground">
              <Mic className="w-5 h-5 text-secondary" />
              Voice Input
            </CardTitle>
            <CardDescription>Record your voice for analysis</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col items-center justify-center min-h-[200px] bg-muted rounded-lg">
              <div className={`w-24 h-24 rounded-full flex items-center justify-center ${
                isRecording ? "bg-destructive animate-pulse" : "bg-secondary"
              }`}>
                <Mic className="w-12 h-12 text-white" />
              </div>
              <p className="mt-4 text-muted-foreground">
                {isRecording ? "Recording in progress..." : "Click to start recording"}
              </p>
            </div>
            <Button 
              onClick={toggleRecording} 
              className={`w-full ${isRecording ? "bg-destructive hover:bg-destructive/90" : "bg-secondary hover:bg-secondary/90"}`}
            >
              {isRecording ? "Stop Recording" : "Start Recording"}
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card className="border-border bg-gradient-to-br from-info/10 to-accent/10">
        <CardHeader>
          <CardTitle className="text-foreground">How It Works</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-foreground">
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">1.</span>
              <span>Share your thoughts through text or voice</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">2.</span>
              <span>AI analyzes your input for stress indicators</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">3.</span>
              <span>Receive personalized recommendations and support</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default Input;
