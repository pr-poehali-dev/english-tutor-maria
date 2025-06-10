import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const ContactSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-soft-purple via-soft-blue to-soft-gray">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-white mb-6">
            Готовы начать обучение?
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Запишитесь на первый урок и начните говорить на английском уже
            сегодня
          </p>
        </div>

        <Card className="bg-white/10 backdrop-blur-sm border-white/20 mb-12">
          <CardContent className="p-8">
            <div className="flex flex-col items-center gap-6">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <Icon name="MessageCircle" size={32} className="text-white" />
              </div>

              <div className="text-center">
                <h3 className="font-montserrat font-bold text-2xl text-white mb-2">
                  Свяжитесь со мной в Telegram
                </h3>
                <p className="text-white/80 mb-6">
                  Обсудим ваши цели, подберём подходящую программу и назначим
                  первый урок
                </p>

                <Button
                  size="lg"
                  className="bg-white text-pastel-accent hover:bg-white/90 px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105"
                  onClick={() => window.open("https://t.me/mvriedon", "_blank")}
                >
                  <Icon name="Send" size={20} className="mr-3" />
                  Написать в Telegram
                </Button>

                <p className="text-white/70 text-sm mt-4">@mvriedon</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="text-white/80">
            <Icon name="Clock" size={24} className="mx-auto mb-2" />
            <div className="font-semibold mb-1">Быстрый ответ</div>
            <div className="text-sm">Отвечаю в течение нескольких часов</div>
          </div>

          <div className="text-white/80">
            <Icon name="Calendar" size={24} className="mx-auto mb-2" />
            <div className="font-semibold mb-1">Гибкое расписание</div>
            <div className="text-sm">Подберём удобное время для уроков</div>
          </div>

          <div className="text-white/80">
            <Icon name="Heart" size={24} className="mx-auto mb-2" />
            <div className="font-semibold mb-1">Индивидуальный подход</div>
            <div className="text-sm">
              Программа создаётся специально для вас
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
