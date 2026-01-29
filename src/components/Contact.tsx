import React, { useState, useEffect } from 'react';

interface ContactProps {
  darkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ darkMode }) => {
  const [showSuccess, setShowSuccess] = useState(false);

  // Check URL params on component mount to show success message if coming from form submission
  useEffect(() => {
    const urlParams = new URLSearchParams(typeof window !== 'undefined' ? window.location.search : '');
    if (urlParams.get('success') === 'true') {
      setShowSuccess(true);
      // Remove the success parameter from URL without reloading
      if (typeof window !== 'undefined') {
        const newUrl = window.location.pathname + window.location.hash;
        window.history.replaceState(null, '', newUrl);
      }
    }
  }, []);

  // Show success message if form was submitted successfully
  const successMessage = showSuccess ? 'Сообщение успешно отправлено! Мы свяжемся с вами в ближайшее время.' : '';

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
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
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
              {/* Hidden form for Netlify to detect and process */}
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                action="/?success=true#contact"
                className="hidden"
              >
                {/* Netlify form name hidden input */}
                <input type="hidden" name="form-name" value="contact" />
                {/* Honeypot field to catch spam bots */}
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="name" id="hidden-name" />
                <input type="hidden" name="email" id="hidden-email" />
                <input type="hidden" name="message" id="hidden-message" />
                <button type="submit">Hidden Submit</button>
              </form>

              {/* Visible form for user interaction */}
              <form className="space-y-6">
                <div>
                  <label htmlFor="visible-name" className="block text-sm font-medium text-foreground mb-1">Ваше имя</label>
                  <input
                    type="text"
                    id="visible-name"
                    name="visible-name"
                    className="w-full px-4 py-2 border border-input rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-background text-foreground"
                    placeholder="Иван Иванов"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="visible-email" className="block text-sm font-medium text-foreground mb-1">Email</label>
                  <input
                    type="email"
                    id="visible-email"
                    name="visible-email"
                    className="w-full px-4 py-2 border border-input rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-background text-foreground"
                    placeholder="ivan@example.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="visible-message" className="block text-sm font-medium text-foreground mb-1">Сообщение</label>
                  <textarea
                    id="visible-message"
                    name="visible-message"
                    rows={4}
                    className="w-full px-4 py-2 border border-input rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-background text-foreground"
                    placeholder="Расскажите о вашем объекте и потребностях..."
                    required
                  ></textarea>
                </div>

                <button
                  type="button"
                  onClick={async () => {
                    // Copy values from visible form to hidden form
                    const visibleName = (document.getElementById('visible-name') as HTMLInputElement)?.value;
                    const visibleEmail = (document.getElementById('visible-email') as HTMLInputElement)?.value;
                    const visibleMessage = (document.getElementById('visible-message') as HTMLTextAreaElement)?.value;

                    (document.getElementById('hidden-name') as HTMLInputElement).value = visibleName;
                    (document.getElementById('hidden-email') as HTMLInputElement).value = visibleEmail;
                    (document.getElementById('hidden-message') as HTMLInputElement).value = visibleMessage;

                    // Submit to Telegram webhook
                    try {
                      const response = await fetch('/.netlify/functions/telegram-webhook', {
                        method: 'POST',
                        headers: {
                          'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                          name: visibleName,
                          email: visibleEmail,
                          message: visibleMessage,
                        }),
                      });

                      if (!response.ok) {
                        console.error('Error sending to Telegram:', await response.text());
                      }
                    } catch (error) {
                      console.error('Network error sending to Telegram:', error);
                    }

                    // Submit the hidden form
                    const hiddenForm = document.querySelector('form[name="contact"]') as HTMLFormElement;
                    if (hiddenForm) {
                      hiddenForm.submit();
                    }
                  }}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-colors"
                >
                  Отправить запрос
                </button>

                {/* Success Message */}
                {successMessage && (
                  <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-lg">
                    {successMessage}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;