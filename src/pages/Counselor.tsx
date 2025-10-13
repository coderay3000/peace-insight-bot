import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, MessageCircle, Clock, Star, AlertCircle } from "lucide-react";

const Counselor = () => {
  const counselors = [
    { name: "Dr. Sarah Johnson", specialty: "Anxiety & Depression", distance: "0.5 km", rating: 4.9, available: true },
    { name: "Dr. Michael Chen", specialty: "Stress Management", distance: "1.2 km", rating: 4.8, available: true },
    { name: "Dr. Emily Rodriguez", specialty: "Trauma Therapy", distance: "2.3 km", rating: 4.7, available: false },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-foreground">Find a Counselor</h2>
        <p className="text-muted-foreground mt-1">Connect with certified mental health professionals near you</p>
      </div>

      <Card className="border-border bg-gradient-to-br from-destructive/10 to-warning/10">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-foreground">
            <AlertCircle className="w-5 h-5 text-destructive" />
            Emergency Support
          </CardTitle>
        </CardHeader>
        <CardContent className="flex gap-4">
          <Button className="flex-1 bg-destructive hover:bg-destructive/90">
            <Phone className="w-4 h-4 mr-2" />
            Call Crisis Helpline
          </Button>
          <Button variant="outline" className="flex-1">
            <MessageCircle className="w-4 h-4 mr-2" />
            Chat Now
          </Button>
        </CardContent>
      </Card>

      <Card className="border-border">
        <CardHeader>
          <CardTitle className="text-foreground">Nearby Counselors</CardTitle>
          <CardDescription>Based on your location</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {counselors.map((counselor) => (
              <Card key={counselor.name} className="border-border">
                <CardContent className="pt-6">
                  <div className="flex justify-between items-start">
                    <div className="space-y-1">
                      <h3 className="font-semibold text-lg text-foreground">{counselor.name}</h3>
                      <p className="text-sm text-muted-foreground">{counselor.specialty}</p>
                      <div className="flex items-center gap-4 mt-2">
                        <span className="flex items-center gap-1 text-sm text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          {counselor.distance}
                        </span>
                        <span className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Star className="w-4 h-4 fill-warning text-warning" />
                          {counselor.rating}
                        </span>
                        <span className="flex items-center gap-1 text-sm">
                          <Clock className="w-4 h-4" />
                          <span className={counselor.available ? "text-success" : "text-muted-foreground"}>
                            {counselor.available ? "Available Now" : "Unavailable"}
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="icon">
                        <Phone className="w-4 h-4" />
                      </Button>
                      <Button className="bg-primary hover:bg-primary/90">Book Session</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-border">
        <CardHeader>
          <CardTitle className="text-foreground">Map View</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-muted rounded-lg h-64 flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              <MapPin className="w-12 h-12 mx-auto mb-2" />
              <p>Interactive map showing nearby counselors</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Counselor;
