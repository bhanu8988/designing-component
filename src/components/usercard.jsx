// write the component code here
// write the component code here
import React from 'react';

const Usercard = () => {
  const name = "Bhanu Teja Reddy Dodla";
  const email = "bhnauteja8988@example.com";
  const phone = "+91 9550655127";
  const address = "2/285 indlur penagalur kadapa AP";
  const profilePic = "https://media.licdn.com/dms/image/v2/D4E03AQG6aZf2CQSUrg/profile-displayphoto-shrink_400_400/B4EZTb5LyrGwAo-/0/1738855990023?e=1747872000&v=beta&t=ecDvMDv3jWNaRh5QL_5MI_UWkKlQStL8IryGlT0y_js";

  return (
    <div className="bg-white p-2 rounded-lg shadow-md w-36">
      <img
        src={profilePic}
        alt="Profile"
        className="w-10 h-10 rounded-full mx-auto"
      />
      <h2 className="text-black text-xs font-semibold mt-2">{name}</h2>
      <p className="text-gray-600 text-[8px]">{email}</p>
      <p className="text-gray-600 text-[8px]">{phone}</p>
      <p className="text-gray-600 text-[8px]">{address}</p>
    </div>
  );
};

export default Usercard;