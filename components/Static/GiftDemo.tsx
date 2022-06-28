import React, { useState, useEffect } from 'react';

const gifts =[
  "CPU", 
  "Iphone 13", 
  "Samsung S22", 
]

function GiftDemo() {
  const [gift, setGift] = useState('Chưa có phần thưởng');
  const [inputValue, setInputValue] = useState('')

  function handleRandom() {
    setGift(gifts[Math.floor(Math.random() * gifts.length)])
  }

  console.log(inputValue)

  return (
    <div style={{padding: "40px"}}>
      <h1>{gift}</h1>
      <button onClick={handleRandom}>Random phần thưởng </button><br />
      <input onChange={ e => setInputValue(e.target.value)} style={{marginTop: "30px",padding: "10px"}} placeholder='dien ten' />
    </div>
  );
  
  
  }

export default GiftDemo;