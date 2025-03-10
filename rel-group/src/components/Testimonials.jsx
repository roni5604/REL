import { Container, Carousel, Card } from 'react-bootstrap';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'אורי לוי, תל אביב',
      content: 'הגעתי ל-R.E.L GROUP דרך חברים, והחוויה הייתה מעולה. הם ליוו אותי בכל שלב בהשקעה שלי בנכס בארה"ב, ענו על כל שאלה בסבלנות ובמקצועיות. קיבלתי שירות אישי והסברים מפורטים שעזרו לי לקבל את ההחלטה הנכונה ביותר עבורי. ממליץ בחום לכל מי ששוקל להשקיע בנדל"ן מעבר לים.',
    },
    {
      id: 2,
      name: 'שירה כהן, רעננה',
      content: 'חיפשתי הזדמנות להשקיע בארה"ב אבל לא היה לי מספיק ידע. הצוות של אריאל וטל העניק לי ליווי מלא וצמוד, מה שאיפשר לי לבצע השקעה מוצלחת עם תשואה יפה תוך פחות משנה. מקצועיים, אמינים ומסורים לתוצאות. תודה רבה לכם על הכל!',
    },
    {
      id: 3,
      name: 'יואב סלע, חיפה',
      content: 'בתור משקיע מתחיל בתחום נדל"ן, היו לי הרבה חששות. בזכות R.E.L GROUP קיבלתי הכוונה מלאה, הסברים מפורטים על כל שלב והכי חשוב – תוצאות בשטח. קנינו נכס מסוג Fix and Flip בפלורידה ומכרנו ברווח גדול תוך 10 חודשים בלבד. ממליץ מאוד!',
    },
    {
      id: 4,
      name: 'נעמה ביטון, מודיעין',
      content: 'כמשקיעה סולידית, היה לי חשוב למצוא חברה אמינה שתלווה אותי לאורך כל התהליך. הצוות המדהים של אריאל וטל התאים לי בדיוק את סוג ההשקעה שרציתי, ליוו אותי אישית ובזכותם הנכס שהשקעתי בו מניב הכנסה חודשית יציבה כבר שנתיים. שירות פשוט מעולה ואכפתי.',
    },
    {
      id: 5,
      name: 'רון דגן, ירושלים',
      content: 'פשוט תענוג לעבוד עם חברה מקצועית כמו R.E.L GROUP. ביצעתי דרכם שתי עסקאות שונות, אחת לטווח ארוך ואחת מסוג fix and flip, ובשני המקרים הליווי היה יוצא מן הכלל. זמינים, מקצועיים, וכמובן – הרווחים מדברים בעד עצמם. ממליץ בחום לכל מי שמעוניין בהשקעה בטוחה ואיכותית.',
    },
  ];

  return (
    <section id="testimonials" className="py-5 bg-info bg-opacity-10" data-aos="slide-up">
      <Container>
        <h2 className="text-center mb-5">לקוחות ממליצים עלינו</h2>
        <Carousel indicators={false} controls={true} variant="dark" interval={5000} pause={false}>
          {testimonials.map(testimonial => (
            <Carousel.Item key={testimonial.id}>
              <Card className="shadow-sm mx-auto" style={{ maxWidth: '700px', padding: '30px' }}>
                <Card.Body>
                  <Card.Text style={{ fontSize: '1.1rem' }}>
                    {testimonial.content}
                  </Card.Text>
                  <Card.Footer className="text-end bg-white">
                    <strong>{testimonial.name}</strong>
                  </Card.Footer>
                </Card.Body>
              </Card>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </section>
  );
}
