import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Trophy, Star, Award, Target, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Rewards = () => {
  const badges = [
    { name: "First Step", description: "Completed first mood log", icon: Star, earned: true },
    { name: "Mindful Week", description: "7 days of meditation", icon: Award, earned: true },
    { name: "Consistency Star", description: "14 day streak", icon: Zap, earned: false },
    { name: "Community Helper", description: "Supported 10 members", icon: Trophy, earned: false },
  ];

  const goals = [
    { name: "Daily Mood Logging", current: 5, target: 7, points: 50 },
    { name: "Meditation Sessions", current: 3, target: 5, points: 75 },
    { name: "Stress Relief Activities", current: 8, target: 10, points: 100 },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-foreground">Rewards & Progress</h2>
        <p className="text-muted-foreground mt-1">Track your achievements and stay motivated</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-border bg-gradient-to-br from-primary/10 to-primary/5">
          <CardHeader>
            <CardTitle className="text-foreground">Total Points</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold text-primary">850</p>
            <p className="text-sm text-muted-foreground mt-1">Level 8 Achiever</p>
          </CardContent>
        </Card>

        <Card className="border-border bg-gradient-to-br from-secondary/10 to-secondary/5">
          <CardHeader>
            <CardTitle className="text-foreground">Current Streak</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold text-secondary">12</p>
            <p className="text-sm text-muted-foreground mt-1">Days in a row</p>
          </CardContent>
        </Card>

        <Card className="border-border bg-gradient-to-br from-accent/10 to-accent/5">
          <CardHeader>
            <CardTitle className="text-foreground">Badges Earned</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold text-accent">2/4</p>
            <p className="text-sm text-muted-foreground mt-1">Keep going!</p>
          </CardContent>
        </Card>
      </div>

      <Card className="border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-foreground">
            <Trophy className="w-5 h-5 text-primary" />
            Your Badges
          </CardTitle>
          <CardDescription>Unlock achievements as you progress</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {badges.map((badge) => (
              <div
                key={badge.name}
                className={`p-4 rounded-lg border ${
                  badge.earned
                    ? "border-primary bg-primary/5"
                    : "border-border bg-muted opacity-60"
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    badge.earned ? "bg-primary/20" : "bg-muted-foreground/20"
                  }`}>
                    <badge.icon className={`w-6 h-6 ${
                      badge.earned ? "text-primary" : "text-muted-foreground"
                    }`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-foreground">{badge.name}</h3>
                      {badge.earned && (
                        <Badge variant="secondary" className="bg-success text-white">Earned</Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{badge.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-foreground">
            <Target className="w-5 h-5 text-secondary" />
            Weekly Goals
          </CardTitle>
          <CardDescription>Complete goals to earn points</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {goals.map((goal) => (
            <div key={goal.name} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-medium text-foreground">{goal.name}</span>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">
                    {goal.current}/{goal.target}
                  </span>
                  <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                    +{goal.points} pts
                  </Badge>
                </div>
              </div>
              <Progress value={(goal.current / goal.target) * 100} className="h-2" />
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="border-border bg-gradient-to-br from-accent/10 to-primary/10">
        <CardHeader>
          <CardTitle className="text-foreground">Keep It Up!</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-foreground">
            You're making excellent progress! Complete 2 more meditation sessions this week to unlock the "Mindful Master" badge and earn 150 bonus points.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Rewards;
