"use client";

import React from "react";
import Perfil from "./Perfil";
import Bloques1 from "./Bloques1";
import Bloques2 from "./Bloques2";
import Tablas from "./Tablas";
import Background from "./Background";

interface PDFProps {
  data: {
    exp: number;
    workshops: {
      id: number;
      nombre: string;
      date: string;
    }[];
  };
}

function PDF({ data }: PDFProps) {
  const { exp, workshops } = data;

  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <div style={{ position: "absolute", width: "100%", height: "100%", zIndex: 0 }}>
        <Background />
      </div>
      <div style={{ position: "relative", zIndex: 1 }}>
        <div>
          <Bloques1 />
        </div>
        <div>
          <Perfil exp={exp} />
        </div>
        <div>
          <Tablas workshops={workshops} />
        </div>
        <div>
          <Bloques2 />
        </div>
      </div>
    </div>
  );
}

export default PDF;

