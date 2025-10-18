import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const StatsPanel = () => {
  const stats = [
    { label: "Игроков за сегодня:", value: "1262" },
    { label: "Игроков онлайн:", value: "161" },
    { label: "Монстров онлайн:", value: "25186" },
    { label: "Текущих боев:", value: "18" },
    { label: "Игроков в боях:", value: "99" },
  ];

  return (
    <Card className="w-full max-w-sm bg-card/90 backdrop-blur-sm border-border shadow-[var(--shadow-card)]">
      <CardHeader>
        <CardTitle className="text-xl text-center text-foreground">Статистика игры</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {stats.map((stat, index) => (
          <div key={index}>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground text-sm">{stat.label}</span>
              <span className="text-accent font-bold text-lg">{stat.value}</span>
            </div>
            {index < stats.length - 1 && <Separator className="my-2" />}
          </div>
        ))}
        <div className="pt-4 text-center">
          <div className="text-xs text-muted-foreground mb-2">Социальные сети</div>
          <div className="flex justify-center space-x-3">
            <a href="#" className="text-accent hover:text-accent/80">Правила</a>
            <a href="#" className="text-accent hover:text-accent/80">ВК в Контакте</a>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
