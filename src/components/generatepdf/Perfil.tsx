import React from "react";

function Perfil() {
  return (
    <>
    <div style={{ position: "absolute", top: "40px", left: "40px" }}>
        <img style={{width: '20vh', height: '10vh'}} src="/Logo.png" />
      </div>
    <div className="page" style={{ fontFamily: "Arial, sans-serif", textAlign: "center", position: "absolute", top: "80px", left: "200px"}}>
      <div className="content" style={{ 
        display: "flex", 
        flexDirection: "column", 
        alignItems: "center", 
        justifyContent: "center", 
        minHeight: "30vh",
      }}>
        <div>
          <img style={{
            width: '200px', 
            height: '200px', 
            borderRadius: 100
          }} src="/perfil.png" />
          <div style={{
            color: 'black', 
            fontSize: 30, 
            fontFamily: 'Cera Pro', 
            fontWeight: '700',
            marginTop: "-5px"
          }}>000000</div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Perfil;
