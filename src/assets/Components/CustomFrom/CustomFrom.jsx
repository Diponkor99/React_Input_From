import useInputValue from "../../../Hook/UseInputFrom";

const CustomFrom = () => {  
    const [name ,onChangeName]=useInputValue()
    const [email, onchangeEmail]=useInputValue()
    const [password ,onchangePassword]=useInputValue()
    const handelOnsubmit= e=>{
        e.preventDefault()
        alert(`Welcome  ${name} your website` )
        console.log("Name:",name)
        console.log("Name:",email)
        console.log("Name:",password)
    }

    return (
        <div className='text-center border-4 border-amber-900  my-5 p-3'>
            <form onSubmit={handelOnsubmit}>
                <input  onChange={onChangeName}  type="text" placeholder="Name" className="input input-neutral my-2" name="name" />
                <br />
                <input  onChange={onchangeEmail}  type="email" placeholder="Email" className="input input-neutral my-2" name="email" />
                <br />
                <input onChange={onchangePassword} type="number" placeholder="Phone number" className="input input-neutral my-2" name="phone" />
                <br />
                <button className="bg-lime-300 py-1 px-3 rounded-md" type="submit">Submit</button>
            </form>
        </div>
    );
};

export default CustomFrom;