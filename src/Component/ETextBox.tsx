
interface IProps {
  placeholder: string;
}

export default function ETextBox( { placeholder }: IProps ) {

  return (
    <div className='e-text-box'>
        {/* <p className="label">City</p> */}
        <input className="input" placeholder={placeholder}/>
    </div>
  )
}
