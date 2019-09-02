import React ,{useState}from 'react';


function App(props) {
    const [count,setCount] = useState(0)
    return (
        <div>
            <div>你点击了多少次,{count}</div>
            <div>
                <button onClick={()=>{setCount(count+1)}}>点击加一</button>
                <button onClick={()=>{setCount(count-1)}}>点击减一</button>
            </div>
        </div>
    );
}

export default App;