import { useState } from "react";
import style from '../styles/Home.module.css'

const About = () => {
    const [input, setInput] = useState('');
    return (  
        <div className={style.main}>
            <h2>About페이지입니다</h2>
            <p>아래 input에 값을 넣으면 값이 바뀝니다. : {input}</p>
            <input type="text" onChange={(e)=>{setInput(e.target.value)}}></input>
        </div>
    );
}
 
export default About;