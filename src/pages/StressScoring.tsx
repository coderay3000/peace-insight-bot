import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Activity, AlertCircle, CheckCircle, TrendingDown } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const StressScoring = () => {
  const currentScore = 45;
  const getStressLevel = (score: number) => {
    if (score < 25) return { level: "Low", color: "text-success", bg: "bg-success/10" };
    if (score < 50) return { level: "Medium", color: "text-warning", bg: "bg-warning/10" };
    if (score < 75) return { level: "High", color: "text-destructive", bg: "bg-destructive/10" };
    return { level: "Critical", color: "text-destructive", bg: "bg-destructive/20" };
  };

  const stress = getStressLevel(currentScore);

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-foreground">Stress Level Assessment</h2>
        <p className="text-muted-foreground mt-1">Real-time analysis of your mental state</p>
      </div>

      <Card className={`border-border ${stress.bg}`}>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-foreground">
            <Activity className={`w-5 h-5 ${stress.color}`} />
            Current Stress Level
          </CardTitle>
          <CardDescription>Based on your latest input</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-4xl font-bold text-foreground">{currentScore}%</span>
            <span className={`text-2xl font-semibold ${stress.color}`}>{stress.level}</span>
          </div>
          <Progress value={currentScore} className="h-4" />
        </CardContent>
      </Card>

      {stress.level === "Critical" && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Immediate Support Recommended</AlertTitle>
          <AlertDescription>
            Your stress level is critical. Please consider contacting a counselor immediately or use our emergency support feature.
          </AlertDescription>
        </Alert>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-border">
          <CardHeader>
            <CardTitle className="text-foreground">Contributing Factors</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {[
                { factor: "Work Pressure", impact: "High" },
                { factor: "Sleep Quality", impact: "Medium" },
                { factor: "Social Connections", impact: "Low" },
              ].map((item) => (
                <li key={item.factor} className="flex justify-between items-center p-3 rounded-lg bg-muted">
                  <span className="font-medium text-foreground">{item.factor}</span>
                  <span className="text-sm text-muted-foreground">{item.impact}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="border-border">
          <CardHeader>
            <CardTitle className="text-foreground">Weekly Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { day: "Mon", score: 35 },
                { day: "Tue", score: 42 },
                { day: "Wed", score: 38 },
                { day: "Thu", score: 45 },
                { day: "Fri", score: 40 },
              ].map((entry) => (
                <div key={entry.day} className="flex items-center gap-4">
                  <span className="w-12 font-medium text-foreground">{entry.day}</span>
                  <Progress value={entry.score} className="flex-1 h-2" />
                  <span className="w-12 text-sm text-muted-foreground">{entry.score}%</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="border-border bg-gradient-to-br from-accent/10 to-primary/10">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-foreground">
            <TrendingDown className="w-5 h-5 text-accent" />
            Recommended Actions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {[
              "Practice 10 minutes of mindful breathing",
              "Take a short walk in nature",
              "Connect with a friend or loved one",
              "Try our guided meditation session",
            ].map((action, index) => (
              <li key={index} className="flex items-start gap-2 text-foreground">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span>{action}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default StressScoring;
