import React from "react";
import "./Workshop.css";
import workshop from "./wp10474414-amazon-web-services-wallpapers.jpg";

function Workshop() {
  return (
    <div className="Workshop">
      <div className="workshop-detail">
        <div>
          <h1>
            Mr.Logesh Kumar <span className="degree">Data Engineering</span>
          </h1>
          <p>
            On <span> April 28</span>
          </p>
          <p>
            AWS enables you to select the operating system, programming
            language, web application platform, database, and other services you
            need. With AWS, you receive a virtual environment that lets you load
            the software and services your application requires.
          </p>
          <h1>AWS workshop </h1>
          <div className="list">
            <h2>AWS Cloud Training Services and Topics covered</h2>
            <ul>
              <li>Basics of Cloud and AWS cloud Account creation</li>
              <li>IAM</li>
              <li>VPC</li>
              <li>EC2</li>
              <li>S3</li>
              <li>Lambda</li>
              <li>Databases on AWS</li>
              <li>Serverless Services</li>
            </ul>
          </div>

          <a href="https://docs.google.com/forms/d/e/1FAIpQLSfMRilJSY7mWG7ByZw0FzGxF-A-nR3Cqpij6-_C1AlL4BoMyw/viewform?usp=sf_link">
            Register Now
          </a>
        </div>
        <div className="work-s_holder">
          <img className="workshop-img" src={workshop} alt="not found" />
        </div>
      </div>
    </div>
  );
}

export default Workshop;
