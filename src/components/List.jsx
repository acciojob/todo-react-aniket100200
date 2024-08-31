import React from 'react';

const List = ({data,setData})=>{
    const deleteTask=(index)=>{
        setData(data.filter((item,i)=>i!=index));
        return;
    }
    return <ul style={{width:'500px'}}>
        {data.map((item,index)=>{
            return <li key={index} style={{display:"flex",width:'100%',gap:"20px"}}>
                <p>{item.text}</p>
                <button onClick={()=>{
                    deleteTask(index);
                }}>Delete</button>
            </li>
        })}
    </ul>
}

export default List;