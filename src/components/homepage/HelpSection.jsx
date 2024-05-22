import React from 'react';
import clsx from 'clsx';
import HubCards from './HubCards'; // Import the HubCards component
import './HubCards.css'; // Import the CSS file for the HubCards

export default function HelpSection({ className = '' }) {
  return (
    <section className="px-3 ">
      <div
        className={clsx(
          'mx-auto max-w-1xl rounded-3xl bg-white p-4 py-10 text-black dark:bg-black dark:text-white lg:p-20 lg:py-20',
          className
        )}
      >
        <h2 className="mb-5 text-center lg:text-3xl">
          How can we help you today?
        </h2>
        <HubCards /> {/* Include the HubCards component here */}
      </div>
    </section>
  );
}
