import {useState,useEffect} from 'react';


const useDebounce = (value,delay=1000) => {
  const [debouce,setDebounce] = useState(value)
 
  useEffect(()=>{
    const TimeOut = setTimeout(()=>{
      setDebounce(value)
    },delay)

    return ()=>{
        clearTimeout(TimeOut)
    }
  },[value,delay]);

  return debouce;
}

export default useDebounce
