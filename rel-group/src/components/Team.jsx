import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import ariel from '../assets/ariel.jpeg';
import tal from '../assets/tal.jpeg';
import nyvideo from '../assets/bgvideo.mp4';

export default function Team() {
  return (
    <section id="team" className="position-relative py-5 bg-secondary bg-opacity-10" data-aos="fade-up">
      <video src={nyvideo} autoPlay muted loop className="video-background"/>
      <Container className="position-relative">
        <Row className="justify-content-center mb-5">
          <Col md={10}>
            <Card className="shadow">
              <Card.Body className="text-center">
                <h3 className="mb-3">עלינו - R.E.L GROUP</h3>
                <Card.Text>
                  R.E.L GROUP מתמחה בהשקעות נדל״ן ובהלוואות נדל״ן בארה״ב, ומעניקה שירות 360 מעלות למשקיע הישראלי. החברה מלווה את לקוחותיה באופן מלא, החל משלב בחירת הנכס, בחינת כדאיות השקעה, התאמת פתרונות מימון, ועד השלמת העסקה בצורה רווחית ובטוחה. אנו מאמינים בשירות אישי, מקצועיות, שקיפות מלאה, ומתן פתרונות מדויקים המותאמים אישית לכל לקוח.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <h2 className="text-center my-5">הכירו את הצוות שלנו</h2>
        <Row className="justify-content-center g-4">
          <Col md={6}>
            <Card className="shadow h-100">
              <Card.Body className="text-center">
                <Image src={ariel} height="150" className="rounded-circle shadow-sm mb-4"/>
                <Card.Title>אריאל משה</Card.Title>
                <Card.Subtitle className="text-muted">יזם נדל״ן ומרצה בכיר</Card.Subtitle>
                <Card.Text className="mt-3">
                  אריאל משה, בן 28, הוא יזם נדל"ן בעל ניסיון של למעלה מ-7 שנים ביזמות וליווי משקיעים בבאר שבע ובהוד השרון. אריאל הוא מרצה מוביל ב-Project X, קהילת השקעות הנדל"ן בארה"ב הגדולה בישראל. התמחותו העיקרית היא בתחום ה-Fix and Flip והשקעות לטווח ארוך בארה"ב, עם דגש על יצירת תשואה גבוהה ללקוחותיו והקטנת הסיכון. אריאל מעניק ליווי אישי וקרוב למשקיעים חדשים וותיקים כאחד.
                </Card.Text>
              </Card.Body>
              <Card.Footer className="text-center">
                <small>אריאל משה</small>
              </Card.Footer>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="shadow h-100">
              <Card.Body className="text-center">
                <Image src={tal} height="150" className="rounded-circle shadow-sm mb-4"/>
                <Card.Title>טל רגב</Card.Title>
                <Card.Subtitle className="text-muted">יועצת משכנתאות ויזמית בינלאומית</Card.Subtitle>
                <Card.Text className="mt-3">
                  טל רגב, בת 56, היא יועצת משכנתאות בכירה ויזמית נדל״ן בינלאומית. עם ניסיון של עשרות שנים בניהול לקוחות, מימון נדל"ן וניהול פרויקטים בארץ ובחו"ל (ישראל, גרמניה, ארה"ב), טל מתמחה ביצירת פתרונות פיננסיים ייחודיים ומותאמים אישית לכל משקיע. הליווי הצמוד והידע הרב שלה מאפשרים למשקיעים לקבל החלטות פיננסיות נבונות ולהשיג תשואה יציבה לאורך שנים.
                </Card.Text>
              </Card.Body>
              <Card.Footer className="text-center bg-white">
                <small>טל רגב, מומחית פיננסית ונדל״ן</small>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}