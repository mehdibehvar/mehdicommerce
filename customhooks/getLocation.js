import {useState,useEffect} from "react"
const useGeoLocation=()=>{
    const [location,setLocation]=useState({
        loaded:false,
        coordinates:{lat:"",
        lng:""}
    });

    const onSuccess=(location)=>{
       setLocation({
        loaded:true,
        coordinates:{
            lat:location.coords.latitude,
            lng:location.coords.longitude
        }
       })
    }
    const onError=(error)=>{
        setLocation({
            loaded:false,
            error
        })
    }
    useEffect(() => {
      if(!("geolocation" in navigator)){
        onError({
            code:0,
            message:"geolocation not suported"
          })
     
      }
     navigator.geolocation.getCurrentPosition(onSuccess,onError)

     
    }, [])
    return location;
}
export default useGeoLocation;