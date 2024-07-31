// src/components/RbacPermissions.js
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

const RbacPermissions = () => {
  const [permissions, setPermissions] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const fetchPermissions = async () => {
      try {
        const response = await fetch('https://app-backend.use1.vue.ai/api/v1/rbac_user_permissions/9de18c87-2ed7-44c1-a307-180f506d6017/', {
          method: 'GET',
          headers: {
            'Accept': '*/*',
            'Accept-Language': 'en-GB,en-US;q=0.9,en;q=0.8',
            'Authorization': 'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJManhnbGY2OUV0RnVPdGsyRDVnbVNuWkRKOENzSjVzMEVTendzLWZ6UnVVIn0.eyJleHAiOjE3MjI0MDY3MzIsImlhdCI6MTcyMjMyMDMzMiwiYXV0aF90aW1lIjoxNzIyMzIwMzI4LCJqdGkiOiJjZTQ0MDRlNS1mNzM0LTRmNWItYWVjZi1kYzJlZDdlMjU5NjUiLCJpc3MiOiJodHRwczovL3Nzby1wcm90by51c2UxLnZ1ZS5haS9yZWFsbXMvUkJBQyIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiJhN2E5YjI1MS1mOGI4LTQyMTQtOTkzNC04MmRhMGFjNmM3NjQiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJhcHAtZ29vZ2xlLXNpZ25pbiIsInNlc3Npb25fc3RhdGUiOiI3Yjc5ZWMzMy05MDVmLTQyMWQtOTM1Zi0wMDZhMmNhMDFlNDYiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbImh0dHBzOi8vcmJhYy1wcm90by51c2UxLnZ1ZS5haSJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiZGVmYXVsdC1yb2xlcy1yYmFjIiwib2ZmbGluZV9hY2Nlc3MiLCJ1bWFfYXV0aG9yaXphdGlvbiJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwiLCJzaWQiOiI3Yjc5ZWMzMy05MDVmLTQyMWQtOTM1Zi0wMDZhMmNhMDFlNDYiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsIm5hbWUiOiJTaWxhcyAgQXNoYXIiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJzaWxhc0BtYWRzdHJlZXRkZW4uY29tIiwiZ2l2ZW5fbmFtZSI6IlNpbGFzICIsImZhbWlseV9uYW1lIjoiQXNoYXIiLCJlbWFpbCI6InNpbGFzQG1hZHN0cmVldGRlbi5jb20ifQ.uZ9xo7ZOQgpCrUAmyykh3BT-EZiHxGS_-XBDHYKA1INKgTcFrQqd8ZLrfCRIAzIgUt3uMUt4-0EAzDIf5axtSTfqYMYs6JhG9FhewwJP3kudmStRFRkV0YzSWc152JqSakL2uc-tM27q4RuunZMMGTxJWEXIQ907aNlqWyu0E9s34GeCLDmPA9xtL6pzu5xAR7c6RQ8-_0zcivD_sC5WXufLZOpD6ZHw3OA2tJBvJ16nFZeKeNajL-ULNfqPwW-e3lT_2W7T0Bgc3i7v9tNCo2RVc3JOM_RCMJIA4dRSsACpmsU6C-VyYaYlnRAtDz-tFiBW4dyo8Vnep2nwavX2hQ',
            'Connection': 'keep-alive',
            'Content-Type': 'application/json',
            'Origin': 'https://app.vue.ai',
            'Referer': 'https://app.vue.ai/',
            'Sec-Fetch-Dest': 'empty',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Site': 'same-site',
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
            'x-account-id': '2bb7d1b8-18af-49ed-a384-1e240c9bbbe9',
            'x-keycloak': 'true',
            'x-user-id': '9de18c87-2ed7-44c1-a307-180f506d6017',
          },
        });

        if (response.status === 401 || response.status === 403) {
          // Unauthorized or Forbidden
          history.push('/');
        }

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setPermissions(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPermissions();
  }, [history]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2>User Permissions</h2>
      <pre>{JSON.stringify(permissions, null, 2)}</pre>
    </div>
  );
};

export default RbacPermissions;
