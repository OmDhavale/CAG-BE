import React from 'react'
import './Pages.css'

const Home = () => {
  return (
 <>
 <div style={styles.header}>
  <h1>Shah & Anchor Kutchhi Engg College</h1>
 </div>
 <div style={styles['.hero']}>

  <div style={styles['.hero-content']}>
    <div style={styles.main1}>
      Welcome to
      <div style={styles.main}>Class At a Glance</div>
    </div>
    <div style={styles['.button-container']}>
    <button style={styles.button}>
      < a href='studentlogin' style={styles.a}>
        Login as Student
      </a>
    </button>
    <button style={styles.button}>
      < a href='teacherlogin' style={styles.a}>
        Login as Teacher
      </a>
    </button>
    <button style={styles.button}>
      < a href='adminlogin' style={styles.a}>
        Login as Admin
      </a>
    </button>
    </div>
  </div>
  <footer style={styles.footer}>
    <p>Project by ProCoderzz</p>
  </footer>
</div>

 </> 
  
  )
}
const styles = {
    ".hero": {
      height: "100vh",
      // backgroundImage:
      //   "url('https://images.playground.com/73dd83341e8b42b1a50844e1e70d55b1.jpeg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      backgroundColor: "#f9fbb1"
    },
    ".hero-content": {
    //background: "rgba(0, 0, 0, 0.6)",
    padding: "40px",
    borderRadius: "10px"
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
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "20vh",
    textAlign: "center",
    margin: "0px auto",
    padding: "0px",
    color: "#ff6f00",
    fontSize: "100%"
  },
  main: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "20vh",
    bottom: "50%",
    textAlign: "center",
    margin: "0px auto",
    padding: "30px",
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

export default Home