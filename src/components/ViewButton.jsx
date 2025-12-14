import { MdImageNotSupported } from "react-icons/md";

const ViewButton = ({view = ''}) => {
  switch(view) {
    case 'terminal':
      return (
        <button>overview</button>
      );
    case 'astronaut':
      return (
        <button>stats</button>
      );
    case 'cabinet':
      return (
        <button>projects</button>
      );
    case 'phone':
      return (
        <button>contacts</button>
      );
    default:
      return (
        <button>label</button>
      );
  }
};
export default ViewButton;