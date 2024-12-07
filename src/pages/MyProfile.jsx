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

  const [isEdit, setIsEdit] = useState(false);
  return (
    <div>
      <img src={userData.image} />

      {isEdit ? (
        <input
          type="text"
          value={userData.name}
          onChange={(e) =>
            setUserData((prev) => ({ ...prev, name: e.target.value }))
          }
        />
      ) : (
        <p>{userData.name}</p>
      )}

      <hr />
      <div>
        <p> CONTACT INFORMATION</p>
        <div>
          <p>Email id:</p>
          <p>{userData.email}</p>
          <p>phone:</p>

          {isEdit ? (
            <input
              type="text"
              value={userData.phone}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, phone: e.target.value }))
              }
            />
          ) : (
            <p>{userData.phone}</p>
          )}
          <p>Address:</p>
          {
            isEdit?<p>
              <input onChange={(e)=>setUserData( prev=>({...prev, address:{...prev, address, line1:e.target.value}}))} value={userData.address.line1} type="text" />
              <br/>
              <input onChange={(e)=>setUserData( prev=>({...prev, address:{...prev, address, line2:e.target.value}}))} value={userData.address.line2} type="text" />
              </p>
            :<p>
              {userData.address.line1}
              <br />
              {userData.address.line2}
            </p>
          }
        </div>
      </div>

      <div>
        <p>BASIC INFORMATION</p>

        <div>
          <p> Gender</p>

        </div>
      </div>
    </div>
  );
};

export default MyProfile;
