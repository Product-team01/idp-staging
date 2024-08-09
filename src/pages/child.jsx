import React, { useEffect } from 'react';
// import { getCookie } from '../utils'; // Adjust the path as needed

const SupportSite = () => {
  useEffect(() => {
    const handleMessage = (event) => {
      if (event.origin !== 'http://localhost:8003') {
        // Make sure to check the origin of the message
        console.warn('Untrusted origin:', event.origin);
        return;
      }
      console.log('Message received from parent:', event.data);

      // Optionally, send a message back to the parent
      event.source.postMessage('Hello from iframe', event.origin);
    };

    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  useEffect(() => {
    // Log the value of the cookie set by the parent domain
    const cookieValue = getCookie('myCookie');
    console.log('Value of myCookie in iframe:', cookieValue);
  }, []);

  return (
    <div>
      <h1>Support Site</h1>
    </div>
  );
};

export default SupportSite;
