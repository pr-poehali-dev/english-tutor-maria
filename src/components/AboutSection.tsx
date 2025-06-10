import Icon from "@/components/ui/icon";

const AboutSection = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-text-primary mb-6">
            Обо мне
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Более 8 лет помогаю студентам достигать их целей в изучении
            английского языка
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-soft-purple rounded-full flex items-center justify-center">
                <Icon
                  name="BookOpen"
                  size={24}
                  className="text-pastel-accent"
                />
              </div>
              <div>
                <h3 className="font-montserrat font-semibold text-xl text-text-primary mb-2">
                  Высшее образование
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  Лингвистика, теория и методика преподавания иностранных
                  языков. Глубокие знания структуры языка и современных методик
                  обучения.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-soft-blue rounded-full flex items-center justify-center">
                <Icon name="Plane" size={24} className="text-blue-500" />
              </div>
              <div>
                <h3 className="font-montserrat font-semibold text-xl text-text-primary mb-2">
                  Международный опыт
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  Проживание в США по программе Work & Travel, обучение в Европе
                  по программе Erasmus, ex-преподаватель английского в Донском
                  Гос. Тех. Университете. Изучение языка в естественной среде.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-soft-gray rounded-full flex items-center justify-center">
                <Icon name="Target" size={24} className="text-green-500" />
              </div>
              <div>
                <h3 className="font-montserrat font-semibold text-xl text-text-primary mb-2">
                  Создаю уроки сама и/или использую топ-учебники
                </h3>
                <p className="text-sm text-text-secondary">
                  Коммуникативный и лексический подходы
                </p>
              </div>
            </div>
          </div>

          <div className="lg:pl-12">
            <div className="bg-gradient-to-br from-soft-purple to-soft-blue p-8 rounded-2xl">
              <div className="text-center mb-6">
                <div className="w-32 h-32 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Icon name="User" size={48} className="text-white" />
                </div>
                <p className="text-white/90 text-sm">
                  Здесь будет размещена ваша фотография
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-black">
                  <Icon name="Award" size={20} />
                  <span>8+ лет опыта преподавания</span>
                </div>
                <div className="flex items-center gap-3 text-black">
                  <Icon name="Globe" size={20} />
                  <span>Американский английский</span>
                </div>
                <div className="flex items-center gap-3 text-black">
                  <Icon name="Heart" size={20} />
                  <span>Friendly atmosphere</span>
                </div>
                <div className="flex items-center gap-3 text-black">
                  <Icon name="MessageSquare" size={20} />
                  <span>Говори на английском каждый урок</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
