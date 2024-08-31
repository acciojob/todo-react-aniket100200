import React from 'react';

const Input = ({data,setData}) => {
    const[value,setValue] = React.useState('');
    const addToList=()=>{
        setData([...data,{text:value}]);
    }
    return <div>
    <input type={"text"} value={value} onChange={(e)=>{setValue(e.target.value)}}/>
        <button onClick={addToList}>Add Todo</button>
    </div>
}

export default Input;