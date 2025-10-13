import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Heart, Moon, Apple, Activity } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const Health = () => {
  const healthMetrics = [
    { name: "Sleep Quality", value: 75, icon: Moon, color: "text-primary" },
    { name: "Nutrition Score", value: 60, icon: Apple, color: "text-accent" },
    { name: "Physical Activity", value: 80, icon: Activity, color: "text-secondary" },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-foreground">Health Integration</h2>
        <p className="text-muted-foreground mt-1">Track lifestyle factors affecting your mental health</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {healthMetrics.map((metric) => (
          <Card key={metric.name} className="border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <metric.icon className={`w-5 h-5 ${metric.color}`} />
                {metric.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="text-3xl font-bold text-foreground">{metric.value}%</div>
              <Progress value={metric.value} className="h-2" />
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="border-border">
        <CardHeader>
          <CardTitle className="text-foreground">Daily Health Log</CardTitle>
          <CardDescription>Track your daily wellness metrics</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="sleep">Sleep Hours</Label>
                <Input id="sleep" type="number" placeholder="8" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="water">Water Intake (glasses)</Label>
                <Input id="water" type="number" placeholder="8" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="exercise">Exercise (minutes)</Label>
                <Input id="exercise" type="number" placeholder="30" />
              </div>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="meals">Healthy Meals</Label>
                <Input id="meals" type="number" placeholder="3" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="screen">Screen Time (hours)</Label>
                <Input id="screen" type="number" placeholder="6" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="social">Social Interactions</Label>
                <Input id="social" type="number" placeholder="5" />
              </div>
            </div>
          </div>
          <Button className="w-full mt-6 bg-primary hover:bg-primary/90">
            Save Today's Log
          </Button>
        </CardContent>
      </Card>

      <Card className="border-border">
        <CardHeader>
          <CardTitle className="text-foreground">Health Insights</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                title: "Sleep Pattern",
                insight: "Your sleep quality has improved by 15% this week. Consistent bedtime is helping!",
                icon: Moon,
              },
              {
                title: "Nutrition Impact",
                insight: "Days with balanced meals show 30% lower stress levels.",
                icon: Apple,
              },
              {
                title: "Exercise Correlation",
                insight: "Regular exercise is strongly correlated with better mood scores.",
                icon: Activity,
              },
            ].map((item) => (
              <div key={item.title} className="p-4 rounded-lg bg-muted">
                <div className="flex items-start gap-3">
                  <item.icon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground">{item.title}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{item.insight}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-border bg-gradient-to-br from-primary/10 to-accent/10">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-foreground">
            <Heart className="w-5 h-5 text-accent" />
            Personalized Recommendations
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-foreground">
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>Aim for 7-8 hours of sleep to improve stress management</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>Include more omega-3 rich foods to support mental health</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>Add 15 minutes of morning exercise to boost your mood</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default Health;
