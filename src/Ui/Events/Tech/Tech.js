import React from "react";
import Evnetlayout from "../Evnetlayout";
import "./Tech.css";

function Tech() {
  return (
    <div className="Tech">
      <center>
        <h1>Technical Events</h1>
      </center>
      <div className="Components">
        <Evnetlayout
          src={
            "https://kanbanzone.com/wp-content/uploads/2020/10/team-meeting.jpg"
          }
          time="9-12'o"
          Name="Paper Presentation"
          detail="Each paper presentation will be maximum of 12 minutes in length and will be followed by brief question and answer period of approximately 3 minutes."
        />
        <Evnetlayout
          src={
            "https://www.einfochips.com/blog/wp-content/uploads/2021/10/Real-Time_Advanced_Debugging_using_Code_Composer_Studio_Blog_Fetaured_Image.jpg"
          }
          time="9-12'o"
          Name="Debugging"
          detail="During the competition participates are required to solve the proposed problem.
,	A solution to a problem is a program written in one of the supported programming languages.
"
        />
        <Evnetlayout
          src={
            "https://www.investintech.com/resources/blog/wp-content/uploads/2021/09/Tech-Quiz-Test-Your-Knowledge-While-Having-Fun.jpg"
          }
          time="9-12'o"
          Name="Technical Quiz"
          detail="Put your knowledge about all things technology to the test with our  questions tech quiz and have some nerdy fun in the process. Good luck!."
        />
        <Evnetlayout
          src={
            "https://img.freepik.com/free-vector/layout-designer-online-service-platform-web-development-mobile-app-design-optimization-user-interface-template-webbased-platform-flat-vector-illustration_613284-2737.jpg?w=2000"
          }
          time="9-12'o"
          Name="Web And App Design"
          detail="Set of instruction tells a machine which action to perform and how to complete a task,Within 15 minutes you have to code and execute successfully"
        />
        <Evnetlayout
          src={
            "https://ethos3.com/wp-content/uploads/2015/12/slideshare-presentation-ideas.jpg"
          }
          time="9-12'o"
          Name="Idea Presentation"
          detail="Present your own imaginary creativity based on technology."
        />
      </div>
    </div>
  );
}

export default Tech;
