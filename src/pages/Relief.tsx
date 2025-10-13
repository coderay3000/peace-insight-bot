import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, Play, Music, Wind, Heart } from "lucide-react";

const Relief = () => {
  const activities = [
    {
      title: "Guided Breathing",
      description: "5-minute calming exercise",
      icon: Wind,
      duration: "5 min",
      color: "bg-primary/10",
    },
    {
      title: "Gentle Yoga",
      description: "Stress-relief poses",
      icon: Sparkles,
      duration: "15 min",
      color: "bg-secondary/10",
    },
    {
      title: "Meditation Session",
      description: "Mindfulness practice",
      icon: Heart,
      duration: "10 min",
      color: "bg-accent/10",
    },
    {
      title: "Relaxing Music",
      description: "Soothing soundscapes",
      icon: Music,
      duration: "20 min",
      color: "bg-info/10",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-foreground">Stress Relief Techniques</h2>
        <p className="text-muted-foreground mt-1">Personalized activities to help you relax</p>
      </div>

      <Card className="border-border bg-gradient-to-br from-primary/10 to-accent/10">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-foreground">
            <Sparkles className="w-5 h-5 text-primary" />
            Recommended for You
          </CardTitle>
          <CardDescription>Based on your current stress level</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4 p-4 bg-card rounded-lg">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
              <Wind className="w-8 h-8 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-lg text-foreground">Box Breathing Exercise</h3>
              <p className="text-sm text-muted-foreground">Perfect for reducing anxiety quickly</p>
            </div>
            <Button className="bg-primary hover:bg-primary/90">
              <Play className="w-4 h-4 mr-2" />
              Start Now
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {activities.map((activity) => (
          <Card key={activity.title} className={`border-border ${activity.color}`}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-foreground flex items-center gap-2">
                    <activity.icon className="w-5 h-5" />
                    {activity.title}
                  </CardTitle>
                  <CardDescription>{activity.description}</CardDescription>
                </div>
                <span className="text-sm text-muted-foreground">{activity.duration}</span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="bg-card rounded-lg p-4 h-32 flex items-center justify-center">
                  <Play className="w-12 h-12 text-muted-foreground" />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Begin Session
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="border-border">
        <CardHeader>
          <CardTitle className="text-foreground">Your Recent Sessions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { activity: "Morning Meditation", time: "Today, 8:00 AM", duration: "10 min" },
              { activity: "Breathing Exercise", time: "Yesterday, 7:30 PM", duration: "5 min" },
              { activity: "Yoga Session", time: "2 days ago", duration: "15 min" },
            ].map((session) => (
              <div key={session.activity} className="flex justify-between items-center p-3 rounded-lg bg-muted">
                <div>
                  <p className="font-medium text-foreground">{session.activity}</p>
                  <p className="text-sm text-muted-foreground">{session.time}</p>
                </div>
                <span className="text-sm text-muted-foreground">{session.duration}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Relief;
