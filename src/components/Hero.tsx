import React from 'react';
import ZOKVisualization from "./ZOKVisualization.tsx";

const Hero: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-background text-foreground">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Комплексные системы инженерной защиты от <span className="text-blue-600 dark:text-blue-700">БПЛА</span>
          </h1>
          <p className="text-lg mb-8 max-w-lg text-foreground">
            Защита промышленных объектов от атак беспилотных летательных аппаратов с массой до 400кг и скоростью до 200 км/ч
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white dark:text-white font-bold py-3 px-6 rounded-lg transition-colors">
            Заказать систему
          </button>
        </div>
        <div className="md:w-1/2 w-full">
          <div className="relative">
            <ZOKVisualization />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-70 text-white text-sm px-3 py-2 rounded-lg">
              Покрутите модель, чтобы рассмотреть со всех сторон
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;