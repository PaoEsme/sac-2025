import React from "react";

interface Props {
  numberOfTables?: number;
}

function Bloques2({ numberOfTables = 14 }: Props) {
  // Definir los colores que se alternarán
  const colors = ['#42CDFF', '#F75E63', '#C5F06F', '#FFDF62'];
  
  // Crear un array con el número de bloques necesarios
  const blocks = Array.from({ length: numberOfTables }, (_, index) => {
    const colorIndex = index % colors.length;
    const isDouble = index % 2 === 1; // Alternar entre bloques simples y dobles
    
    return isDouble ? (
      <div key={index} style={{width: 54.94, height: 29, position: 'relative'}}>
        <div style={{width: 15.70, height: 5.46, left: 8.02, top: 0, position: 'absolute', background: colors[colorIndex]}} />
        <div style={{width: 15.70, height: 5.46, left: 31.22, top: 0, position: 'absolute', background: colors[colorIndex]}} />
        <div style={{width: 54.94, height: 23.54, left: 0, top: 5.46, position: 'absolute', background: colors[colorIndex]}} />
      </div>
    ) : (
      <div key={index} style={{width: 28, height: 29, position: 'relative', overflow: 'hidden'}}>
        <div style={{width: 15.33, height: 5.46, left: 6.33, top: 0, position: 'absolute', background: colors[colorIndex]}} />
        <div style={{width: 28, height: 23.54, left: 0, top: 5.46, position: 'absolute', background: colors[colorIndex]}} />
      </div>
    );
  });

  return (
    <div style={{
      width: '100%',
      position: 'absolute',
      bottom: '0',
      left: '0',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'transparent',
      padding: '20px',
      gap: '0px'
    }}>
      {blocks}
    </div>
  );
}

export default Bloques2;