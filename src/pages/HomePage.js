import React from 'react';
import { auth } from 'config/Firebase';
import Button from 'elements/Button';

export const HomePage = () => {
  const handleLogout = () => {
    auth.signOut().then(() => {
      window.location.reload();
    });
  };

  return (
    <div className="text-center">
      HomePage{' '}
      <div className="d-flex justify-content-center">
        <Button className="btn px-5" isPrimary onClick={handleLogout}>
          LOGOUT
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
