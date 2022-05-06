import React,{ useEffect, useState } from "react";

const test = ()=>{
    const [data, setData] = useState(null)


    useEffect(()=>{
        fetch('http://localhost:3000')
        .then(res =>{
            return res.json()
        })
        .then((data)=>{
            console.log(data)
            setData(data)
        })
    }, [])
}