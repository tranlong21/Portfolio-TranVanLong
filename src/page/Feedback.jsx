import React from 'react';
import FormFeedabck from '../components/feedback/FormFeedabck';
import FireFliesBackground from '../components/share/FireFliesBackground';

import HomeButton from '../components/share/HomeButton';

export default function Feedback() {
  return (
    <div
      className="relative w-full min-h-screen flex items-center justify-center overflow-x-hidden"
      style={{
        backgroundImage: `url('${import.meta.env.BASE_URL}background/about-background.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <FireFliesBackground />
      <HomeButton />
      <div className="relative z-10 w-full max-w-3xl px-4 py-12">
        <FormFeedabck />
      </div>
    </div>
  );
}
