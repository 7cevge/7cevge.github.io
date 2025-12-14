import { useState } from 'react'

import Hero from './components/Hero.jsx';
import Space from './views/Space.jsx';
import Ocean from './views/Ocean.jsx';
import Beach from './views/Beach.jsx';
import Terminal from './views/Terminal.jsx';


function App() {
  return (
    <div className='flex flex-col h-screen'>
      <Hero />
      <Space />
      {/* terminal for testing, will remove later */}
      <Terminal />
      <Ocean />
      <Beach />
    </div>
  );
};

export default App;
