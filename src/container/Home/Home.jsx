import React from "react";
import Testimonial from "../Testomonial/Testimonial";
import "./Home.css";
import { Image } from "react-bootstrap";
import { images } from "../../constants";

const Home = () => {
  return (
    <div className="position-relative">
      <div className="navbar-buffer" />
      <Image
        className="position-absolute top-0 start-0 p-2"
        style={{ height: "15rem", width: "12rem" }}
        src={images.window}
        alt="Top Left Image"
      />
      <Image
        className="position-absolute top-0 end-0 p-2"
        style={{ height: "15rem", width: "12rem" }}
        src={images.window}
        alt="Top Right Image"
      />
      <p className="welcome-msj">
        "Welcome to Johnson Homestead Portoflio, where I specialize in
        maximizing the value of your property. As your dedicated real estate
        expert, I am here to guide you through a seamless selling process,
        ensuring you receive the best possible returns on your investment.
        Selling with me means more than just a transaction; it's an opportunity
        to optimize the potential of your property in the current market. To get
        started, simply enter the information below to create your property
        details and add it to my exclusive sell list. My comprehensive approach,
        coupled with strategic marketing and personalized service, sets me apart
        in the real estate industry. Join the ranks of satisfied clients who
        have entrusted me with their property sales. Explore my portfolio to see
        the successful goals and properties I've completed for clients like you.
        At Johnson Homestead, I am committed to achieving the highest value for
        your property while providing a personalized and efficient selling
        experience. Let's showcase your property and accomplishments together."
      </p>

      <div>
        <Testimonial />
      </div>
      <div>
        <p
          className="welcome-msj text-center mt-4"
          style={{
            fontFamily: "Arial, sans-serif",
            fontWeight: "600",
            fontSize: "1.2rem",
          }}
        >
          "Discover the difference at Johnson Homestead Portfolio! I invite you
          to embark on a journey where your property goals become a reality. As
          your dedicated real estate partner, I am here to collaborate with you
          on a personalized and efficient selling experience. Your property is
          unique, and my expertise lies in maximizing its value in the market.
          Whether you're considering selling, buying, or investing, let's
          connect to discuss how we can achieve your real estate goals together.
          Join the satisfied clients who have entrusted me with their property
          transactions. Explore my portfolio to witness successful outcomes and
          discover the possibilities for your property. At Johnson Homestead,
          your satisfaction is my priority, and I am committed to delivering the
          highest value for your property. Let's create success stories together
          in the real estate world!"
        </p>
      </div>
    </div>
  );
};

export default Home;
