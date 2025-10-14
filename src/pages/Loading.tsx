import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "@/assets/logo.jpg";

const Loading = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/auth");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20">
      <div className="animate-fade-in">
        <img 
          src={logo} 
          alt="Mind Connect" 
          className="w-64 h-64 object-contain mb-8 animate-pulse"
        />
        <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Mind Connect
        </h1>
        <p className="text-center text-muted-foreground mt-4 text-lg">
          Your AI-Powered Mental Wellness Companion
        </p>
        <div className="flex justify-center mt-8">
          <div className="flex gap-2">
            <div className="w-3 h-3 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
            <div className="w-3 h-3 bg-secondary rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
            <div className="w-3 h-3 bg-accent rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
