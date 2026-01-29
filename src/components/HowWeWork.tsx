import React from 'react';

const HowWeWork: React.FC = () => {
  const steps = [
    "Выезд на объект защиты для осмотра и обследования объекта",
    "Проведение технических согласований с Заказчиком",
    "Разработка эскизного проекта. Согласование с Заказчиком",
    "Разработка проектной документации",
    "Изготовление конструкций",
    "Мобилизация на объект",
    "Монтаж ЗОК",
    "Сдача ЗОК представителям Заказчика. Ввод в эксплуатацию",
    "Передача исполнительной документации Заказчику",
    "Сопровождение в эксплуатации ЗОК"
  ];

  return (
    <section id="process" className="py-16 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Как мы работаем</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Полный цикл проектирования, производства и установки систем защиты
        </p>

        <div className="relative">
          <div className="hidden md:block absolute left-0 top-16 bottom-0 w-1 bg-blue-200 dark:bg-blue-900 transform translate-x-6"></div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold mr-4">
                  {index + 1}
                </div>
                <div className="bg-card p-6 rounded-lg flex-grow">
                  <h3 className="text-lg font-semibold">{step}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;