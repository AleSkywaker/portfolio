import React, { useState, useEffect } from 'react';

const Age = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('2008-03-22T09:24:00');
    setAge(((Date.now() - birthTime) / divisor).toFixed(7));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{age}</>;
};

const data = [
  {
    key: 'age',
    label: 'Years programming',
    value: <Age />,
  },
  {
    key: 'countries',
    label: 'Countries visited',
    value: '6',
  },
  {
    key: 'location',
    label: 'Current city',
    value: 'Valencia, Spain',
  },
];

export default data;
