import React,{useEffect, useState} from "react";
import './loading.styles.sass'

const Loading = ({time, isActive}) => {
    const [active, setActive] = useState(false)
    setActive(true)
    useEffect(() => {
        setTimeout(function(){
            setActive(false)
        }, time ? time : 1000)
    }, []);

    return <div className={`pageloader is-bottom-to-top ${ active ? 'is-active': ''}`} ><span className="title">Loading...</span></div>
}

export default Loading