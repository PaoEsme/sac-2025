import React from "react";
import Image from "next/image";

function Background() {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: 0,
      overflow: 'hidden'
    }}>
      <Image
        src="/FondoPDF.png"
        alt="Fondo del PDF"
        fill
        priority
        quality={90}
        style={{
          objectFit: 'cover',
          opacity: 0.8,
          transform: 'scale(1.02)'
        }}
      />
    </div>
  );
}

export default Background;