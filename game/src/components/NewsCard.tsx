import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface NewsCardProps {
  title: string;
  date: string;
  image?: string;
  content: string;
  comments: number;
}

export const NewsCard = ({ title, date, image, content, comments }: NewsCardProps) => {
  return (
    <Card className="bg-card/80 backdrop-blur-sm border-border hover:border-accent/50 transition-all duration-300 shadow-[var(--shadow-card)]">
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg text-accent">{title}</CardTitle>
          <Badge variant="outline" className="border-muted-foreground text-muted-foreground">
            {date}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {image && (
            <img 
              src={image} 
              alt={title} 
              className="w-32 h-32 object-cover rounded border-2 border-accent/30 float-left mr-4"
            />
          )}
          <p className="text-foreground text-sm leading-relaxed">{content}</p>
          <div className="flex justify-between items-center pt-2 clear-both">
            <a href="#" className="text-accent hover:text-accent/80 text-sm">
              [подробнее]
            </a>
            <span className="text-muted-foreground text-sm">
              [комментарии ({comments})]
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
