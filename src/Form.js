import React, { useState } from 'react'

const Form = () => {
    const data ={name:"",email:"",password:""};
    const [inputData,setInputData]= useState(data)
    function handleData (e){
        setInputData({...inputData,[e.target.name]:e.target.value})
        console.log(inputData);
    }
    function handleSubmit(e){
        e.preventDefault();
        if (!inputData.name || !inputData.email || !inputData.password){
            alert("All fields are mandatory")
        }
        if (!inputData.name || !inputData.email || inputData.password){
            alert("All fields are mandatory")
        }
        if (!inputData.name || inputData.email || !inputData.password){
            alert("All fields are mandatory")
        }
        if (inputData.name || !inputData.email || !inputData.password){
            alert("All fields are mandatory")
        }
        else {
            alert("form has been submitted")
        }
    }
  return (
    <form onSubmit={handleSubmit} className='form'>
        <div>
            <h1>Registration form</h1>
        </div>
        <div>
            <input type='text' placeholder='enter your name'name='name' value={inputData.name} onChange={handleData}></input>
        </div>
        <div>
            <input type='text' placeholder='enter your email'name='email'value={inputData.email} onChange={handleData}></input>
        </div>
        <div>
            <input type='text' placeholder='enter your paswword'name='password'value={inputData.password} onChange={handleData}></input>
        </div>
        <div>
            <button type='submit' className='button'>submit</button>
        </div>
    </form>
    
  )
}

export default Form