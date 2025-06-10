import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const TestimonialsSection = () => {
  // Placeholder testimonials - will be replaced with real ones
  const placeholderTestimonials = [
    {
      text: "Здесь будут размещены отзывы ваших учеников",
      author: "Имя ученика",
      role: "Достижение",
      rating: 5,
    },
    {
      text: "Отзывы помогут новым студентам принять решение о записи на уроки",
      author: "Имя ученика",
      role: "Достижение",
      rating: 5,
    },
    {
      text: "Вы сможете добавить реальные отзывы позже",
      author: "Имя ученика",
      role: "Достижение",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 px-4 bg-soft-gray">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-text-primary mb-6">
            Отзывы учеников
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Что говорят студенты о занятиях
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {placeholderTestimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-white hover:shadow-lg transition-all hover:scale-105"
            >
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Icon
                      key={i}
                      name="Star"
                      size={16}
                      className="text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                <blockquote className="text-text-secondary mb-6 italic">
                  "{testimonial.text}"
                </blockquote>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-soft-purple rounded-full flex items-center justify-center">
                    <Icon
                      name="User"
                      size={20}
                      className="text-pastel-accent"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-text-primary text-sm">
                      {testimonial.author}
                    </div>
                    <div className="text-text-secondary text-xs">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full">
            <Icon name="Info" size={20} className="text-pastel-accent" />
            <span className="text-text-secondary">
              Раздел будет обновлён реальными отзывами учеников
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
