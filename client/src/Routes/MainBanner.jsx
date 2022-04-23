import React from "react";
import {  useParams,Redirect,useHistory  } from 'react-router-dom';

function MainBanner() {
  const history = useHistory();
  
const routeChangeLogin = () =>{ 
  let path = `/login`; 
  history.push(path);
}
  return (
 
    <section class="section main-banner" id="top" data-section="section1">
    <video autoPlay muted loop id="bg-video">
        <source src="../assets/images/course-video.mp4" type="video/mp4" />
    </video>

    <div class="video-overlay header-text">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="caption">
              <h6>LevelUp Today!</h6>
            <h2>Making e-learning more human and unique.</h2>
            <p>Through our e-learning platform, we aim to deliver a unique experience to all our learners, instructors, and partners! With LevelUp, you can reach all your goals while ensuring a fun and personalized journey thanks to our interactive chatbot and collaborative forums and live sessions.</p>
            <div class="main-button-red">
                <div class="scroll-to-section"><a  onClick={routeChangeLogin}>Join Us Now!</a></div>
            </div>
        </div>
            </div>
          </div>
        </div>
    </div>
</section>
  );
}

export default MainBanner;
