import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, TrendingUp, Smile, Frown, Meh } from "lucide-react";

const Tracker = () => {
  const moods = [
    { date: "Mon", mood: "Happy", icon: Smile, color: "text-success" },
    { date: "Tue", mood: "Calm", icon: Meh, color: "text-info" },
    { date: "Wed", mood: "Stressed", icon: Frown, color: "text-warning" },
    { date: "Thu", mood: "Happy", icon: Smile, color: "text-success" },
    { date: "Fri", mood: "Energetic", icon: Smile, color: "text-success" },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-foreground">Daily Mood Tracker</h2>
          <p className="text-muted-foreground mt-1">Track your emotional journey</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          <Calendar className="w-4 h-4 mr-2" />
          Log Today's Mood
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {moods.map((day) => (
          <Card key={day.date} className="border-border">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm text-muted-foreground">{day.date}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center gap-2">
                <day.icon className={`w-12 h-12 ${day.color}`} />
                <p className="text-sm font-medium text-foreground">{day.mood}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-foreground">
            <TrendingUp className="w-5 h-5 text-primary" />
            Monthly Overview
          </CardTitle>
          <CardDescription>Your emotional patterns this month</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              <TrendingUp className="w-12 h-12 mx-auto mb-2" />
              <p>Interactive chart showing mood trends</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-border bg-gradient-to-br from-success/10 to-success/5">
          <CardHeader>
            <CardTitle className="text-foreground">Good Days</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold text-success">18</p>
            <p className="text-sm text-muted-foreground mt-1">This month</p>
          </CardContent>
        </Card>

        <Card className="border-border bg-gradient-to-br from-warning/10 to-warning/5">
          <CardHeader>
            <CardTitle className="text-foreground">Neutral Days</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold text-warning">8</p>
            <p className="text-sm text-muted-foreground mt-1">This month</p>
          </CardContent>
        </Card>

        <Card className="border-border bg-gradient-to-br from-destructive/10 to-destructive/5">
          <CardHeader>
            <CardTitle className="text-foreground">Challenging Days</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold text-destructive">4</p>
            <p className="text-sm text-muted-foreground mt-1">This month</p>
          </CardContent>
        </Card>
      </div>

      <Card className="border-border">
        <CardHeader>
          <CardTitle className="text-foreground">Mood Insights</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-foreground">
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>Your mood tends to be better on weekdays</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>Morning meditation correlates with improved daily mood</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>Stress levels decrease after yoga sessions</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default Tracker;
