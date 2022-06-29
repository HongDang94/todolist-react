import { useEffect, useState } from 'react';

const gifts =[
  "CPU", 
  "Iphone 13", 
  "Samsung S22", 
]

//1. useEffect(callback)
//Gọi callback mỗi khi component re-render
//Gọi callBack sau khi component thêm element vào DOM
//2. useEffect(callback, [])
// Chỉ gọi callback 1 lần sau khi component mouthed
//3. useEffect(callback, [deps])

//callback sẽ được goiij lại mỗi khi deps thay đổi 

//1. trong cả 3TH callback luôn được gọi sau khi component Mounted


function GiftDemo() {
  /** 
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
  */
  
  const tabs = ["posts", "comments", "albums"];
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [lists, setLists] = useState<any[]>([]);
  const [type, setType] = useState("posts")

  useEffect(() => {
    // document.title = title
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
    .then(res => res.json())
    .then(lists => {
      setLists(lists)
    }) 
  }, [type])



  // fetch('https://jsonplaceholder.typicode.com/posts')
  //   .then(res=> res.json())
  //   .then(posts=> {
  //     console.log(posts)
  //   }) 
    // vieet ngoafi UseEffect mooxi lần component Re-render lại thì lại gọi api lại
  

  return (
    <div>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && <h1>TEST Mounted</h1>}
      <input value={title} onChange={ e => setTitle(e.target.value)} type="text" placeholder="nhập text"/>
      <br></br>

      {tabs.map((tab) =>(
        <button key={tab} type="button" className={type === tab ? "active" : ""}  onClick={() => setType(tab)} > {tab}</button>
      ))}
      <ul>
        {lists.map(list => (
            <li key={list.id}>{list.title || list.name}</li>
        ))}
      </ul>
    </div>
  );
  
  }

export default GiftDemo;