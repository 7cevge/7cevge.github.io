import data from '../assets/data.json'

const Hero = ({ size = 'text-[8vw]' }) => {
  return (
    <div className='flex items-center justify-center'>
      <h1 className={`uppercase text-center text-black font-bold hero-glow text-nowrap mt-4
        ${size}`}>
        &lt; {data.stats.name} &gt;
      </h1>
    </div>
  );
};
export default Hero;