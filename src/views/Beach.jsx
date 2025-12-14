import ViewButton from '../components/ViewButton.jsx';

import data from '../assets/data.json';

const Beach = () => {
  return (
    <div className='bg-yellow-700 mt-auto'>
      <div className='flex justify-end'>
        <ViewButton view='phone' />
      </div>
      <div className='flex flex-col items-center justify-center text-[12px] text-center'>
        <p>Last update: 12/13/2025</p>
        <p>Copyright © 2025 Tony Zhang. All Rights Reserved.</p>
      </div>
    </div>
  );
};
export default Beach;