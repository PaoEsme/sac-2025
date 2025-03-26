"use client";

import React from "react";
import Perfil from "./Perfil";
import Bloques1 from "./Bloques1";
import Bloques2 from "./Bloques2";
import Tablas from "./Tablas";
import Background from "./Background";

function PDF() {
  return (
    <div style={{ 
      width: "100%", 
      height: "100%", 
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start",
      padding: "20px"
    }}>
      {/* Background */}
      <div style={{ 
        position: "absolute", 
        top: 0, 
        left: 0, 
        width: "100%", 
        height: "100%", 
        zIndex: 0,
        opacity: 0.3 
      }}>
        <Background />
      </div>

      {/* Contenido Principal */}
      <div style={{ 
        position: "relative", 
        zIndex: 1,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}>
        {/* Perfil */}
        <div style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "20px"
        }}>
          <Perfil />
        </div>

        {/* Bloques1 */}
        <div style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "20px"
        }}>
          <Bloques1 />
        </div>

        {/* Tablas */}
        <div style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "20px"
        }}>
          <Tablas />
        </div>

        {/* Bloques2 */}
        <div style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
          <Bloques2 />
        </div>
      </div>
    </div>
  );
}

export default PDF;