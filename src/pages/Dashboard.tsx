import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Activity, MessageSquare, Calendar, TrendingUp, Heart, Users } from "lucide-react";

const Dashboard = () => {
  const stats = [
    { title: "Current Mood", value: "Good", icon: Heart, color: "text-accent" },
    { title: "Stress Level", value: "Low", icon: Activity, color: "text-success" },
    { title: "Days Tracked", value: "12", icon: Calendar, color: "text-primary" },
    { title: "Community Posts", value: "5", icon: Users, color: "text-secondary" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-foreground">Welcome Back!</h2>
          <p className="text-muted-foreground mt-1">How are you feeling today?</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          <MessageSquare className="w-4 h-4 mr-2" />
          Quick Check-in
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <Card key={stat.title} className="border-border">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <stat.icon className={`w-4 h-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border-border">
          <CardHeader>
            <CardTitle className="text-foreground">Recent Activity</CardTitle>
            <CardDescription>Your mental wellness journey this week</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { day: "Monday", mood: "Happy", stress: "Low" },
                { day: "Tuesday", mood: "Calm", stress: "Medium" },
                { day: "Wednesday", mood: "Energetic", stress: "Low" },
              ].map((entry) => (
                <div key={entry.day} className="flex justify-between items-center p-3 rounded-lg bg-muted">
                  <span className="font-medium text-foreground">{entry.day}</span>
                  <div className="flex gap-4">
                    <span className="text-sm text-muted-foreground">Mood: {entry.mood}</span>
                    <span className="text-sm text-muted-foreground">Stress: {entry.stress}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-border">
          <CardHeader>
            <CardTitle className="text-foreground">Recommended Activities</CardTitle>
            <CardDescription>Personalized suggestions for you</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { activity: "5-Minute Breathing Exercise", time: "5 min" },
                { activity: "Gentle Yoga Session", time: "15 min" },
                { activity: "Guided Meditation", time: "10 min" },
              ].map((item) => (
                <div key={item.activity} className="flex justify-between items-center p-3 rounded-lg bg-muted hover:bg-muted/80 cursor-pointer transition-colors">
                  <span className="font-medium text-foreground">{item.activity}</span>
                  <span className="text-sm text-muted-foreground">{item.time}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="border-border bg-gradient-to-br from-primary/10 to-secondary/10">
        <CardHeader>
          <CardTitle className="text-foreground flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-primary" />
            Your Progress
          </CardTitle>
          <CardDescription>You're doing great! Keep it up!</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-foreground">
            You've completed 85% of your wellness goals this week. Your consistent effort is making a real difference in your mental health journey.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
