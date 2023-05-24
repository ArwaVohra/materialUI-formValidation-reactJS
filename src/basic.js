// BASIC CODE FOR REACT FORM VALIDATION WITHOUT UI



import React from 'react';
import { useState } from 'react';

function App() {
  const [state, setState] = useState({
    name: "",
  })
  const [errors,setErrors] = useState({})
  const formValidation = () => {

    const { name } = state
    let isValid = true

    let newErrors = {}

    if (!name){
      newErrors.name = "Name is required"
      isValid = false
    }
    setErrors(newErrors)
    return isValid
    

  }
  const onSubmitDo = (e) => {
    e.preventDefault();
  
    console.log("clicked")
    let isValid = formValidation();
  }
  const onChangeDo = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })






  }
  return (
    <div>
      <form onSubmit={onSubmitDo} >
        Name :  <input type="text" name="name" placeholder='Enter Your Name' onChange={onChangeDo} />
        <span style={{ color: "red" }}  >{errors.name} </span>
        <br/>
        <input type="submit" value="submit" />
      </form>
    </div>
  )
}

export default App;