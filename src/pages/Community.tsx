import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Users, Heart, MessageCircle, ThumbsUp } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const Community = () => {
  const posts = [
    {
      author: "Anonymous User",
      initials: "AU",
      content: "Today was a good day. I practiced meditation for the first time and it really helped calm my anxiety. Thank you all for the support!",
      likes: 24,
      comments: 8,
      time: "2 hours ago",
    },
    {
      author: "Wellness Seeker",
      initials: "WS",
      content: "Struggling a bit today, but I know tomorrow is a new day. Grateful for this supportive community.",
      likes: 31,
      comments: 12,
      time: "5 hours ago",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-foreground">Community Support</h2>
        <p className="text-muted-foreground mt-1">Share experiences and support each other</p>
      </div>

      <Card className="border-border">
        <CardHeader>
          <CardTitle className="text-foreground">Share Your Thoughts</CardTitle>
          <CardDescription>Post anonymously to the community</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Textarea
            placeholder="How are you feeling today? Share your thoughts with the community..."
            className="min-h-[100px]"
          />
          <Button className="bg-primary hover:bg-primary/90">
            <Users className="w-4 h-4 mr-2" />
            Post Anonymously
          </Button>
        </CardContent>
      </Card>

      <div className="space-y-4">
        {posts.map((post, index) => (
          <Card key={index} className="border-border">
            <CardHeader>
              <div className="flex items-start gap-3">
                <Avatar>
                  <AvatarFallback className="bg-primary/10 text-primary">{post.initials}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <p className="font-semibold text-foreground">{post.author}</p>
                  <p className="text-sm text-muted-foreground">{post.time}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-foreground">{post.content}</p>
              <div className="flex gap-4 pt-2 border-t border-border">
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                  <ThumbsUp className="w-4 h-4 mr-2" />
                  {post.likes}
                </Button>
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  {post.comments}
                </Button>
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-accent">
                  <Heart className="w-4 h-4 mr-2" />
                  Support
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="border-border bg-gradient-to-br from-accent/10 to-primary/10">
        <CardHeader>
          <CardTitle className="text-foreground">Community Guidelines</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-foreground">
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>Be kind and supportive to all members</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>Respect everyone's privacy and anonymity</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>Share experiences, not medical advice</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>Report inappropriate content</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default Community;
