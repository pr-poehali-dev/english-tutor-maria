import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Анна К.",
      level: "B2 → C1",
      text: "Marie помогла мне подготовиться к переезду в США. Теперь я свободно общаюсь с коллегами и чувствую себя уверенно в англоязычной среде.",
      rating: 5,
    },
    {
      name: "Дмитрий М.",
      level: "A2 → B2",
      text: "Благодаря урокам с Marie я получил повышение на работе. Её методика действительно работает - теперь могу проводить презентации на английском!",
      rating: 5,
    },
    {
      name: "Елена В.",
      level: "B1 → B2+",
      text: "Очень нравится индивидуальный подход. Marie всегда подбирает материалы по моим интересам. Уроки проходят легко и интересно.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-soft-gray to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-text-primary mb-6">
            Отзывы учеников
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Реальные истории успеха людей, которые достигли своих целей в
            изучении английского
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-white hover:shadow-lg transition-all hover:scale-105"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Icon
                      key={i}
                      name="Star"
                      size={16}
                      className="text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                <p className="text-text-secondary mb-4 leading-relaxed">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-montserrat font-semibold text-text-primary">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-text-secondary">
                      Прогресс: {testimonial.level}
                    </div>
                  </div>
                  <div className="w-10 h-10 bg-soft-purple rounded-full flex items-center justify-center">
                    <Icon
                      name="User"
                      size={20}
                      className="text-pastel-accent"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-text-secondary mb-4">
            Хотите поделиться своим успехом?
          </p>
          <div className="inline-flex items-center gap-2 text-pastel-accent font-medium">
            <Icon name="MessageCircle" size={20} />
            <span>Напишите мне в Telegram</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
