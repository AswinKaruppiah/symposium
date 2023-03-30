import React from "react";
import "./Footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailIcon from "@mui/icons-material/Mail";

function Footer() {
  return (
    <footer className="footer">
      <center>
        <div className="ordinator">
          <div>
            <h1>Events</h1>
            <p>Non-Technical</p>
            <p>Technical</p>
            <p>WorkShop</p>
            <div>
              <h1>Contact As</h1>
              <a href="https://www.instagram.com/codefest_23/">
                <InstagramIcon sx={{ fontSize: 40 }} />
              </a>
              <a href="mailto:kvcodefest23@gmail.com">
                <MailIcon sx={{ fontSize: 40 }} />
              </a>
            </div>
          </div>
          <div>
            <h1>Co-ordinator staff :</h1>
            <p>
              Dharani ( Asst professor): <span>9361329244</span>
            </p>
            <p>
              Pavithra ( Asst professor): <span>9894065166</span>
            </p>

            <h1>Students Co ordinator :</h1>
            <p>
              Prakash Raj: <span>6383505835</span>
            </p>
            <p>
              Dhanush:<span>9344641463</span>
            </p>
          </div>
        </div>
        <hr />
        <p className="cp">© Created by Symposium Team 2023</p>
      </center>
    </footer>
  );
}

export default Footer;
