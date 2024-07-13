import { useEffect, useState } from 'react'
import './LoremTextGenerator.css'
import LoremText from './lorem.json'

function LoremTextGenerator(){
   const [paragraphNumber, setParagraphNumber] = useState(0);
   const [paragraphs, setParagraph] = useState([]);

//    async function getText(paragraphNumber){
//     let text = await fetch(`https://baconipsum.com/api/?type=meat-and-filler&paras=${paragraphNumber}`);
//     // let text=await fetch('/lorem.json');
//     const res = await text.json();
//     setParagraph(res);
//     setParagraphNumber(0);
//    }
let paragraph = [];
    function getText(paragraphNumber){
     for(let i=0;i<paragraphNumber;i++){
         paragraph.push(LoremText[i].text);
     }
     setParagraph(paragraph);
     setParagraphNumber(0);
    }

    return (
        <>
        <div className='mainContainer'>
        <h1>TIRED OF BORING LOREM IPSUM ?</h1>
        <div className='inputContainer'>
            <label>Paragraphs : </label>
            <input type="number" value={paragraphNumber} onChange={(e)=> parseInt(e.target.value) >=0 ? setParagraphNumber(parseInt(e.target.value)):alert('Invalid Number!!')}/>
            <button onClick={()=> (paragraphNumber <= 25) && (paragraphNumber > 0) ? getText(paragraphNumber) : alert('Oops number is invalid, kindly give any valid value 😀')}>Generate</button>
        </div>
        <div className='paragraphs'>
        <ol>
        {paragraphs.map((paragraph, index) => (
                    <li key={index}>{paragraph}</li>
                ))}
        </ol>
        </div>
        </div>
        </>
    )
}
export default LoremTextGenerator;