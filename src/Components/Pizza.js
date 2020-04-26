import React from 'react';

const Pizza = props => {        
    return (
        <div  style={{padding:'10px'}} className = "col-md-4"  key={props.item.id}>
            <img  style={{height:'220px', width:'225px'}} src={`${process.env.PUBLIC_URL}/images/${props.item.name}.png`}></img>
            <p>{props.item.name}</p>
            <button onClick={()=>{props.addPizza(props.item)}} >Add</button>
        </div>
    )
};

export default Pizza;

