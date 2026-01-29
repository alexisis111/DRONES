import React from 'react';
import LegalDocuments from './LegalDocuments';

const Footer: React.FC = () => {
  return (
    <footer className="bg-card text-foreground py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-blue-600 w-8 h-8 rounded-full"></div>
              <span className="text-xl font-bold">ООО «ЛЕГИОН»</span>
            </div>
            <p className="text-muted-foreground mb-4">Защита промышленных объектов от атак БПЛА</p>

            <div className="space-y-2 text-sm">
              <div><strong>Телефон:</strong> <a href="tel:+78137840235" className="hover:text-blue-600 transition-colors">8 (81378) 40-235</a></div>
              <div><strong>Email:</strong> <a href="mailto:l-legion@bk.ru" className="hover:text-blue-600 transition-colors">l-legion@bk.ru</a></div>
              <div><strong>Сайт:</strong> <a href="https://www.legion78.ru" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">www.legion78.ru</a></div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Контактная информация</h3>
            <div className="space-y-2 text-sm">
              <div><strong>Юр. адрес:</strong> 188992, Ленинградская обл.,</div>
              <div>Выборгский р-н, г. Светогорск,</div>
              <div>ул. Максима Горького, д.7.</div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Реквизиты</h3>
            <div className="space-y-2 text-sm">
              <div><strong>ИНН:</strong> 7802808155</div>
              <div><strong>КПП:</strong> 470401001</div>
              <div><strong>ОГРН:</strong> 1127847628820</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-8 pt-8 border-t border-border">
          <div className="mb-4 md:mb-0">
            <LegalDocuments />
          </div>

          <div className="text-center md:text-right text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} ООО «ЛЕГИОН». Все права защищены.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;