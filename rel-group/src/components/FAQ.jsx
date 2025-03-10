import { Container, Accordion } from 'react-bootstrap';

export default function FAQ() {
  const faqs = [
    {
      question: "מה הם סוגי ההשקעות שאתם מציעים?",
      answer: "אנחנו מציעים שלושה סוגים מרכזיים: השקעות Fix & Flip – נכסים לשיפוץ ומכירה מהירה ברווח; השקעות Rental – נכסים מניבים עם הכנסה חודשית קבועה; והשקעות חוב – הלוואות לפרויקטים נדל\"ניים בתמורה לתשואה מובטחת ויציבה."
    },
    {
      question: "מה היתרון בהשקעה בנדל\"ן בארה\"ב לעומת ישראל?",
      answer: "השקעה בנדל\"ן בארה\"ב מאפשרת לכם ליהנות מתשואות גבוהות משמעותית בהשוואה לשוק הישראלי. השוק האמריקאי מגוון, דינאמי ויציב, עם אפשרויות מימון נרחבות ותנאים פיננסיים אטרקטיביים מאוד למשקיעים זרים."
    },
    {
      question: "איך מתנהל תהליך הליווי שלכם למשקיעים?",
      answer: "הליווי שלנו כולל שלושה שלבים עיקריים: שיחת הכרות והבנת צרכים, איתור והתאמת ההשקעה או ההלוואה האידיאלית עבורך, וליווי צמוד בכל שלבי העסקה עד להצלחה מלאה. הצוות שלנו זמין בכל שלב לשאלות, לייעוץ ולתמיכה מקצועית מלאה."
    },
    {
      question: "האם ניתן לקבל הלוואות להשקעה גם ללא אזרחות אמריקאית?",
      answer: "כן. כחלק מהשירותים שלנו אנו עובדים עם מוסדות פיננסיים ובנקים אמריקאים המתמחים במשקיעים זרים, ומציעים אפשרויות מימון אטרקטיביות במיוחד ללקוחות ישראלים גם ללא אזרחות אמריקאית."
    },
    {
      question: "האם אני צריך להגיע פיזית לארה\"ב כדי להשלים את העסקה?",
      answer: "לא בהכרח. חלק גדול מהתהליך נעשה מרחוק ובליווי מלא שלנו. עם זאת, אנחנו מעודדים ומלווים ביקורים בנכסים ובפרויקטים במקרה שהמשקיע מעוניין בכך, תוך ארגון וליווי מלא של הביקור."
    },
    {
      question: "מה גובה ההשקעה המינימלי שנדרש כדי להתחיל להשקיע בנדל\"ן בארה\"ב?",
      answer: "ההשקעה המינימלית המומלצת נעה בדרך כלל בין 50,000$-100,000$, תלוי בסוג ההשקעה ובמיקום הנכס. עם זאת, אנו מתאימים את העסקאות בהתאם ליכולות הפיננסיות של כל משקיע באופן אישי."
    },
    {
      question: "מהו Fix & Flip ומדוע הוא נחשב להשקעה רווחית?",
      answer: "השקעות Fix & Flip הן רכישת נכסים הזקוקים לשיפוץ, שיפור מהיר שלהם ומכירה ברווח לאחר תקופה קצרה (בדרך כלל פחות משנה). היתרון המרכזי הוא הפוטנציאל לרווח מהיר ומשמעותי עם החזר השקעה גבוה בטווח קצר."
    },
    {
      question: "מה ההבדל בין השקעות Rental לבין השקעות חוב?",
      answer: "השקעות Rental הן השקעה ישירה בנכס מניב (נדל\"ן) שמטרתה יצירת תזרים מזומנים קבוע ויציב לאורך זמן מהשכרת הנכס. השקעות חוב, לעומת זאת, הן הלוואות ייעודיות לפרויקטים נדל\"ניים, שבהן המשקיע מקבל תשואה קבועה וריבית מוסכמת על ההלוואה ללא רכישת הנכס עצמו."
    }
  ];

  return (
    <section id="faq" className="py-5 bg-info bg-opacity-10" data-aos="fade-right">
      <Container>
        <h2 className="text-center mb-5 display-5 fw-bold text-secondary">שאלות נפוצות </h2>
        <Accordion defaultActiveKey="0">
          {faqs.map((faq, index) => (
            <Accordion.Item eventKey={index.toString()} key={index}>
              <Accordion.Header>{faq.question}</Accordion.Header>
              <Accordion.Body>{faq.answer}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </Container>
    </section>
  );
}
