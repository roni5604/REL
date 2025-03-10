import { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Loans() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const loans = [
    {
      title: "הלוואת Fix & Flip",
      description: "הלוואה אידיאלית למשקיעים המעוניינים לרכוש נכסים לשיפוץ ומכירה מהירה. מסלול מהיר ונוח המאפשר רווח גבוה בטווח קצר, עם מימון מלא או חלקי בהתאם לצרכי הלקוח."
    },
    {
      title: "הלוואה לבנייה חדשה",
      description: "הלוואות לבנייה חדשה בארה״ב בתנאים מועדפים ובליווי אישי מלא. פתרון פיננסי גמיש המאפשר בנייה של נכסים חדשים או הרחבת נכסים קיימים עם תנאי החזר מותאמים אישית."
    },
    {
      title: "הלוואת Rental לטווח ארוך",
      description: "הלוואה לרכישת נכסים מניבים, המאפשרת יצירת הכנסה חודשית קבועה. ריבית נמוכה ותנאי החזר נוחים במיוחד עד 30 שנה, מתאים במיוחד למשקיעים סולידיים."
    },
    {
      title: "הלוואה למחזור משכנתא",
      description: "הלוואה משתלמת למחזור משכנתאות קיימות, במטרה להפחית את הריבית, להקל על תזרים המזומנים או לפנות הון להשקעות נוספות."
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <section id="loans" className="py-5 bg-secondary bg-opacity-10">
      <Container>
        <h2 className="text-center display-4 fw-bold mb-5" data-aos="fade-down">
          הלוואות נדל״ן בארה"ב בהתאמה אישית
        </h2>
        <Row className="gy-4">
          {loans.map((loan, index) => (
            <Col md={6} key={index} data-aos="fade-up">
              <Card className="h-100 shadow-sm border-0">
                <Card.Header className="bg-white border-bottom-0 text-center">
                  <h4 className="fw-bold text-dark">{loan.title}</h4>
                </Card.Header>
                <Card.Body>
                  <p className="fs-5 text-muted">
                    {loan.description}
                  </p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Row className="justify-content-center mt-5" data-aos="zoom-in">
          <Col md={10}>
            <Card className="border-0 shadow-sm bg-white">
              <Card.Body className="text-center">
                <h3 className="mb-3">מדוע כדאי לקחת הלוואה איתנו?</h3>
                <p className="fs-5">
                  ב-R.E.L GROUP אנחנו מתמחים בהלוואות נדל״ן בארה״ב ללקוחות ישראלים. בעזרתנו תוכלו לקבל מימון אטרקטיבי, מותאם אישית, וזאת בזכות הניסיון שלנו ביצירת חיבורים איכותיים עם המלווים הטובים והאמינים ביותר בארה"ב. אנו מלווים אתכם יד ביד עד להשגת המימון באופן מהיר, נוח ובטוח.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
