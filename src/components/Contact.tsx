import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

interface ContactProps {
  darkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ darkMode }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage('');
    setErrorMessage('');

    // Get form data
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    try {
      // Prepare form data for sending
      const requestData = {
        name,
        email,
        message,
        to_email: 'shuragilyow1@gmail.com' // Target email
      };

      // Send the form data to our Netlify Function
      const response = await fetch('/.netlify/functions/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to send email');
      }

      // On success
      setSuccessMessage('Сообщение успешно отправлено! Мы свяжемся с вами в ближайшее время.');
      e.currentTarget.reset(); // Reset form
    } catch (error) {
      console.error('Error sending email:', error);
      setErrorMessage('Произошла ошибка при отправке сообщения. Пожалуйста, попробуйте еще раз.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className={`py-16 ${darkMode ? 'bg-muted' : 'bg-muted'}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Контактная информация</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Свяжитесь с нами для получения консультации и разработки индивидуального решения
        </p>

        <div className="max-w-4xl mx-auto bg-card rounded-xl shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3 bg-blue-600 text-white p-8">
              <h3 className="text-xl font-bold mb-6">ООО «ЛЕГИОН»</h3>

              <div className="space-y-4">
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-1 mr-3 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <p>Юр. Адрес: 188992, Ленинградская обл., Выборгский р-н, г. Светогорск, ул.Максима Горького, д.7</p>
                </div>

                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span>8 (81378) 40-235</span>
                </div>

                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span>l-legion@bk.ru</span>
                </div>

                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                  </svg>
                  <span>ИНН 7802808155</span>
                </div>

                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                  </svg>
                  <span>ОГРН 1127847628820</span>
                </div>
              </div>
            </div>

            <div className="md:w-2/3 p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">Ваше имя</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border border-input rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-background text-foreground"
                    placeholder="Иван Иванов"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-input rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-background text-foreground"
                    placeholder="ivan@example.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">Сообщение</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-input rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-background text-foreground"
                    placeholder="Расскажите о вашем объекте и потребностях..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-colors"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Отправка...' : 'Отправить запрос'}
                </button>

                {/* Success/Error Messages - Initially hidden */}
                <div id="form-messages" className="mt-4">
                  {successMessage && (
                    <div className="p-4 bg-green-100 text-green-700 rounded-lg">
                      {successMessage}
                    </div>
                  )}
                  {errorMessage && (
                    <div className="p-4 bg-red-100 text-red-700 rounded-lg">
                      {errorMessage}
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;