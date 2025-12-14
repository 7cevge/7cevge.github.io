import ViewButton from '../components/ViewButton.jsx';

const Space = () => {
  return (
    <div>
      <p>stars</p>
      <p>station</p>
      <ViewButton view='terminal' />
      <ViewButton view='astronaut' />
      <ViewButton view='cabinet' />
      <ViewButton view='phone' />
    </div>
  );
};
export default Space;