 import React, { useEffect, useState } from 'react';
import Head from '@docusaurus/Head';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

// remove these
const cUserName = 'idp';
const cPassword = '12345678';

export default function Root({ children }) {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoginLoading, setIsLoginLoading] = useState(true);

  const loginWithSSO = () => {
    // instead do api calls here to authenticate with backend or SSO services
    if (userName === cUserName && cPassword === password) {
      setIsLoggedIn(true);
      // set isLoggedIn flag in local storage to know the status of auth on app restart
      // or Set the auth token to the local storage
      localStorage.setItem('isLoggedIn', true);
      return;
    }

    alert('invalid password');
  };

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn');
    setIsLoggedIn(!!loggedIn);
    setIsLoginLoading(false);
  }, []);

  if (isLoginLoading) {
    return <>loader</>;
  }

  if (!isLoggedIn) {
    return (
      <>
        <Head>
          {/* Google Tag Manager - add GTM script in head */}
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-MXRHJT4S');`,
            }}
          />
        </Head>

        <div>
          <form>
            <input
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button onClick={loginWithSSO}>Login </button>
          </form>
        </div>
        {ExecutionEnvironment.canUseDOM && (
          // Google Tag Manager (noscript) - add GTM noscript after opening <body>
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MXRHJT4S"
          height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
            }}
          />
        )}
      </>
    );
  }

  return (
    <>
      <Head>
        {/* Google Tag Manager - add GTM script in head */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-MXRHJT4S');`,
          }}
        />
      </Head>
      {children}
      {ExecutionEnvironment.canUseDOM && (
        // Google Tag Manager (noscript) - add GTM noscript after opening <body>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MXRHJT4S"
          height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
      )}
    </>
  );
}