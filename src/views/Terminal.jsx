import { useState } from "react";

import Hero from "../components/Hero.jsx";

import data from '../assets/data.json';

const Terminal = () => {
  const [showView, setShowView] = useState(true);

  return (
    <div className='bg-second/30 border-2 border-prim rounded-2xl p-2
    m-4'>
      <div>
        <button>power</button>
        <button>search</button>
      </div>
      <div>
        <Hero size='text-[4vw]'/>
        <div>
          <h2>Introductions</h2>
          <p></p>
        </div>
        <div>
          <h2>Projects</h2>
        </div>
        <div>
          <h2>Technology Stack</h2>
        </div>
        <div>
          <h2>Certifications</h2>
        </div>
        <div>
          <h2>Timeline</h2>
        </div>
        <div>
          <h2>Contacts</h2>
        </div>
      </div>
      <div>
        <button>intro</button>
        <button>projects</button>
        <button>tech</button>
        <button>cert</button>
        <button>timeline</button>
        <button>contacts</button>
      </div>
    </div>
  );
};
export default Terminal;