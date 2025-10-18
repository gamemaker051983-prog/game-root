import { Header } from "@/components/Header";
import { LoginPanel } from "@/components/LoginPanel";
import { StatsPanel } from "@/components/StatsPanel";
import { NewsCard } from "@/components/NewsCard";
import { Button } from "@/components/ui/button";
import heroWarrior from "@/assets/hero-warrior.jpg";
import eventTreasure from "@/assets/event-treasure.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center pt-24 pb-12 px-4"
        style={{
          backgroundImage: `linear-gradient(rgba(33, 8, 66, 0.7), rgba(33, 8, 66, 0.85)), url(${heroWarrior})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="container mx-auto grid lg:grid-cols-3 gap-8 items-start">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="text-center lg:text-left space-y-4 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground" style={{ textShadow: 'var(--shadow-glow)' }}>
                ММОРPG CARNAGE
              </h1>
              <h2 className="text-2xl md:text-3xl text-accent">
                бесплатная ролевая онлайн игра
              </h2>
              <p className="text-lg text-foreground max-w-3xl mx-auto lg:mx-0">
                Carnage — это необъятный мир средневековых страстей, воплощенный в MMORPG. 
                Он не похож на другие бродилки — не только продуманностью процессов, игры. 
                Сердце онлайн игры "Carnage" бьется в тысячах войнах, в которых сражаются тысячи игроков.
              </p>
              <Button 
                size="lg" 
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-xl px-8 py-6"
                style={{ boxShadow: 'var(--shadow-gold)' }}
              >
                НАЧАТЬ ИГРУ!
              </Button>
            </div>

            {/* Event Banner */}
            <div className="bg-destructive/20 border-2 border-destructive rounded-lg p-4 text-center">
              <p className="text-destructive font-bold text-lg">
                13.10.2025 00:00 - 16.10.2025 00:00: Голосование на должность Консула Хаоса
              </p>
            </div>

            {/* News Section */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground flex items-center">
                <span className="text-secondary mr-2">📰</span>
                ПОСЛЕДНИЕ НОВОСТИ ИГРЫ:
              </h3>
              
              <NewsCard
                title="Эпическая АКЦИЯ на сестерции!"
                date="13.10.2025 13:18"
                image={eventTreasure}
                content="Мастера-реконструкторы, совместно с Главами четырех городов, ради представить вашему вниманию самую эпическую акцию на сестерции из всех, что видел Carnage! Следующие 2 недели вас ждут - драгоценные кубки и сестерции, героев за завивания гильд городов, бесплатная сестерниевая клятвенная реакция с новым."
                comments={21}
              />

              <NewsCard
                title="Сумасшедшие голосящие кличики и Костры рябин!"
                date="12.10.2025 14:32"
                content="Сентябрь объявляется месяцем голосящих кличиков, сумасшедших дней и костров рябин! Храпья-Боксы, Знаки Сентября, торги на Черной рыбке, опасные харизматики, уперченный опыт, ежедневный Рейтинг, возврат на Черной рыбке и многое другое!"
                comments={22}
              />
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <LoginPanel />
            <StatsPanel />
            
            <div className="bg-card/80 backdrop-blur-sm border border-border rounded-lg p-6 shadow-[var(--shadow-card)]">
              <h3 className="text-lg font-bold text-foreground mb-3">А знаете ли вы, что:</h3>
              <p className="text-sm text-muted-foreground italic">
                — под невинничество вы можете заходить в любую локацию, даже не подходя по скоромости.
              </p>
            </div>

            <div className="bg-card/80 backdrop-blur-sm border border-border rounded-lg p-6 shadow-[var(--shadow-card)]">
              <h3 className="text-lg font-bold text-foreground mb-3">Рейтинг игры</h3>
              <ul className="text-sm text-foreground space-y-2">
                <li>• Гильдии и кланы</li>
                <li>• Лидеры рефералльной программы</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
