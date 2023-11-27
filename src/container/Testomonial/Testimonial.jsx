import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import "./Testimonial.css";

const testimonialData = [
  {
    title: "Five-Star Service!",
    text: "We couldn't be happier with the exceptional service provided by Johnson Homestead. From the initial consultation to the final sale, their expertise and attention to detail were evident. They truly understand the real estate market and go above and beyond to maximize the value of your property. Highly recommended!",
    author: "- Bob Smith, 20",
    review: 5,
  },
  {
    title: "Beyond Expectations!",
    text: "Johnson Homestead went above and beyond to sell our home. Their personalized approach and attention to detail surpassed our expectations. If you're seeking a team that delivers results with a touch of excellence, Johnson Homestead is the way to go. Highly recommended!",
    author: "- Mary Smith, 25",
    review: 5,
  },
  {
    title: "Effortless Selling Experience!",
    text: "Selling my property with Johnson Homestead was a breeze! Their commitment to making the process seamless and stress-free was evident at every step. The team's communication and marketing strategies were top-notch. Choose Johnson Homestead for an effortless selling experience.",
    author: "- Alice Johnson, 25",
    review: 5,
  },
  {
    title: "Top-Notch Realty Pros!",
    text: "Johnson Homestead is the epitome of top-notch realty professionals. Their market knowledge and dedication are unmatched. They transformed our property's unique features into selling points, resulting in a fantastic outcome. Trust Johnson Homestead for a 5-star selling journey!",
    author: "- Sarah Miller, 25",
    review: 5,
  },
];

const Testimonial = () => {
  const renderStars = (rating) => {
    const stars = Array.from({ length: rating }, (_, index) => (
      <span key={index} className="star-filled">
        ⭐️
      </span>
    ));
    return <div className="star-rating">{stars}</div>;
  };

  return (
    <div>
      <h1 className="testimonial">Testimonials</h1>
      <Row xs={1} md={2} lg={3} xl={4} className="g-4">
        {testimonialData.map((testimonial, index) => (
          <Col key={index}>
            <Card className="testimonial-card" style={{ cursor: "pointer" }}>
              <Card.Body className="slide-content">
                <div className="slide-text">
                  <Card.Title as="h3">{testimonial.title}</Card.Title>
                  <Card.Text>{testimonial.text}</Card.Text>
                  <Card.Text>{testimonial.author}</Card.Text>
                  {renderStars(testimonial.review)}
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Testimonial;
