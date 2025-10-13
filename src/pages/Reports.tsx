import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, TrendingUp, Calendar, AlertCircle } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const Reports = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-foreground">Reports & Insights</h2>
          <p className="text-muted-foreground mt-1">Comprehensive analysis of your mental health journey</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          <Download className="w-4 h-4 mr-2" />
          Download Report
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-border">
          <CardHeader>
            <CardTitle className="text-foreground">Weekly Summary</CardTitle>
            <CardDescription>Last 7 days overview</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Average Stress Level</span>
                  <span className="font-semibold text-foreground">42%</span>
                </div>
                <Progress value={42} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Mood Positivity</span>
                  <span className="font-semibold text-foreground">78%</span>
                </div>
                <Progress value={78} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Activity Completion</span>
                  <span className="font-semibold text-foreground">85%</span>
                </div>
                <Progress value={85} className="h-2" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border">
          <CardHeader>
            <CardTitle className="text-foreground">Monthly Trends</CardTitle>
            <CardDescription>Last 30 days analysis</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-48 bg-muted rounded-lg flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <TrendingUp className="w-12 h-12 mx-auto mb-2" />
                <p>Interactive trend chart</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-foreground">
            <FileText className="w-5 h-5 text-primary" />
            Key Insights
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                title: "Stress Triggers Identified",
                description: "Work deadlines and lack of sleep are your primary stress triggers",
                icon: AlertCircle,
                color: "text-destructive",
              },
              {
                title: "Positive Patterns",
                description: "Meditation sessions consistently improve your mood by 25%",
                icon: TrendingUp,
                color: "text-success",
              },
              {
                title: "Recommended Adjustments",
                description: "Evening yoga could help reduce stress before bedtime",
                icon: Calendar,
                color: "text-primary",
              },
            ].map((insight) => (
              <div key={insight.title} className="p-4 rounded-lg bg-muted">
                <div className="flex items-start gap-3">
                  <insight.icon className={`w-5 h-5 ${insight.color} flex-shrink-0 mt-0.5`} />
                  <div>
                    <h4 className="font-semibold text-foreground">{insight.title}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{insight.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-border">
        <CardHeader>
          <CardTitle className="text-foreground">Activity Breakdown</CardTitle>
          <CardDescription>How you spent your wellness time this month</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { activity: "Meditation", percentage: 35, hours: 14 },
              { activity: "Breathing Exercises", percentage: 25, hours: 10 },
              { activity: "Yoga", percentage: 20, hours: 8 },
              { activity: "Community Support", percentage: 15, hours: 6 },
              { activity: "Other Activities", percentage: 5, hours: 2 },
            ].map((item) => (
              <div key={item.activity} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-foreground">{item.activity}</span>
                  <span className="text-sm text-muted-foreground">{item.hours}h ({item.percentage}%)</span>
                </div>
                <Progress value={item.percentage} className="h-2" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-border bg-gradient-to-br from-primary/10 to-secondary/10">
        <CardHeader>
          <CardTitle className="text-foreground">Progress Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-foreground">
            Over the past month, you've made significant progress in managing your mental health. Your stress levels have decreased by 18%, and your engagement with wellness activities has increased by 35%. Keep up the excellent work!
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Reports;
