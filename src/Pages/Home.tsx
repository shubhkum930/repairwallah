import { useNavigate, useNavigation } from "react-router-dom";
import EButton from "../Component/EButton";
import EInput from "../Component/EInput";
import ETextBox from "../Component/ETextBox";
import Header from "../Component/Header";
import "./pages.scss";

export default function Home() {
  const navigation = useNavigate();
    /* An array of objects for input box. */
    let inputBox = [
      {
        label: "Select brand",
        placeholder: "Enter your city",
        options: [
          "Vivo",
          "Oppo",
          "Realme",
          "Samsung",
          "Apple",
          "OnePlus",
          "Xiaomi",
          "Asus",
          "Nokia",
          "Lenovo",
          "Motorola",
          "LG",
          "Micromax",
          "Honor",
          "HTC",
          "Sony",
          "Panasonic",
          "Gionee",
          "Blackberry",
          "Alcatel",
          "Infinix",
          "Tecno",
          "Vivo",
          "Gfive",
          "Lava",
          "Intex",
          "Xolo",
          "Meizu",
          "Karbonn",
          "Spice",
          "Yu",
          "ZTE",
          "Maxx",
          "Celkon",
          "iVooMi",
          "Swipe",
          "LeEco",
          "Xiaomi",
          "Asus",
          "Nokia",
          "Lenovo",
          "Motorola",
        ],
      },
      {
        label: "Describe your problem",
        placeholder: "Describe your problem",
        options: [
          "Screen is broken",
          "Battery is not working",
          "Charging port is not working",
          "Camera is not working",
          "Speaker is not working",
          "Headphone jack is not working",
          "Home button is not working",
          "Volume button is not working",
          "Touch is not working",
          "Water damage",
          "Software issue",
          "Other",
        ],
      },
    ];
  

  return (
    <>
      <Header />
      <div className="main-screen">
        <p className="heading">
          Rethink your <br />
          living & renting
        </p>
        <p className="sub-heading">Make your stay painless with us</p>

        <div className="card-for-input">
          <div className="input-fields">
            {/* <EInput />
            <EInput /> */}{
              inputBox.map((item, index) => {
                return <EInput key={index} label={item.label} placeholder={item.placeholder} options={item.options} />
              })
            }
            {/* <EInput /> */}
          </div>
          <div className="input-fields">
            <ETextBox placeholder="Model Name" />
            <EButton
              buttonText="Send Button"
            />
          </div>
        </div>
      </div>
    </>
  );
}
