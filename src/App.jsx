import './App.css'
import ResuableFrom from './assets/Components/ResusableFrom/ResuableFrom'
import CustomFrom from './assets/Components/CustomFrom/CustomFrom'
import FromSateUp from './assets/Components/FromSateup/FromSateUp'
import UseRef__From from './assets/Components/UseRef__From/UseRef__From'
import UseState_From from './assets/Components/UseState_Form/UseState_From'

function App() {
  const handelLogin=(data)=>{
   
 console.log('data all paid',data)
 alert("Log in data ")
  }

  const handeloneUpdate= data=>{
   
    console.log("Update date",data)
    alert("update date success")
  }
  return (
    <>
      <h1>Vite + React</h1>
      <FromSateUp></FromSateUp>
      <UseState_From></UseState_From>
      <UseRef__From></UseRef__From>
      <CustomFrom></CustomFrom>

       <ResuableFrom   handeldata={handelLogin}>
        <div>
          <h1>Log in </h1>
          <p>placese your parsonal information </p>
        </div>
       </ResuableFrom>
       <ResuableFrom  ButtonText='Update'  handeldata={handeloneUpdate} >
        <div>
          <h1>Update </h1>
          <p>Update your parsonal information</p>
        </div>
       </ResuableFrom>

       
    </>
  )
}

export default App
