import React from 'react';

const HowWeWork: React.FC = () => {
  const steps = [
    {
      title: "Выезд на объект",
      description: "Выезд на объект защиты для осмотра и обследования объекта"
    },
    {
      title: "Технические согласования",
      description: "Проведение технических согласований с Заказчиком"
    },
    {
      title: "Эскизный проект",
      description: "Разработка эскизного проекта. Согласование с Заказчиком"
    },
    {
      title: "Проектная документация",
      description: "Разработка проектной документации"
    },
    {
      title: "Изготовление конструкций",
      description: "Изготовление конструкций"
    },
    {
      title: "Мобилизация",
      description: "Мобилизация на объект"
    },
    {
      title: "Монтаж ЗОК",
      description: "Монтаж ЗОК"
    },
    {
      title: "Сдача и ввод в эксплуатацию",
      description: "Сдача ЗОК представителям Заказчика. Ввод в эксплуатацию"
    },
    {
      title: "Передача документации",
      description: "Передача исполнительной документации Заказчику"
    },
    {
      title: "Сопровождение",
      description: "Сопровождение в эксплуатации ЗОК"
    }
  ];

  return (
    <section id="process" className="py-16 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Как мы работаем</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Полный цикл проектирования, производства и установки систем защиты
        </p>

        <div className="relative">
          {/* Вертикальная линия для десктопа */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-transparent transform -translate-x-1/2"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative flex ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center`}
              >
                {/* Линия для мобильных и планшетов */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden absolute left-6 top-12 h-16 w-0.5 bg-gradient-to-b from-blue-500 to-transparent"></div>
                )}

                {/* Номер шага */}
                <div className="flex-shrink-0 relative z-10">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {index + 1}
                  </div>
                </div>

                {/* Карточка шага */}
                <div className="lg:mx-6 mt-4 lg:mt-0 bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex-grow">
                  <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>

                {/* Линия между карточками на десктопе */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 left-1/2 w-16 h-0.5 bg-gradient-to-r from-blue-500 to-transparent transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;