import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'
const Countrycodes = () => {

    const [PhoneNumber, setPhoneNumber] = useState('');

    const handleChange = (value)=>{
        setPhoneNumber(value);
    }

  return (  
    <div className="p-10">
      <PhoneInput
      country={"us"}
      inputProps={{
        required:true,
      }}
        type="text"
        value={PhoneNumber}
         />
    </div>
  );
};

export default Countrycodes;
