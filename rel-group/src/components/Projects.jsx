import { Container, Carousel, Card, Row, Col, Badge, Image } from 'react-bootstrap';
import before1 from '../assets/before1.jpeg';
import after1 from '../assets/after1.jpeg';
import afterFix from '../assets/afterFix.mp4'; // Import the video file

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "פרויקט Fix & Flip במיאמי, פלורידה",
      beforePrice: "$58,800",
      afterPrice: "$159,900",
      beforeImg: before1,
      afterImg: after1,
      description: "רכשנו נכס ישן הזקוק לשיפוץ מסיבי. אחרי שיפוץ יסודי וחדשני של 4 חודשים בלבד, הצלחנו למכור את הנכס במחיר גבוה, והמשקיע נהנה מרווח של למעלה מ-100,000 דולר נטו בעסקה.",
    },
    {
      id: 2,
      title: "השקעה Rental בדאלאס, טקסס",
      beforePrice: "$120,000",
      afterPrice: "$180,000",
      beforeImg: before1,
      afterImg: after1,
      description: "רכשנו בית מוזנח באזור מבוקש בדאלאס, שיפצנו ושדרגנו אותו ברמה גבוהה. כיום הנכס מושכר ומניב תשואה שנתית יציבה של 10%, בנוסף לרווח משמעותי בערך הנכס לאורך השנים הקרובות.",
    },
    {
      id: 3,
      title: "השקעת חוב לפיתוח נדל\"ן ביוסטון, טקסס",
      beforePrice: "השקעה: $200,000",
      afterPrice: "החזר: $240,000",
      beforeImg: before1,
      afterImg: after1,
      description: "השקעה מסוג הלוואת חוב שהוענקה לפרויקט בנייה ביוסטון. ההלוואה ניתנה בתנאים אטרקטיביים במיוחד עם תשואה שנתית קבועה של 12%. ההשקעה הוחזרה עם ריבית בסוף הפרויקט שהסתיים לאחר שנתיים בלבד.",
    },
    {
      id: 4,
      title: "שיפוץ דירה בלוס אנג'לס, קליפורניה",
      beforePrice: "$300,000",
      afterPrice: "$450,000",
      video: afterFix,
      description: "רכשנו דירה ישנה בלוס אנג'לס במחיר של $300,000. לאחר שיפוץ מקיף שכלל שדרוג המטבח, חדרי האמבטיה והחלפת רצפות, הצלחנו להעלות את ערך הנכס ל-$450,000. הרווח הצפוי מהעסקה הוא $150,000.",
    }
  ];

  return (
    <section id="projects" className="py-5 bg-secondary bg-opacity-10" data-aos="fade-right">
      <Container>
        <h2 className="text-center mb-5">הפרויקטים האחרונים שלנו</h2>
        <Carousel indicators={false} variant="dark"  >

          {projects.map(project => (
            <Carousel.Item key={project.id}>
              <Card className="shadow-lg mx-auto" style={{ maxWidth: '900px' }}>
                <Card.Body>
                  <h3 className="text-center">{project.title}</h3>
                  <div className="d-flex justify-content-between gap-4 mt-4">
                    <div className="text-center w-50">
                      <Card.Subtitle className="mb-2 fw-bold">לפני</Card.Subtitle>
                      <Card.Text className="mb-2 fs-5">{project.beforePrice}</Card.Text>
                      {project.beforeImg && <img src={project.beforeImg} className="img-fluid rounded shadow-sm" alt="לפני"/>}
                    </div>
                    <div className="text-center w-50">
                      <Card.Subtitle className="mb-2 fw-bold">אחרי</Card.Subtitle>
                      <div className="fs-4 text-success fw-bold">{project.afterPrice}</div>
                      {project.afterImg && <img className="img-fluid rounded shadow-sm" src={project.afterImg} alt="אחרי"/>}
                      {project.video && (
                        <div className="video-container">
                          <video className="img-fluid rounded shadow-sm" src={project.video} controls onClick={(e) => e.stopPropagation()} />
                          <div className="video-overlay">
                            <button className="play-button" onClick={(e) => {
                              e.stopPropagation();
                              e.target.closest('.video-container').querySelector('video').play();
                            }}>▶</button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <Card.Text className="mt-4">{project.description}</Card.Text>
                </Card.Body>
              </Card>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </section>
  );
}