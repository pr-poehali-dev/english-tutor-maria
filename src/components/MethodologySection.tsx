import Icon from "@/components/ui/icon";

const MethodologySection = () => {
  const materials = [
    {
      icon: "Film",
      title: "Фильмы и сериалы",
      description: "Изучаем язык через популярные фильмы и сериалы",
    },
    {
      icon: "Youtube",
      title: "YouTube каналы",
      description: "Аутентичный контент от носителей языка",
    },
    {
      icon: "Music",
      title: "Песни",
      description: "Развиваем произношение и понимание через музыку",
    },
    {
      icon: "Newspaper",
      title: "Статьи",
      description: "Актуальные материалы из зарубежных источников",
    },
    {
      icon: "BookOpen",
      title: "Топовые учебники",
      description: "Проверенные методики ведущих издательств",
    },
    {
      icon: "PenTool",
      title: "Авторские уроки",
      description: "Уникальные материалы, созданные специально для вас",
    },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-text-primary mb-6">
            Моя методика
          </h2>
          <p className="text-xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
            Коммуникативная методика с лексическим подходом. Основа —
            американский английский. Использую аутентичные материалы и создаю
            персонализированные уроки
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {materials.map((material, index) => (
            <div
              key={index}
              className="group p-6 bg-soft-gray rounded-2xl hover:bg-gradient-to-br hover:from-soft-purple hover:to-soft-blue transition-all duration-300 hover:scale-105"
            >
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors">
                <Icon
                  name={material.icon as any}
                  size={24}
                  className="text-pastel-accent group-hover:text-white transition-colors"
                />
              </div>
              <h3 className="font-montserrat font-semibold text-lg text-text-primary mb-2 group-hover:text-white transition-colors">
                {material.title}
              </h3>
              <p className="text-text-secondary text-sm group-hover:text-white/90 transition-colors">
                {material.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-soft-blue to-soft-purple rounded-2xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="font-montserrat font-bold text-3xl text-white mb-6">
              Почему коммуникативная методика?
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon
                    name="MessageSquare"
                    size={20}
                    className="text-white mt-1 flex-shrink-0"
                  />
                  <div>
                    <h4 className="text-white font-semibold mb-1">
                      Живое общение
                    </h4>
                    <p className="text-white/90 text-sm">
                      Изучаем язык через реальные ситуации и диалоги
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Icon
                    name="Brain"
                    size={20}
                    className="text-white mt-1 flex-shrink-0"
                  />
                  <div>
                    <h4 className="text-white font-semibold mb-1">
                      Естественное освоение
                    </h4>
                    <p className="text-white/90 text-sm">
                      Грамматика изучается в контексте, а не изолированно
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon
                    name="Target"
                    size={20}
                    className="text-white mt-1 flex-shrink-0"
                  />
                  <div>
                    <h4 className="text-white font-semibold mb-1">
                      Практический результат
                    </h4>
                    <p className="text-white/90 text-sm">
                      Сразу применяем изученное в речи
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Icon
                    name="Zap"
                    size={20}
                    className="text-white mt-1 flex-shrink-0"
                  />
                  <div>
                    <h4 className="text-white font-semibold mb-1">
                      Быстрый прогресс
                    </h4>
                    <p className="text-white/90 text-sm">
                      Преодолеваем языковой барьер с первых уроков
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
