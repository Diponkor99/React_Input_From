import React, { useEffect, useRef } from 'react';

const UseRef__From = () => {
    const nameRef=useRef(null);
    const emailRef=useRef(null);
    const PasswordRef=useRef(null);
    const handelOnClick=(e)=>{
        e.preventDefault();
           console.log(nameRef.current.value)
           console.log(emailRef.current.value)
           console.log(PasswordRef.current.value)
    }

    // Ato focus add
useEffect(()=>{
    nameRef.current.focus();
},[])
    return (
        <div >
            <form onClick={handelOnClick} className='m-4 bg-lime-200 p-2 rounded-md md:w-3/6 mx-auto'>
               <input ref={nameRef} type="text" className='input my-2 ' placeholder='Name' />
               <br />
               <input ref={emailRef} type="email" className='input my-2' defaultValue={} placeholder='Email' />
               <br />
               <input ref={PasswordRef} type="password" className='input my-2' placeholder='Password' />
               <br />
              
              <button className='btn bg-emerald-500 '>Submit</button>
            
            </form>
        </div>
    );
};

export default UseRef__From;