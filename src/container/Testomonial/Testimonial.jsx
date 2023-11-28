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
  {
    title: "Excellent Service!",
    text: "I had an excellent experience working with Johnson Homestead. Their attention to details, market expertise , and personalized service exceeded my expectations. I highly recommend their services for a smooth and successful property selling journey.",
    author:'- David Thompson, 35',
    review:5
  },
  {
    title: "Efficient and Professional",
    text: "Johnson Homestead is an efficient and professional real estate team. From the initial consultation to the closing, they demonstrated professionalism and expertise. I appreciated their prompt communication and commitment to delivering outstanding results.",
    author: "- Emily Wilson, 28",
    review: 4,
  },
  {
    title: "Outstanding Marketing Strategies",
    text: "Choosing Johnson Homestead was a strategic decision. Their outstanding marketing strategies set our property apart. The team's creativity and attention to detail played a crucial role in attracting potential buyers. I'm grateful for their dedication to achieving the best results.",
    author: "- Michael Carter, 32",
    review: 5,
  },
  {
    title: "Exceptional Guidance",
    text: "Johnson Homestead provided exceptional guidance throughout the selling process. Their expertise and knowledge of the real estate market were invaluable. I felt confident in every decision made, and the outcome exceeded my expectations. Thank you for the outstanding service!",
    author: "- Jessica Turner, 29",
    review: 5,
  }
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
      <Row  xs={1} md={2} lg={3} xl={4} className="g-4">
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
