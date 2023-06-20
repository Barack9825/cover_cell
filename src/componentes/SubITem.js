import React from "react";


function SubItem(props){
    const datas= props.data.map((element,index)=>{
        return(
        <p key = {index}>{element} <br></br></p>
        )
    })

    return(
        <>{datas}</>
    );
}

export default SubItem;