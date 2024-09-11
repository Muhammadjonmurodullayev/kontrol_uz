import React, { useState } from 'react';
import './yordam.css';

const Yordam = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpansion = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className='yordam55'>
        <div className='yordam56'>
      <h2>Yordam</h2>
      <div className="faq-container">
        {faqData.map((faq, index) => (
          <div key={index} className="faq-item">
            <div 
              onClick={() => toggleExpansion(index)} 
              className="faq-title"
            >
              <h4>{faq.question}</h4>
            </div>
            <div 
              className={`faq-content ${expandedIndex === index ? 'expanded' : ''}`}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

const faqData = [
  { question: 'React nima?', answer: 'React - bu foydalanuvchi interfeyslarini yaratish uchun JavaScript kutubxonasi.' },
  { question: 'React-da komponent nima?', answer: 'Komponent - bu React-dagi mustaqil va qayta ishlatiladigan UI qismidir.' },
  { question: 'React-da props nima?', answer: 'Props - bu komponentlarga ma\'lumot uzatish uchun ishlatiladigan obyektlardir.' },
  { question: 'React-da state nima?', answer: 'State - bu komponentning ichki holatini ifodalaydi va vaqt o\'tishi bilan o\'zgarishi mumkin.' },
  { question: 'React-da hooklar nima?', answer: 'Hooklar - bu funksional komponentlar ichida state va boshqa React xususiyatlarini ishlatish imkonini beruvchi funksiyalar.' },
  { question: 'React Router nima?', answer: 'React Router - bu React ilovalarida yo\'nalishlarni boshqarish uchun ishlatiladigan kutubxona.' },
  { question: 'React Router nima?', answer: 'React Router - bu React ilovalarida yo\'nalishlarni boshqarish uchun ishlatiladigan kutubxona.' },
  { question: 'React Router nima?', answer: 'React Router - bu React ilovalarida yo\'nalishlarni boshqarish uchun ishlatiladigan kutubxona.' },
  { question: 'React Router nima?', answer: 'React Router - bu React ilovalarida yo\'nalishlarni boshqarish uchun ishlatiladigan kutubxona.' },
  { question: 'React Router nima?', answer: 'React Router - bu React ilovalarida yo\'nalishlarni boshqarish uchun ishlatiladigan kutubxona.' },
  { question: 'React Router nima?', answer: 'React Router - bu React ilovalarida yo\'nalishlarni boshqarish uchun ishlatiladigan kutubxona.' },
  { question: 'React Router nima?', answer: 'React Router - bu React ilovalarida yo\'nalishlarni boshqarish uchun ishlatiladigan kutubxona.' },
  { question: 'React Router nima?', answer: 'React Router - bu React ilovalarida yo\'nalishlarni boshqarish uchun ishlatiladigan kutubxona.' },
  { question: 'React Router nima?', answer: 'React Router - bu React ilovalarida yo\'nalishlarni boshqarish uchun ishlatiladigan kutubxona.' },
  { question: 'React Router nima?', answer: 'React Router - bu React ilovalarida yo\'nalishlarni boshqarish uchun ishlatiladigan kutubxona.' },
  { question: 'React Router nima?', answer: 'React Router - bu React ilovalarida yo\'nalishlarni boshqarish uchun ishlatiladigan kutubxona.' },
  { question: 'React Router nima?', answer: 'React Router - bu React ilovalarida yo\'nalishlarni boshqarish uchun ishlatiladigan kutubxona.' },
  { question: 'React Router nima?', answer: 'React Router - bu React ilovalarida yo\'nalishlarni boshqarish uchun ishlatiladigan kutubxona.' },
  { question: 'React Router nima?', answer: 'React Router - bu React ilovalarida yo\'nalishlarni boshqarish uchun ishlatiladigan kutubxona.' },
  { question: 'React Router nima?', answer: 'React Router - bu React ilovalarida yo\'nalishlarni boshqarish uchun ishlatiladigan kutubxona.' },
  { question: 'React Router nima?', answer: 'React Router - bu React ilovalarida yo\'nalishlarni boshqarish uchun ishlatiladigan kutubxona.' },
  { question: 'React Router nima?', answer: 'React Router - bu React ilovalarida yo\'nalishlarni boshqarish uchun ishlatiladigan kutubxona.' },
];

export default Yordam;
