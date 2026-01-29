import React from 'react';

const Services: React.FC = () => {
  const services = [
    "Портовые сооружения, морские вокзалы",
    "Объекты газового хозяйства",
    "Транспортная и железнодорожная инфраструктура",
    "Объекты аэропортов",
    "ТЭЦ, электроподстанции, объекты электроснабжения",
    "Резервуарные парки хранения нефти и нефтепродуктов",
    "Производства и склады хранения легковоспламеняющихся и взрывчатых веществ",
    "Производства и склады хранения химической промышленности",
    "Центры обработки информации",
    "Объекты связи",
    "Медицинские центры",
    "Химические и биологические лаборатории"
  ];

  return (
    <section id="services" className="py-16 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Объекты, которые мы защищаем</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Наши индивидуальные решения подходят для различных типов промышленных объектов
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="bg-blue-100 dark:bg-blue-900/30 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">{service}</h3>
              <p className="text-muted-foreground">
                Надежная защита с учетом специфики эксплуатации и окружающей среды
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;