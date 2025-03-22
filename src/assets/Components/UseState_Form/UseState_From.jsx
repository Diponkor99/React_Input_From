import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
const UseState_From = () => {
    const notify = () => toast('Successful your contact!');
    const [tost, setTost] = useState(false)
    //error
    const [error, setError] = useState()
    // Email Error
    const [emailError, setemailError] = useState()

    const handelClickButton = (e) => {
        e.preventDefault();
        // password error
        if (password.length == 6 && /^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email)) {
            console.log(name, ",", email,"", phone, ",", password)
            setTost(true)
            setError('')
            setemailError(" ")
        }
        else {
            setTost(false)
            if(password.length !== 6){
                setError('Password will be Six Digit')
            }
            else{
                setemailError('Gmail is not valid')
            }
        }
    }
    // Name
    const [name, setName] = useState(null);
    const handelName = e => {
        setName(e.target.value)
    }
    // Your Email
    const [email, setEmail] = useState(null);
    const handelEmailChange = e => {

        setEmail(e.target.value)

    }
    // Your Phone Number
    const [phone, setPhone] = useState(null);
    const handelPhoneChange = e => {
        setPhone(e.target.value)
    }
    // Your Password
    const [password, setPasword] = useState(null);
    const handelPasswordChange = e => {
        setPasword(e.target.value)
    }



    return (
        <div className=' mx-auto w-full md:w-2/4 '>
            <form onSubmit={handelClickButton} className='justify-center grid mx-1 '>

                <div className="rounded-2xl p-4 flex-1/2 bg-[url('https://i.ibb.co.com/XfzCjNDK/pexels-padrinan-255379.jpg')] bg-repeat bg-center">
                    <h1 className='font-extrabold text-3xl my-5 '>Schedule Your Call Now!</h1>
                    <div className='flex  gap-2 my-2 '>
                        <div className=' w-1/2 '>
                            <h1 className='text-xl font-medium'>Your Name</h1>

                            <input onChange={handelName} type="text" placeholder="Your Name" className="input w-full justify-start" required />
                        </div>
                        <div className='w-1/2'>
                            <h1 className='text-xl font-medium'>Your Email</h1>
                            <input onChange={handelEmailChange} type="text" placeholder="Your Email" className="input w-full " required />
                        </div>
                    </div>

                    <div className='flex  gap-2 my-2'>
                        <div className='w-1/2'>
                            <h1 className='text-xl font-medium'>Your Phone</h1>
                            <input onChange={handelPhoneChange} type="number" placeholder="Phone Number" className="input w-full" required />
                        </div>
                        <div className='w-1/2'>
                            <h1 className='text-xl font-medium'>password</h1>
                            <input onChange={handelPasswordChange} type="password" placeholder="password" className="input w-full" required />
                        </div>
                    </div>
                    <h1 className='text-xl font-medium my-2'>Time</h1>
                    <input type="text" placeholder="Time" className="input w-full" />


                    <fieldset className="fieldset mb-10">
                        <legend className="fieldset-legend text-xl font-medium">Message</legend>
                        <textarea className="textarea h-24 w-full" placeholder="Message"></textarea>

                    </fieldset>
                    <div>
                        <button onClick={notify} className='btn w-full bg-gradient-to-r from-pink-400 to-amber-400 hover:from-amber-500 hover:to-pink-500 transition-all duration-300 font-bold text-2xl py-7 rounded-xl mb-5'>sent</button>
                        {tost ? <ToastContainer /> : ""}

                    </div>
                    {error ? <div className='text-red-600 text-center'>{error}</div> : " "}

                    {emailError ? <div className='text-red-600 text-center' >{emailError}</div> : ""}
                </div>



            </form>
        </div>
    );
};

export default UseState_From;