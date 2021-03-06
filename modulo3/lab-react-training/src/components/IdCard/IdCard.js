import React from 'react';

import './IdCard.css';

const genderEnum = {
  female: 'female',
  male: 'male',
};

const IdCard = ({
  lastName,
  firstName,
  gender,
  height,
  birth,
  picture,
}) => {
  const getBirthDate = date => date.toUTCString().split(' ', 4).join(' ');

  const getGender = gender => genderEnum[gender] ? genderEnum[gender] : 'unknown';

  const getHeight = height => height / 100;

  return (
    <div className="id-card-container">
      <img src={picture} alt={`${firstName} ${lastName} profile`}/>

      <div>
        <p><span>First name:</span> {firstName}</p>
        <p><span>Last name:</span> {lastName}</p>
        <p><span>Gender:</span> {getGender(gender)}</p>
        <p><span>Height:</span> {getHeight(height)}m</p>
        <p><span>Birth:</span> {getBirthDate(birth)}</p>
      </div>
    </div>
  );
};

export default IdCard;
