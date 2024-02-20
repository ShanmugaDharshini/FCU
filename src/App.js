import './App.css';
import Select from "react-select";
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';


// Define a new component to display the form data
// Define a new component to display the form data
// Define a new component to display the form data
function FormDataDisplay() {
  const location = useLocation();
  const formData = location.state ? location.state.formData : null;
  
  return (
    <div>
      <h1>Form Data</h1>
      {formData && (
        <div>
          <pre>{JSON.stringify(formData, null, 2)}</pre>
          <Link to="/">Go back to form</Link>
        </div>
      )}
    </div>
  );
}


function App() {

  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    username: '',
    password: '',
    email: '',
    city: '',
    state: '',
    areasOfInterest: [],
    zipcode: '',
    gender: '',
    languages: [],
  })
  const options=[
    {value:"webdevelopment", label:"Web Development"},
    {value:"mobiledevelopment", label:"Mobile Development"},
    {value:"ai", label:"Artificial Intelligence"},
    {value:"ds", label:"Data Science"},
    {value:"cyber", label:"Cyber Security"},
  ]
  //setShowPassword(false);

  const [submitted, setSubmitted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const[selectedOptions, setSelectedOptions]=useState([])



  const onChangeHandler = (event) => {
    const { name, value, checked, type } = event.target;
    console.log(event)
    if (type === 'checkbox') {
      const updatedLanguages = checked ?
        [...formData.languages, value] :
        formData.languages.filter(lang => lang !== value);

      setFormData(prevFormData => ({
        ...prevFormData,
        languages: updatedLanguages
      }));
    } else {
      setFormData(prevFormData => ({
        ...prevFormData,
        [name]: value
      }));
    }
  };


      
  const handleChange=(selectedOption)=>{
    setSelectedOptions(selectedOption);
  };


  const onSubmitHandler = (event) => {
    event.preventDefault();
    setSubmitted(true);
    console.log(formData);
    

  };
  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const submit=() =>{
    console.log()
  }
  return (
    <Router>
    <Routes>
    <Route path="/" element={
    <div className="split-background">
    <div className="form-container">
    <div className="App">
    <form onSubmit={onSubmitHandler}>

    <h1 className="heading">WELCOME TO CHOLA</h1>
    {submitted && <p className="thank-you-message">Thank you for submitting the form!</p>}
      <div className="form-group">
          <label htmlFor="firstname" className="form-label">First Name</label>
          <input className="form-control" name="firstname" onChange={onChangeHandler} value={formData.firstname} />
        </div>
        <div className="form-group">
          <label htmlFor="lastname" className="form-label">Last Name</label>
          <input className="form-control" name="lastname" onChange={onChangeHandler} value={formData.lastname} />
        </div>
        <div className="form-group">
          <label htmlFor="username" className="form-label">User Name</label>
          <input className="form-control" name="username" onChange={onChangeHandler} value={formData.username} />
        </div>
        <div className="form-group">
              <label htmlFor="password" className="form-label">Password</label>
              <div className="password-input">
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-control"
                  name="password"
                  onChange={onChangeHandler}
                  value={formData.password}
                />
                <button type="button" onClick={togglePasswordVisibility}>
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email</label>
          <input className="form-control" name="email" onChange={onChangeHandler} value={formData.email} />
        </div>
        <div className="form-group">
          <label htmlFor="city" className="form-label">City</label>
          <input className="form-control" name="city" onChange={onChangeHandler} value={formData.city} />
        </div>
        <div className="form-group">
          <label htmlFor="state" className="form-label">State</label>
          <select className="form-select" name="state" onChange={onChangeHandler} value={formData.state}>
            <option value="">.....</option>
            <option value="TamilNadu">TamilNadu</option>
            <option value="Kerala">Kerala</option>
            <option value="Karnataka">Karnataka</option>
            <option value="AndhraPradesh">AndhraPradesh</option>
            <option value="Telangana">Telangana</option>
            <option value="Maharashtra">Maharashtra</option>
          </select>
        </div>
        <div className="form-group">
              <label htmlFor="areasOfInterest" className="form-label">Areas of Interest</label>
              <Select
              options={options} 
              value={selectedOptions}
              onChange={handleChange}
              isMulti={true}
              />
              
            </div>
        <div className="form-group">
          <label htmlFor="zipcode" className="form-label">Zip Code</label>
          <input className="form-control" name="zipcode" onChange={onChangeHandler} value={formData.zipcode} />
        </div>
        <div className="form-group">
          <label htmlFor="gender" className="form-label">Gender</label>
          <div>
            <div>
              <input type="radio" name="gender" value="male" onChange={onChangeHandler} checked={formData.gender === 'male'} />
              <label htmlFor="male">Male</label>
            </div>
            <div>
              <input type="radio" name="gender" value="female" onChange={onChangeHandler} checked={formData.gender === 'female'} />
              <label htmlFor="female">Female</label>
            </div>
            <div>
              <input type="radio" name="gender" value="other" onChange={onChangeHandler} checked={formData.gender === 'other'} />
              <label htmlFor="other">Other</label>
            </div>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="gender" className="form-label">Choose your known ProgrammingLanguages</label>
          <div>
            <div>
              <input type="checkbox" name="languages" value="html" onChange={onChangeHandler} checked={formData.languages.indexOf('html') !== -1} />
              <label htmlFor="C">C</label>
            </div>
            <div>
              <input type="checkbox" name="languages" value="css" onChange={onChangeHandler} checked={formData.languages.indexOf('css') !== -1} />
              <label htmlFor="C++">C++</label>
            </div>
            <div>
              <input type="checkbox" name="languages" value="java" onChange={onChangeHandler} checked={formData.languages.indexOf('java') !== -1} />
              <label htmlFor="Java">Java</label>
            </div>
            <div>
              <input type="checkbox" name="languages" value="python" onChange={onChangeHandler} checked={formData.languages.indexOf('python') !== -1} />
              <label htmlFor="Python">Python</label>
            </div>
            <div>
              <input type="checkbox" name="languages" value="javascript" onChange={onChangeHandler} checked={formData.languages.indexOf('javascript') !== -1} />
              <label htmlFor="Javascript">Javascript</label>
            </div>
          </div>
        </div>
        <div className="form-group">
          <button onClick={submit} className="btn" type="submit" >Submit</button>
          <Link to="/form-data" state={{ formData }}>View Form Data</Link>
        </div>
        
      </form>
    </div>
    </div>
    </div>
    }/>
  <Route path="/form-data" element={<FormDataDisplay />} />
</Routes>
</Router>
    
  );
}

export default App;
