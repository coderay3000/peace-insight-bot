import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Mic, Activity, Volume2, Zap } from "lucide-react";

const VoiceAnalysis = () => {
  const metrics = [
    { label: "Tone Analysis", value: 75, color: "bg-primary" },
    { label: "Pitch Variation", value: 60, color: "bg-secondary" },
    { label: "Speech Speed", value: 85, color: "bg-accent" },
    { label: "Voice Intensity", value: 70, color: "bg-info" },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-foreground">Voice Analysis</h2>
        <p className="text-muted-foreground mt-1">Deep insights from your voice patterns</p>
      </div>

      <Card className="border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-foreground">
            <Mic className="w-5 h-5 text-primary" />
            Latest Voice Recording
          </CardTitle>
          <CardDescription>Recorded 5 minutes ago</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-muted rounded-lg p-8 flex items-center justify-center">
            <div className="flex items-center gap-4">
              <Volume2 className="w-8 h-8 text-primary" />
              <div className="flex gap-1">
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    className="w-2 bg-primary rounded-full animate-pulse"
                    style={{ height: `${Math.random() * 40 + 10}px`, animationDelay: `${i * 0.1}s` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-foreground">
            <Activity className="w-5 h-5 text-secondary" />
            Voice Metrics
          </CardTitle>
          <CardDescription>Analysis of your vocal patterns</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {metrics.map((metric) => (
            <div key={metric.label} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-foreground">{metric.label}</span>
                <span className="text-sm text-muted-foreground">{metric.value}%</span>
              </div>
              <Progress value={metric.value} className="h-2" />
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="border-border bg-gradient-to-br from-primary/10 to-secondary/10">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-foreground">
            <Zap className="w-5 h-5 text-accent" />
            AI Insights
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-foreground">
            Your voice analysis indicates a moderate stress level. The slight elevation in pitch and faster speech rate suggest some anxiety. We recommend trying our breathing exercises or talking to our AI chatbot for support.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default VoiceAnalysis;
