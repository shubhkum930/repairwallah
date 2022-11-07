import React from "react";
import { useNavigate, useNavigation } from "react-router-dom";
import EInfoCard from "../Component/EInfoCard";
import Header from "../Component/Header";

export default function ContactUs() {
  const navigation = useNavigate();
  return (
    <>
      <Header />
      <div className="contact-us-page">
        {/* <p className="heading">Contact Us</p>
        <p className="sub-heading">We are here to help you</p> */}
        <EInfoCard
         title="Call Us"
          description="910101010101"
          image={require("../assets/icons/call-dial-icon.jpg")}
        />
        <EInfoCard
          title="Email Us"
          description="repairwallah@mail.com"
          image={require("../assets/icons/email-icon.jpg")}
        />
        <EInfoCard
          title="Chat with Us"
          description="91919919199"
          image={require("../assets/icons/whatsapp-icon.jpg")}
        />
      </div>
    </>
  );
}
