import React from "react";

interface Workshop {
  id: number;
  nombre: string;
  date: string;
}

interface TablasProps {
  workshops: Workshop[];
}

function Tablas({ workshops = [] }: TablasProps) { // Fallback para workshops undefined
  const colors = {
    blue: "#42CDFF",
    red: "#F75E63",
    white: "#FFFFFF",
    black: "#000000",
    gray: "rgba(0, 0, 0, 0.1)"
  };

  const WORKSHOP_HEIGHT = 80;

  if (workshops.length === 0) {
    return (
      <div style={{ 
        width: "100%",
        textAlign: "center",
        padding: "20px",
        color: colors.black,
        fontFamily: "'Cera Pro', Arial, sans-serif"
      }}>
        No hay talleres programados
      </div>
    );
  }

  return (
    <div style={{ 
      width: "100%",
      marginTop: "40px"
    }}>
      <div style={{
        display: "flex",
        gap: "15px",
        width: "100%",
        maxWidth: "700px",
        margin: "0 auto",
        padding: "0 20px"
      }}>
        {/* Columna de horarios */}
        <div style={{
          width: "120px",
          display: "flex",
          flexDirection: "column",
          gap: "15px"
        }}>
          {workshops.map((workshop) => (
            <div
              key={`time-${workshop.id}`}
              style={{
                background: colors.red,
                borderRadius: "6px",
                padding: "15px 10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: `${WORKSHOP_HEIGHT}px`
              }}
            >
              <div style={{ 
                background: colors.white, 
                color: colors.black, 
                padding: "6px 12px", 
                borderRadius: "20px", 
                fontSize: "12px", 
                fontWeight: "500"
              }}>
                {new Date(workshop.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>
          ))}
        </div>

        {/* Columna de eventos */}
        <div style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: "15px"
        }}>
          {workshops.map((workshop) => (
            <div
              key={`event-${workshop.id}`}
              style={{
                background: "rgba(255, 255, 255, 0.57)",
                borderRadius: "6px",
                padding: "15px",
                border: `1px solid ${colors.gray}`,
                height: `${WORKSHOP_HEIGHT}px`,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center"
              }}
            >
              <div style={{ fontSize: "14px", fontWeight: "500" }}>
                {workshop.nombre}
              </div>
              <div style={{
                background: colors.blue, 
                padding: "4px 15px",
                borderRadius: "12px",
                width: "fit-content",
                marginTop: "8px"
              }}>
                <div style={{ color: colors.white, fontSize: "12px", fontWeight: "700" }}>
                  Lugar del evento
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Tablas;