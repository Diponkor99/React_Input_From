import React from 'react';

const ResuableFrom = ({ButtonText="Submit", children, handeldata}) => {

    const handelonsubmit= e=>{

        e.preventDefault()
        const data={
            name:e.target.name.value,
            email:e.target.email.value,
            phone:e.target.phone.value
        }
       
        handeldata(data)
    }


    return (
        <div className='mx-auto p-3 bg-amber-200 md:w-1/4 rounded-xl my-5 border-4 border-amber-900  my-5 p-3'>
            {children}
            <form onSubmit={handelonsubmit}>
                <input type="text" placeholder="Name" className="input input-neutral my-2" name="name" />
                <br />
                <input  type="email" placeholder="Email" className="input input-neutral my-2" name="email" />
                <br />
                <input type="number" placeholder="Phone number" className="input input-neutral my-2" name="phone" />
                <br />
                 <button className="bg-lime-300 py-1 px-3 rounded-md w-full">{ButtonText}</button>
            </form>
        </div>
    );
};

export default ResuableFrom;