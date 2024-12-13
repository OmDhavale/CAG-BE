import React from 'react';
import {useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';
//import { Link } from 'react-router-dom';

const Adminlogin = () => {

  const navigate = useNavigate();
    //Java script functions
  const[loginInfo,setLoginInfo] = useState({
    email: '',
    regno: ''
  })
  const handleChange = (e)=>{
    const {name,value} = e.target;
    console.log(name,value)
    const copyLoginInfo = {...loginInfo}
    copyLoginInfo[name] = value
    setLoginInfo(copyLoginInfo)

  }
  const handleSubmit = async (e)=>{
    e.preventDefault();
    console.log(loginInfo)
    const email = loginInfo.email;
    const regno = loginInfo.regno;
    axios.post('https://class-at-a-glance.onrender.com/adminlogin',{email,regno})
    .then(result=>{
      console.log(result);
      
      if(result.data.message==="Admin logged in succesful !"){ //give this message in json resp 
        toast.success("Login succesful !",{
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
        setTimeout(() => {
            navigate('/create')
          }, 2000);
      }
    })
    .catch(err=>{
      console.log(err.response.data)
      //for showing pop up of error on page
      toast.error("ERROR SENDING POST REQ.", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      })
    })
    
   }
  return (
    <>
    <div style={styles.header}>
  <h1>Shah & Anchor Kutchhi Engg College</h1>
 </div>
 <ToastContainer/>
 <div style={styles['.hero']}>
  {/* <div style={styles.main1}>
    Welcome to
    <div style={styles.main}>Class At a Glance</div>
  </div> */}
  <div className ='form-container'>
    <div className='form'>

            <h2>Admin Login</h2>
              <input 
                type='name'
                name='email'
                placeholder='Email'
                onChange={handleChange}
                autoFocus
                value={loginInfo.email}
              />
              <input 
                type='name'
                name='regno'
                placeholder='Registration No.'
                onChange={handleChange}
                autoFocus
                value={loginInfo.regno}
              />
              {/* <button type='submit'onClick={handleSubmit}>LogIn</button> */}
              <button type='submit'onClick={handleSubmit}>LogIn</button>
              {/* <p>Not a member ?<Link to="/signup"> Sign up</Link> </p>
              <ToastContainer/> */}
               
          </div>
          
      </div>
  <footer style={styles.footer}>
    <p>Project by ProCoderzz</p>
  </footer>
  
</div>
</>
  )
}
//CSS
const styles = {
    ".hero": {
      height: "100vh",
      // backgroundImage:
      //   "url('https://images.playground.com/73dd83341e8b42b1a50844e1e70d55b1.jpeg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: "grid",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      backgroundColor: "rgb(108, 174, 254)"
    },
  body: {
    
    margin: "0",
    padding: "0",
    fontFamily:
      "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
    backgroundColor: "#f9fbb1"
  },
  header: {
    backgroundColor: "#ff8419",
    color: "#fff",
    textAlign: "center",
    padding: "10px",
    position: "fixed",
    width: "100%",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.371)"
  },
  h1: {
    margin: "0",
    fontFamily:
      "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"
  },
  footer: {
    backgroundColor: "#00044f",
    color: "#fff",
    textAlign: "center",
    padding: "10px",
    position: "fixed",
    bottom: "0",
    width: "100%",
    boxShadow: "0 -4px 6px rgba(0, 0, 0, 0.553)"
  },
  main1: {
    // display: "flex",
    // flexDirection: "column",
    // justifyContent: "center",
    // alignItems: "center",
    // height: "20vh",
    // textAlign: "center",
    // margin: "0px auto",
    // padding: "0px",
    color: "#ff6f00",
    fontSize: "100%"
  },
  main: {
    //display: "flex",
    //flexDirection: "column",
    //justifyContent: "center",
    //alignItems: "center",
    //height: "20vh",
    ///bottom: "50%",
    //textAlign: "center",
    //margin: "0px auto",
    //padding: "30px",
    color: "#ff6f00",
    fontSize: "300%",
    fontFamily: "Impact"
  },
  button: {
    backgroundColor: "#35d842",
    color: "#fff",
    padding: "10px 20px",
    textAlign: "center",
    fontSize: "16px",
    border: "none",
    cursor: "pointer",
    margin: "50px auto",
    borderRadius: "90px",
    justifyContent: "center",
    boxShadow: "0 2px 4px rgba(36, 37, 36, 0.396)"
  },
  ".button-container": {
    textAlign: "center",
    textDecoration: "none",
    color: "#f9fbb1"
  },
  "button:hover": { backgroundColor: "#008d21" },
  a: {
    textAlign: "center",
    textDecoration: "none",
    color: "#ffffff",
    fontWeight: "bold"
  }
}
export default Adminlogin