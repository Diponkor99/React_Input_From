const FromSateUp = () => {
    const handelSubmit = (e) =>{
        e.preventDefault();
         console.log('one submit')
         console.log(e.target.name.value)
         console.log(e.target.email.value)
         console.log(e.target.phone.value)
    }
    return (
        <div className="text-center ">
           <form onSubmit={handelSubmit} className="border-4 border-amber-900  my-5 p-3">
           <input type="text" placeholder="Name" className="input input-neutral my-2" name="name"/>
           <br />
           <input type="email" placeholder="Email" className="input input-neutral my-2" name="email"/>
            <br  />
            <input type="number" placeholder="Phone number" className="input input-neutral my-2" name="phone"/>
            <br  />
            <button className="bg-lime-300 py-1 px-3 rounded-md" type="submit">Submit</button>
           </form>
        </div>
    );
};

export default FromSateUp;