import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const ContactSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-soft-purple via-soft-blue to-soft-gray">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-black mb-6">
            Готовы начать обучение?
          </h2>
          <p className="text-xl text-black/80 max-w-3xl mx-auto">
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
                <h3 className="font-montserrat font-bold text-2xl text-black mb-2">
                  Свяжитесь со мной в Telegram
                </h3>
                <p className="text-black/70 mb-6">
                  Обсудим ваши цели, подберём подходящую программу и назначим
                  первый урок
                </p>

                <div className="bg-white/20 rounded-xl p-6 mb-4">
                  <div className="text-3xl font-bold text-black mb-2">
                    Пробный урок — 1000 ₽
                  </div>
                  <div className="text-black/70">
                    Познакомимся, определим ваш уровень и составим план обучения
                  </div>
                </div>

                <p className="text-black text-2xl font-semibold">
                  @marie_english_tutor
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="text-black/80">
            <Icon name="Clock" size={24} className="mx-auto mb-2 text-black" />
            <div className="font-semibold mb-1">Быстрый ответ</div>
            <div className="text-sm">Отвечаю в течение нескольких часов</div>
          </div>

          <div className="text-black/80">
            <Icon
              name="Calendar"
              size={24}
              className="mx-auto mb-2 text-black"
            />
            <div className="font-semibold mb-1">Гибкое расписание</div>
            <div className="text-sm">Подберём удобное время для уроков</div>
          </div>

          <div className="text-black/80">
            <Icon name="Heart" size={24} className="mx-auto mb-2 text-black" />
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
