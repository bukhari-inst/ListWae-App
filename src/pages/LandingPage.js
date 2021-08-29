import React from 'react';
import Button from 'elements/Button';

export const LandingPage = ({ currentUser }) => {
  return (
    <div className="text-center">
      Landing Page
      <div className="d-flex justify-content-center">
        <Button className="btn px-5 " href="/login" type="link" isPrimary>
          Login
        </Button>
      </div>
    </div>
  );
};

export default LandingPage;
