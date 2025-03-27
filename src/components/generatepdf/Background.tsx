import React from "react";
import { CSSProperties } from 'react';

function Background() {
  // Estilos base de celda
  const cellStyle: CSSProperties = {
    flex: '1 1 0',
    alignSelf: 'stretch',
    padding: 10,
    outline: '1px rgba(0, 0, 0, 0.06) solid',
    outlineOffset: '-0.50px'
  };

  // Función para celdas coloreadas
  const coloredCell = (color: string, opacity: string): CSSProperties => ({
    ...cellStyle,
    background: `rgba(${color}, ${opacity})`
  });

  // Paleta de colores
  const colors = {
    yellow: '255, 223.31, 97.75',
    blue: '66, 205, 255',
    red: '247, 94, 99',
    green: '197, 240, 111'
  };

  // Configuración de la cuadrícula
  const gridConfig = [
    [{}, {}, {}, {}],
    [coloredCell(colors.yellow, '0.35'), {}, {}, coloredCell(colors.blue, '0.36')],
    [{}, {}, coloredCell(colors.red, '0.40'), {}],
    [{}, {}, {}, {}],
    [{}, {}, {}, coloredCell(colors.green, '0.60')],
    [coloredCell(colors.blue, '0.39'), {}, {}, {}],
    [{}, {}, coloredCell(colors.red, '0.42'), coloredCell(colors.blue, '0.44')],
    [{}, {}, {}, {}],
    [{}, coloredCell(colors.yellow, '0.58'), {}, {}],
    [coloredCell(colors.red, '0.49'), {}, {}, {}],
    [{}, {}, {}, coloredCell(colors.yellow, '0.68')],
    [{}, {}, {}, coloredCell(colors.green, '0.50')],
    [coloredCell(colors.yellow, '0.35'), {}, {}, coloredCell(colors.blue, '0.36')]
  ];

  return (
    <div style={{
      width: '100%',
      height: '100%',
      backdropFilter: 'blur(2px)',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <div style={{
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column'
      }}>
        {gridConfig.map((row, rowIndex) => (
          <div 
            key={`row-${rowIndex}`}
            style={{
              flex: 1,
              display: 'flex',
              width: '100%'
            }}
          >
            {row.map((cell, cellIndex) => (
              <div 
                key={`cell-${rowIndex}-${cellIndex}`}
                style={Object.keys(cell).length ? cell : cellStyle}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Background;