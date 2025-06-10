import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const LessonsSection = () => {
  // Placeholder lesson examples - will be replaced with real ones
  const placeholderLessons = [
    {
      title: "Пример урока 1",
      description:
        "Здесь будет описание конкретного урока с используемыми материалами",
      materials: ["Видео фрагмент", "Рабочие листы", "Аудио упражнения"],
      level: "Intermediate",
      duration: "55 мин",
    },
    {
      title: "Пример урока 2",
      description: "Покажите структуру урока и методы работы с учениками",
      materials: ["Статья", "Диалоги", "Грамматические упражнения"],
      level: "Upper-Intermediate",
      duration: "55 мин",
    },
    {
      title: "Пример урока 3",
      description: "Демонстрация различных подходов к изучению языка",
      materials: ["Песня", "Обсуждение", "Практические задания"],
      level: "Advanced",
      duration: "55 мин",
    },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-text-primary mb-6">
            Примеры моих уроков
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Посмотрите, как проходят занятия и какие материалы используются
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {placeholderLessons.map((lesson, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-all hover:scale-105 border-l-4 border-l-pastel-accent"
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="bg-soft-purple text-pastel-accent px-3 py-1 rounded-full text-sm font-medium">
                    {lesson.level}
                  </span>
                  <div className="flex items-center gap-1 text-text-secondary text-sm">
                    <Icon name="Clock" size={16} />
                    {lesson.duration}
                  </div>
                </div>
                <CardTitle className="font-montserrat text-xl text-text-primary">
                  {lesson.title}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-text-secondary mb-4 leading-relaxed">
                  {lesson.description}
                </p>

                <div>
                  <h4 className="font-semibold text-text-primary mb-3 flex items-center gap-2">
                    <Icon name="BookOpen" size={16} />
                    Материалы урока:
                  </h4>
                  <ul className="space-y-2">
                    {lesson.materials.map((material, materialIndex) => (
                      <li
                        key={materialIndex}
                        className="flex items-center gap-2 text-sm text-text-secondary"
                      >
                        <Icon
                          name="Check"
                          size={14}
                          className="text-green-500 flex-shrink-0"
                        />
                        {material}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-soft-blue to-soft-purple rounded-2xl p-8">
            <Icon name="Video" size={48} className="text-white mx-auto mb-4" />
            <h3 className="font-montserrat font-bold text-2xl text-white mb-4">
              Скоро здесь появятся реальные примеры
            </h3>
            <p className="text-white/90 max-w-2xl mx-auto">
              Видео фрагменты уроков, рабочие материалы и демонстрация методик
              преподавания
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LessonsSection;
