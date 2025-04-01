import React from "react";

interface Workshop {
  id: number;
  nombre: string;
  date: string;
}

interface TablasProps {
  workshops: Workshop[];
}

function Tablas({ workshops }: TablasProps) {
  const colors = {
    yellow: "#FFD83C",
    blue: "#42CDFF",
    red: "#F75E63",
    green: "#C5F06F",
    white: "#FFFFFF",
    black: "#000000",
    gray: "rgba(0, 0, 0, 0.1)"
  };

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "700px",
        margin: "0 auto",
        marginTop: "310px",
        padding: "40px 20px",
        fontFamily: "'Cera Pro', Arial, sans-serif",
        background: "transparent",
        position: "relative",
        zIndex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <div
        style={{
          width: "fit-content",
          background: colors.yellow,
          padding: "8px 20px",
          borderRadius: "6px",
          margin: "0 auto 30px auto",
          position: "relative",
          boxSizing: "border-box"
        }}
      >
        {workshops.map((workshop) => {
          const date = new Date(workshop.date);
          const options: Intl.DateTimeFormatOptions = {
            weekday: 'long',
            day: 'numeric',
            month: 'long'
          };
          const formattedDate = date.toLocaleDateString('es-ES', options); 

          const capitalizeFirstLetter = (str: string) => {
            return str.charAt(0).toUpperCase() + str.slice(1);
          };

          const capitalizedFormattedDate = formattedDate
            .split(' ')
            .map((word) => capitalizeFirstLetter(word))
            .join(' ');

          return (
            <h1
              key={workshop.id}
              style={{
                fontSize: "18px",
                fontWeight: "700",
                color: colors.white,
                margin: "0",
                padding: "0",
                lineHeight: "1.2",
                textAlign: "center",
                boxSizing: "border-box"
              }}
            >
              {capitalizedFormattedDate}
            </h1>
          );
        })}
      </div>

      <div
        style={{
          display: "flex",
          gap: "15px",
          width: "100%"
        }}
      >
        <div
          style={{
            width: "120px",
            display: "flex",
            flexDirection: "column",
            gap: "50px",
            alignItems: "center"
          }}
        >
          {workshops.map((workshop) => (
            <div
              key={workshop.id}
              style={{
                background: colors.red,
                borderRadius: "6px",
                padding: "15px 10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                boxSizing: "border-box"
              }}
            >
              <div style={{ background: colors.white, color: "#000000", padding: "6px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "500", whiteSpace: "nowrap", textAlign: "center" }}>
                {new Date(workshop.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            alignItems: "center"
          }}
        >
          {workshops.map((workshop) => (
            <div
              key={workshop.id}
              style={{
                background: "rgba(255, 255, 255, 0.57)",
                borderRadius: "6px",
                padding: "15px",
                border: `1px solid ${colors.gray}`,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "8px",
                width: "100%",
                boxSizing: "border-box"
              }}
            >
              <div
                style={{
                  fontSize: "14px",
                  fontWeight: "400",
                  color: colors.black,
                  textAlign: "center",
                  width: "100%"
                }}
              >
                {workshop.nombre}
              </div>
              <div
                style={{
                  background: colors.blue, 
                  padding: "4px 15px",
                  borderRadius: "12px",
                  width: "fit-content"
                }}
              >
                <div
                  style={{
                    color: colors.white,
                    fontSize: "12px",
                    fontWeight: "700",
                    textAlign: "center"
                  }}
                >
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
