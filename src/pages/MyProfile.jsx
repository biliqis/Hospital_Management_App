import React, { useState } from "react";
import { assets } from "../components/assets/assets/assets";

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "Edward Vicent",
    image: assets.profile_pic,
    email: "richardjameswap@gmail.com",
    phone: "+1 123 456 789",
    address: {
      line1: "57th Cross, Richmond ",

      line2: "Circle, Church Road, London",
    },
    gender: "Male",
    dob: "200-01-2020",
  });
  return (
    <div>
      <img src={userData.image} />
    </div>
  );
};

export default MyProfile;
