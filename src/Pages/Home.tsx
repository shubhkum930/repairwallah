import { useNavigate, useNavigation } from "react-router-dom";
import EButton from "../Component/EButton";
import EInput from "../Component/EInput";
import ETextBox from "../Component/ETextBox";
import Header from "../Component/Header";
import "./pages.scss";

export default function Home() {
  const navigation = useNavigate();

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
            <EInput />
            <EInput />
            <EInput />
          </div>
          <div className="input-fields">
            <ETextBox />
            <EButton />
          </div>
        </div>
      </div>
    </>
  );
}
