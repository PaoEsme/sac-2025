import React from "react";

function Tablas() {
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
    <div style={{ 
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
    }}>
      <div style={{
        width: "fit-content",
        background: colors.yellow,
        padding: "8px 20px",
        borderRadius: "6px",
        margin: "0 auto 30px auto", 
        position: "relative", 
        boxSizing: "border-box"
      }}>
        <h1 style={{
          fontSize: "18px",
          fontWeight: "700",
          color: colors.white,
          margin: "0",
          padding: "0",
          lineHeight: "1.2",
          textAlign: "center",
          boxSizing: "border-box"
        }}>
          Martes, 31 de Febrero
        </h1>
      </div>

      <div style={{
        display: "flex",
        gap: "15px",
        width: "100%"
      }}>
        <div style={{
          width: "120px",
          display: "flex",
          flexDirection: "column",
          gap: "50px",
          alignItems: "center"
        }}>
          {[
            { time: "7:00 - 9:00", bgColor: colors.red },
            { time: "7:00 - 9:00", bgColor: colors.blue },
            { time: "7:00 - 9:00", bgColor: colors.yellow },
            { time: "7:00 - 9:00", bgColor: colors.green }
          ].map((item, index) => (
            <div 
              key={`time-${index}`}
              style={{
                background: item.bgColor,
                borderRadius: "6px",
                padding: "15px 10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                boxSizing: "border-box"
              }}
            >
              <div style={{
                background: colors.white,
                padding: "6px 12px",
                borderRadius: "20px",
                fontSize: "12px",
                fontWeight: "500",
                whiteSpace: "nowrap",
                textAlign: "center"
              }}>
                {item.time}
              </div>
            </div>
          ))}
        </div>

        <div style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          alignItems: "center"
        }}>
          {[
            { title: "Título de la conferencia", place: "Lugar", color: colors.red },
            { title: "Título de la conferencia", place: "Lugar", color: colors.blue },
            { title: "Título de la conferencia", place: "Lugar", color: colors.yellow },
            { title: "Título de la conferencia", place: "Lugar", color: colors.green }
          ].map((event, index) => (
            <div 
              key={`event-${index}`}
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
              <div style={{
                fontSize: "14px",
                fontWeight: "400",
                color: colors.black,
                textAlign: "center",
                width: "100%"
              }}>
                {event.title}
              </div>
              <div style={{
                background: event.color,
                padding: "4px 15px",
                borderRadius: "12px",
                width: "fit-content"
              }}>
                <div style={{
                  color: colors.white,
                  fontSize: "12px",
                  fontWeight: "700",
                  textAlign: "center"
                }}>
                  {event.place}
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