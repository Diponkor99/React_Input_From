import { useState } from "react"

const useInputValue = ()=>{
    const [value,setvalue]=useState();
    const onchangeHook =val=>{
        setvalue(val.target.value)
    }
    return [value ,onchangeHook]
}
export default useInputValue ;