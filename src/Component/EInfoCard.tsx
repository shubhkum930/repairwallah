import "./component.scss";

interface IProps{
    title: string;
    description: string;
    image: string;
}

export default function EInfoCard({title, description, image}: IProps) {
  // const img = require("../assets/icons/call-dial-icon.jpg");
  return (
    <div className='e-info-card'>
        <img src={image} alt="" height={80} width={80}/>
        <div className="e-info-card-heading">{title}</div>
        <div className="e-info-card-sub-heading">{description}</div>
    </div>
  )
}
