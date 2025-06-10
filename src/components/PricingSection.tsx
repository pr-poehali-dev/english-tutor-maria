import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const PricingSection = () => {
  const pricingPlans = [
    {
      title: "Общий английский",
      price: "2 000",
      duration: "55 мин",
      description: "Базовый курс для повседневного общения",
      features: [
        "Грамматика и лексика",
        "Разговорная практика",
        "Аутентичные материалы",
        "Домашние задания",
      ],
      popular: false,
    },
    {
      title: "Английский для путешествий",
      price: "2 200",
      duration: "55 мин",
      description: "Подготовка к поездкам и релокации",
      features: [
        "Практические ситуации",
        "Специальная лексика",
        "Культурные особенности",
        "Постановка произношения",
      ],
      popular: true,
    },
    {
      title: "Бизнес-английский",
      price: "от 2 500",
      duration: "55 мин",
      description: "Профессиональный английский для карьеры",
      features: [
        "Деловая переписка",
        "Презентации",
        "Переговоры",
        "Отраслевая лексика",
      ],
      popular: false,
    },
  ];

  return (
    <section className="py-20 px-4 bg-soft-gray">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-text-primary mb-6">
            Тарифы
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8">
            Выберите подходящий формат обучения. Все уроки проходят
            индивидуально
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className={`relative transition-all hover:scale-105 hover:shadow-lg border border-gray-200`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-pastel-accent text-white px-4 py-1 rounded-full text-sm font-medium">
                    Популярный
                  </span>
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <CardTitle className="font-montserrat text-xl text-text-primary mb-2">
                  {plan.title}
                </CardTitle>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-text-primary">
                    {plan.price}
                  </span>
                  <span className="text-text-secondary ml-2">
                    руб / {plan.duration}
                  </span>
                </div>
                <p className="text-text-secondary text-sm">
                  {plan.description}
                </p>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Icon
                        name="Check"
                        size={16}
                        className="text-green-500 flex-shrink-0"
                      />
                      <span className="text-text-secondary text-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${
                    plan.popular
                      ? "bg-pastel-accent hover:bg-pastel-accent/80 text-white"
                      : "bg-white border border-pastel-accent text-pastel-accent hover:bg-pastel-accent hover:text-white"
                  } transition-all`}
                  onClick={() => window.open("https://t.me/mvriedon", "_blank")}
                >
                  <Icon name="MessageCircle" size={16} className="mr-2" />
                  Записаться
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Schedule section */}
        <div className="bg-white rounded-2xl p-8 text-center">
          <h3 className="font-montserrat font-semibold text-2xl text-text-primary mb-4">
            Расписание
          </h3>
          <p className="text-text-secondary mb-6">
            Занятия проходят в удобное для вас время
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-6">
            {["Понедельник", "Вторник", "Четверг", "Пятница"].map((day) => (
              <div key={day} className="bg-soft-purple px-4 py-2 rounded-lg">
                <span className="text-pastel-accent font-medium text-sm">
                  {day}
                </span>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-2 text-text-secondary">
            <Icon name="Clock" size={20} />
            <span>10:00 — 16:30</span>
          </div>

          <p className="text-sm text-text-secondary mt-4">
            Слоты можно выбирать разные каждую неделю
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
