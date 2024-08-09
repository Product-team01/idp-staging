import React, { useEffect } from 'react';
import { getCookie } from './utils'; // Adjust the path as needed

const SupportSite = () => {
  useEffect(() => {
    const handleMessage = (event) => {
      if (event.origin !== 'http://localhost:8003') {
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
    // Get cookies set by the parent application
    const authToken = getCookie('Auth-Token-IDP');
    const accountId = getCookie('Account-Id-IDP');
    const userId = getCookie('User-Id-IDP');
    console.log('Auth-Token-IDP in iframe:', authToken);
    console.log('Account-Id-IDP in iframe:', accountId);
    console.log('User-Id-IDP in iframe:', userId);

    // Make an API request with the retrieved cookies
    const makeApiRequest = async () => {
      try {
        const response = await fetch('https://app-backend.use1.vue.ai/api/v1/rbac_user_permissions/ef3e8081-c16d-49e4-8725-25e1aa3442d4/', {
          method: 'GET',
          headers: {
            'Authorization': authToken,
            'x-account-id': accountId,
            'x-user-id': userId,
            'Content-Type': 'application/json',
          },
        });

        const data = await response.json();
        console.log('API Response:', data);

        if (!response.ok) {
          console.error('Error fetching data:', data);
        }
      } catch (error) {
        console.error('Network error:', error);
      }
    };

    makeApiRequest();
  }, []);

  return (
    <div>
      
    </div>
  );
};

export default SupportSite;
