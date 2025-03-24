import React, { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const TawkTo = () => {
  const location = useLocation();
  const params = useParams(); // Extract dynamic route parameters
  const user = useSelector((state) => state.auth.user); // Assuming user info is stored in Redux

  useEffect(() => {
    // Check if the current route is an auth route
    const isAuthRoute = location.pathname.startsWith('/auth');

    // If it's an auth route, do nothing
    if (isAuthRoute) {
      return;
    }

    // Function to add the Tidio script with the new URL
    const addTidioScript = () => {
      const script = document.createElement('script');
      script.src = '//code.tidio.co/i9gcdo95xgjqmarw8qupdiin77oltiid.js';
      script.async = true;
      document.body.appendChild(script);
    };

    // Remove existing script if any (with the new URL)
    const removeTidioScript = () => {
      const existingScript = document.querySelector('script[src="//code.tidio.co/i9gcdo95xgjqmarw8qupdiin77oltiid.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };

    removeTidioScript(); // Ensure no duplicate scripts
    addTidioScript();
  }, [location.pathname, user, params]); // Re-run when the route, user info, or params change

  return null; // This component doesn't render anything
};

export default TawkTo;
