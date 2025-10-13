import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, Check } from "lucide-react";

const Language = () => {
  const languages = [
    { code: "en", name: "English", nativeName: "English", active: true },
    { code: "es", name: "Spanish", nativeName: "Español", active: false },
    { code: "fr", name: "French", nativeName: "Français", active: false },
    { code: "de", name: "German", nativeName: "Deutsch", active: false },
    { code: "zh", name: "Chinese", nativeName: "中文", active: false },
    { code: "ja", name: "Japanese", nativeName: "日本語", active: false },
    { code: "ar", name: "Arabic", nativeName: "العربية", active: false },
    { code: "hi", name: "Hindi", nativeName: "हिन्दी", active: false },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-foreground">Language Settings</h2>
        <p className="text-muted-foreground mt-1">Choose your preferred language for the platform</p>
      </div>

      <Card className="border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-foreground">
            <Globe className="w-5 h-5 text-primary" />
            Available Languages
          </CardTitle>
          <CardDescription>Select a language to change the interface</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {languages.map((language) => (
              <div
                key={language.code}
                className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                  language.active
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-primary/50"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-foreground">{language.name}</h3>
                    <p className="text-sm text-muted-foreground">{language.nativeName}</p>
                  </div>
                  {language.active && (
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                      <Check className="w-4 h-4 text-primary-foreground" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-border bg-gradient-to-br from-primary/10 to-accent/10">
        <CardHeader>
          <CardTitle className="text-foreground">Language Support Features</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-foreground">
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>Full interface translation in your selected language</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>AI chatbot responds in your preferred language</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>Community posts translated automatically</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>Reports and insights available in your language</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card className="border-border">
        <CardHeader>
          <CardTitle className="text-foreground">Regional Settings</CardTitle>
          <CardDescription>Customize your experience based on location</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <h4 className="font-medium text-foreground">Time Zone</h4>
            <p className="text-sm text-muted-foreground">GMT+0 (Coordinated Universal Time)</p>
          </div>
          <div className="space-y-2">
            <h4 className="font-medium text-foreground">Date Format</h4>
            <p className="text-sm text-muted-foreground">MM/DD/YYYY</p>
          </div>
          <Button variant="outline">Adjust Regional Settings</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Language;
