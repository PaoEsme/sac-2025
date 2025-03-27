import React from "react";

function Perfil() {
  return (
    <>
    <div style={{ position: "absolute", top: "55px", left: "80px" }}>
        <img style={{width: '20vh', height: '10vh'}} src="/Logo.png" />
      </div>
    <div className="page" style={{ fontFamily: "Arial, sans-serif", textAlign: "center", position: "absolute", top: "85px", left: "300px"}}>
      <div className="content" style={{ 
        display: "flex", 
        flexDirection: "column", 
        alignItems: "center", 
        justifyContent: "center", 
        minHeight: "30vh",
      }}>
        <div>
        <img style={{
          width: '25vh',  // Aumentado
          height: '25vh', // Aumentado
          borderRadius: 150
          }} src="/perfil.png" />
          <div style={{
            color: 'black', 
            fontSize: 35,  // Aumentado
            fontFamily: 'Cera Pro', 
            fontWeight: '700',
            marginTop: "-5px"
            }}>
            000000
            </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Perfil;
