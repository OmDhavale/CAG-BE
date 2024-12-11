import React from 'react'
import '../styleflr/flr1css.css'
const Flr1 = () => {
  return (
    <>
 <div style={styles.header}>
  <h1>Class At a Glance</h1>
 </div>
 <div style={styles['.hero']}>

  <div style={styles['.hero-content']}>
  <div>
  <>
  <div id="heading">
    <h1>
      1<sup>st</sup>FLOOR
    </h1>
  </div>
  <div id="lab102">
    <div>
      {" "}
      CHEMISTRY LAB-102
      <br />
      <div lab102="" id="displayName102" />
    </div>
    <div id="buttons">
      <button id="occupy">Occupy</button>
    </div>
  </div>
  <div id="lab101">
    <div>
      MECHANICS LAB-101
      <br />
      <div lab101="" id="displayName101" />
    </div>
    <div id="buttons">
      <button id="occupy" onclick="NameAlert101()">
        Occupy
      </button>
    </div>
  </div>
  <div id="stairs">STAIRS</div>
  <div id="store">STORE ROOM</div>
  <div id="exam">EXAM ROOM</div>
  <div id="pg">PG CLASS ROOM</div>
  <div id="stairs1">STAIRS</div>
  <div id="admin">ADMINISTRATIVE OFFICE</div>
  <div id="estate">ESTATE MANAGER</div>
  <div id="cr12">
    <div>
      CR-12
      <br />
      <div cr12="" id="displayName12" />
    </div>
    <div id="buttons">
      <button id="occupy" onclick="NameAlert12()">
        Occupy
      </button>
    </div>
  </div>
  <div id="cr13">
    <div>
      CR-13 <br />
      <div cr13="" id="displayName13" />
    </div>
    <div id="buttons">
      <button id="occupy" onclick="NameAlert13()">
        Occupy
      </button>
    </div>
  </div>
  <div id="computer">COMPUTER ORGANIZATION LAB-103</div>
  <div id="toilet">TOILET</div>
  <div id="store1">STORE ROOM</div>
  <div id="stairs2">STAIRS</div>
  <div id="central">CENTRAL COMPUTING FACILITY</div>
  <div id="cr11">
    <div>
      CR-11 <br />
      <div cr11="" id="displayName11" />
    </div>
    <div id="buttons">
      <button id="occupy" onclick="NameAlert11()">
        Occupy
      </button>
    </div>
  </div>
  <div id="girls">GIRLS COMMON ROOM</div>
  <div id="toilet1">TOILET</div>
  <div id="toilet2">TOILET</div>
  <div id="vice">VICE PRINCIPLE CABIN</div>
  <div id="placement">PLACEMENT ROOM</div>
  <div id="principle">PRINCIPLE'S ROOM</div>
  <div id="board">BOARD ROOM</div>
  <div id="" />
  <div id="" />
  <div id="" />
  <a href="FLOOR1.html">
    <div id="first">1</div>
  </a>
  <a href="2FLOOR.html">
    {" "}
    <div id="second">2</div>
  </a>
  <a href="3FLOOR.html">
    {" "}
    <div id="third">3</div>
  </a>
  <a href="4FLOOR.html">
    {" "}
    <div id="fourth">4</div>
  </a>
  <a href="5FLOOR.html">
    {" "}
    <div id="fifth">5</div>
  </a>
  <a href="6FLOOR.html">
    <div id="sixth">6</div>
  </a>
  <a href="7FLOOR.html">
    {" "}
    <div id="seventh">7</div>
  </a>
  <p />
</>
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

export default Flr1
