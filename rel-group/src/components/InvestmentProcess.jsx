import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function InvestmentProcess() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="investment-process" className="py-5 bg-info bg-opacity-10">
      <Container>
        <h2 className="text-center mb-5 display-4 fw-bold text-dark" data-aos="fade-down">
          תהליך ההשקעה עם R.E.L GROUP
        </h2>
        <Row className="gy-4">

          <Col md={4} data-aos="fade-right">
            <Card className="shadow-lg border-0">
              <Card.Body className="text-center">
                <Badge bg="info" className="mb-2 fs-6">שלב ראשון</Badge>
                <Card.Title className="fs-3 fw-bold text-primary mb-3">
                  הגדרת סוג המשקיע
                </Card.Title>
                <Card.Text className="fs-5">
                  בשלב הראשון אנחנו מבררים ביחד איתך איזה משקיע אתה – האם אתה מעוניין בהשקעה סולידית, יציבה ועם תשואה קבועה לאורך זמן (Rental והשקעות חוב), או שאתה מעדיף השקעה עם פוטנציאל רווח גבוה יותר וזמן מימוש קצר יותר (Fix & Flip). ההבנה הזו תעזור לנו להתאים לך עסקאות מדויקות ולהבטיח שתשקיע נכון ובביטחון מלא.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} data-aos="fade-up">
            <Card className="shadow-lg h-100 border-0 bg-info bg-opacity-25">
              <Card.Body>
                <Badge bg="dark" className="mb-3 fs-6">שלב 2</Badge>
                <Card.Title className="fs-4 fw-bold text-center text-dark">
                  בחינת עסקאות רלוונטיות
                </Card.Title>
                <Card.Text className="fs-5">
                  לאחר שהבנו את הצרכים שלך, אנו מתאימים ומציגים בפניך מספר עסקאות פוטנציאליות. לכל עסקה מוצגת תוכנית עסקית מפורטת ואישית, הכוללת הערכת סיכונים, תשואות צפויות וזמני מימוש. הצוות שלנו ילווה אותך בכל שלב על מנת להבטיח שההשקעה תואמת במדויק את הציפיות שלך.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} data-aos="fade-left">
            <Card className="shadow-lg h-100 border-0">
              <Card.Body>
                <Badge bg="secondary" className="mb-3">שלב 3</Badge>
                <Card.Title className="fs-3">השלמת ההשקעה וליווי צמוד</Card.Title>
                <Card.Text className="fs-5">
                  בשלב הסופי הצוות שלנו דואג לליווי אישי ומקצועי עד להשלמת ההשקעה בהצלחה. התהליך כולל סיוע משפטי, ליווי מול גופי המימון, ביצוע העסקה בפועל, ניהול הנכס או מכירתו לאחר שיפוץ (במקרה של Fix & Flip). אנחנו נמצאים איתך בקשר צמוד ומלווים אותך באופן מלא ומדויק עד להשגת המטרות הפיננסיות שלך.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

        </Row>

        <Row className="justify-content-center mt-5">
          <Col md={10}>
            <Card className="shadow bg-dark text-white border-0" data-aos="zoom-in">
              <Card.Body className="text-center">
                <h3 className="mb-4 display-6">מדוע לבחור ב-R.E.L GROUP?</h3>
                <p className="fs-5">
                  אנו ב-R.E.L GROUP מתמחים בהנגשת שוק הנדל״ן האמריקאי למשקיעים ישראלים בצורה הפשוטה, הנוחה והמשתלמת ביותר. אנחנו מעניקים ללקוחות שלנו את הביטחון שהם בידיים מקצועיות ומנוסות, עם צוות מומחים ישראלי-אמריקאי אשר מנהל את ההשקעה שלכם מתחילתה ועד סופה באופן מלא, תוך שקיפות מלאה, אמינות ומקצועיות בלתי מתפשרת. הצטרפו אלינו והתחילו ליהנות מתשואות גבוהות ויציבות בשוק הנדל״ן בארה״ב.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
