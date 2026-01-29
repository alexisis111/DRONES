import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-card text-foreground py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-blue-600 w-8 h-8 rounded-full"></div>
              <span className="text-xl font-bold">ООО «ЛЕГИОН»</span>
            </div>
            <p className="text-muted-foreground">Защита промышленных объектов от атак БПЛА</p>
          </div>

          <div className="flex space-x-6">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Политика конфиденциальности</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Условия использования</a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} ООО «ЛЕГИОН». Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;