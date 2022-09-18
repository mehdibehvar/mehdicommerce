import  { useEffect, useState } from 'react'

function useWindowResize() {
    const [size,setSize]=useState(window.innerWidth);
    const handleSize=()=>{
        setSize(window.innerWidth)
    }
    useEffect(()=>{
        window.addEventListener("resize",handleSize);
        return ()=>{
            window.removeEventListener("resize",handleSize);
        }
    },[])
  return size;
}

export default useWindowResize