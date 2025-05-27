import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const AnimatedText = () => {
  return (
    <span className="bg-gradient-to-r from-green-300 to-blue-500 bg-clip-text text-transparent opacity-80 text-3xl font-semibold">
      <Typewriter
        words={['Web Developer', 'Cybersecurity', 'UI/UX Designer']}
        loop={0}
        cursor
        cursorStyle="|"
        typeSpeed={90}
        deleteSpeed={50}
        delaySpeed={1000}
      />
    </span>
  );
};

export default AnimatedText;
