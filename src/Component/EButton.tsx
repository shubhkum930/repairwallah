import {BsSearch} from 'react-icons/bs';

interface IProps{
    buttonText: string;
}

export default function EButton( { buttonText } : IProps ) {


  return (
    <div className='e-button'>
    {/* <BsSearch className="icon"/> */}
    <span>{buttonText}</span>
    </div>
  )
}
