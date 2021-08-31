import React from 'react';
import Fade from 'react-reveal/Fade';
import Button from 'elements/Button';

export const LandingPage = ({ currentUser }) => {
  return (
    <div className="text-center">
      Landing Page
      <Fade delay={400}>
        <div className="d-flex justify-content-center ">
          <Button className="btn px-5 mx-2" href="/login" type="link" isPrimary>
            Login
          </Button>
          <Button className="btn px-5 " href="/signup" type="link" isPrimary>
            Signup
          </Button>
        </div>
      </Fade>
    </div>
  );
};

export default LandingPage;
