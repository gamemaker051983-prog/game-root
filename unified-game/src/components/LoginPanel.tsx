import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

export const LoginPanel = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt:", { username, password });
  };

  return (
    <Card className="w-full max-w-sm bg-card/90 backdrop-blur-sm border-border shadow-[var(--shadow-card)]">
      <CardHeader>
        <CardTitle className="text-2xl text-center text-foreground">Вход в игру:</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="username" className="text-foreground">Имя:</Label>
            <Input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="bg-input border-border text-foreground"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password" className="text-foreground">Пароль:</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-input border-border text-foreground"
              required
            />
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="remember" />
            <label htmlFor="remember" className="text-sm text-muted-foreground">
              Открыть в новом окне
            </label>
          </div>
          <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
            Войти
          </Button>
          <div className="space-y-2 text-center text-sm">
            <a href="#" className="text-accent hover:text-accent/80 block">
              Забыли свой пароль?
            </a>
            <a href="#" className="text-accent hover:text-accent/80 block font-bold">
              Регистрация
            </a>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};
