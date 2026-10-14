// FAQ.tsx - Frequently Asked Questions Section
// Answers are written as plain, self-contained sentences so search engines
// and AI answer tools can quote them directly. The same list feeds the
// FAQPage structured data below, so the visible text and markup stay in sync.
import React from 'react';
import { AMAZON_URL, BARNES_URL } from '../config/site';
import './FAQ.css';

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: 'What is Finicky Felicia about?',
    answer:
      'Finicky Felicia is a children’s picture book about a little girl who loves sweets and won’t eat anything healthy, not even oatmeal. Her family finds a creative way to help her discover that vegetables can taste good.',
  },
  {
    question: 'What age is Finicky Felicia for?',
    answer:
      'Finicky Felicia is written for children ages 3 to 8. It works well as a read-aloud for preschool and early elementary kids.',
  },
  {
    question: 'Who wrote Finicky Felicia?',
    answer:
      'Finicky Felicia was written by Narene Russell, a mother of four and grandmother of four, and illustrated by James Scales Jr. The story is based on Narene’s grandson, a real-life picky eater.',
  },
  {
    question: 'Is Finicky Felicia a good book for picky eaters?',
    answer:
      'Yes. Finicky Felicia was written for families with a picky eater. It gives parents and teachers a fun way to talk with kids about trying new foods and eating vegetables.',
  },
  {
    question: 'Where can I buy Finicky Felicia?',
    answer:
      'Finicky Felicia is available in paperback on Amazon and in hardcover at Barnes & Noble.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(({ question, answer }) => ({
    '@type': 'Question',
    name: question,
    acceptedAnswer: { '@type': 'Answer', text: answer },
  })),
};

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="faq-section">
      <div className="faq-container">
        <div className="faq-header">
          <span className="faq-label">Questions</span>
          <h2 className="faq-title">Frequently Asked Questions</h2>
        </div>

        <div className="faq-list">
          {faqs.map(({ question, answer }) => (
            <details key={question} className="faq-item">
              <summary className="faq-question">
                <h3>{question}</h3>
              </summary>
              <p className="faq-answer">
                {answer}
                {question.startsWith('Where can I buy') && (
                  <>
                    {' '}
                    <a href={AMAZON_URL} target="_blank" rel="noopener noreferrer">
                      Buy on Amazon
                    </a>
                    {' · '}
                    <a href={BARNES_URL} target="_blank" rel="noopener noreferrer">
                      Buy at Barnes &amp; Noble
                    </a>
                  </>
                )}
              </p>
            </details>
          ))}
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </section>
  );
};

export default FAQ;
