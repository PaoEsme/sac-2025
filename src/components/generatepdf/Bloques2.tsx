import React from "react";

function Bloques2() {
  return (
    <div style={{ 
      width: '8.5in', 
      height: '11in',
      position: 'relative',
      margin: '0 auto',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'flex-end'
    }}>
      <img 
        src="/Bloques2.svg" 
        alt="Bloques2" 
        style={{ 
          width: '100%',
          maxHeight: '100px',
          objectFit: 'contain'
        }} 
      />
    </div>
  );
}

export default Bloques2;