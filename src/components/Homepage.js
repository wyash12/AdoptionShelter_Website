import React from "react";
import Navbar from "./Navbar";
import AdLogo from "./AdminLogo.jpeg";
import AdptLogo from "./Adopterlogo.jpeg";
import ShLogo from "./shelterLogo.jpeg"
import { borderRadius } from "@mui/system";

export default function Homepage() {
  return (
    <>
      <Navbar />
      <div className="card" style={{ width: "90rem", height: "33rem" }}>
        <div
          className="hedding"
          style={{ marginLeft: "600px", paddingTop: "30px"}}
        >
          <h3>Select Type Of User</h3>
        </div>
        <div className="coloumn">
        <div className="card" style={{ width: "20rem", height: "22rem",position:"absolute", marginLeft:"100px"}}>
        <img src={ShLogo} class="card-img-top" alt="..." style={{width: "150px" ,borderRadius:"1rem", marginLeft:"90px"}}/>
  <div class="card-body">
    <h5 class="card-title">Shelter</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="/" class="btn btn-primary">Go to Shelter Page</a>
  </div>
        </div>
        </div>
        <div className="coloumn">
        <div className="card" style={{ width: "20rem", height: "22rem",position:"absolute", marginLeft:"550px" }}>
        <img src={AdptLogo} class="card-img-top" alt="..." style={{width: "150px" ,borderRadius:"2rem", marginLeft:"90px"}}/>
  <div class="card-body">
    <h5 class="card-title">Adopter</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="/" class="btn btn-primary">Go to Adopter Page</a>
  </div>
        </div>
        </div>
        <div className="coloumn">
        <div className="card" style={{ width: "20rem", height: "22rem", position: "absolute", marginLeft:"1000px"}}>
        <img src={AdLogo} class="card-img-top" alt="..." style={{width: "150px",height: "170px" ,borderRadius:"2rem", marginLeft:"90px"}}/>
  <div class="card-body">
    <h5 class="card-title">Admin</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="/" class="btn btn-primary">Go to Admin Page</a>
  </div>
        </div>
        </div>
      </div>
    </>
  );
}
