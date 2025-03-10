import { Container, Form, Button, Row, Col, Card } from 'react-bootstrap';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("הטופס נשלח בהצלחה!");
  };

  return (
    <section id="contact" className="py-5 bg-light" data-aos="zoom-out-up">
      <Container>
        <h2 className="text-center mb-5">יצירת קשר עם R.E.L GROUP</h2>
        <Card className="shadow-lg p-4">
          <Card.Body>
            <Form onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>שם מלא</Form.Label>
                    <Form.Control required placeholder="הכנס שם מלא"/>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>אימייל</Form.Label>
                    <Form.Control required type="email" placeholder="הכנס אימייל"/>
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mb-3">
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>מספר טלפון</Form.Label>
                    <Form.Control required placeholder="הכנס מספר טלפון"/>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>אני מתעניין ב:</Form.Label>
                    <Form.Select required>
                      <option value="">בחר אפשרות...</option>
                      <option>השקעה</option>
                      <option>הלוואה</option>
                      <option>אחר</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-3">
                <Form.Label>הודעה / פירוט נוסף</Form.Label>
                <Form.Control as="textarea" rows={4} placeholder="הכנס פירוט נוסף..."/>
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100">
                שליחת טופס
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </section>
  );
}
