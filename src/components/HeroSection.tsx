import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-soft-gray via-white to-soft-blue px-4">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-montserrat font-bold italic bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 bg-clip-text text-transparent mb-6 leading-tight">
            Hi there, Marie is here
          </h1>
          <div className="text-xl md:text-2xl text-text-secondary font-medium mb-4">
            преподаватель по английскому языку
          </div>
          <div className="inline-flex items-center gap-2 bg-pastel-accent/30 px-4 py-2 rounded-full">
            <Icon name="Users" size={20} className="text-green-500" />
            <span className="text-text-primary font-medium">
              для взрослых с уровнем А2 и выше
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-8">
          <div className="text-center p-4">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-soft-purple rounded-full mb-3">
              <Icon
                name="GraduationCap"
                size={24}
                className="text-pastel-accent"
              />
            </div>
            <h3 className="font-montserrat font-semibold text-text-primary mb-1">
              Образование
            </h3>
            <p className="text-sm text-text-secondary">
              Лингвистика, методика преподавания
            </p>
          </div>

          <div className="text-center p-4">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-soft-blue rounded-full mb-3">
              <Icon name="Globe" size={24} className="text-blue-500" />
            </div>
            <h3 className="font-montserrat font-semibold text-text-primary mb-1">
              Опыт за рубежом
            </h3>
            <p className="text-sm text-text-secondary">США, Европа (Erasmus)</p>
          </div>

          <div className="text-center p-4">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-soft-gray rounded-full mb-3">
              <Icon name="Users" size={24} className="text-green-500" />
            </div>
            <h3 className="font-montserrat font-semibold text-text-primary mb-1">
              Методика
            </h3>
            <p className="text-sm text-text-secondary">
              Коммуникативный подход, лексический подход и геймификация
            </p>
          </div>
        </div>

        <Button
          size="lg"
          className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-semibold px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
        >
          <Icon name="MessageCircle" size={20} className="mr-2" />
          Написать в Telegram
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
