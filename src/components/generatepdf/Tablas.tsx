import React from "react";

function Tablas() {
  return (
    <div style={{ 
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "20px",
      marginTop: "300px",
      marginBottom: "50px"
    }}>
      {/* Título del día */}
      <div style={{
        width: "60%",
        background: "#FFD83C",
        padding: "10px",
        borderRadius: "4px",
        textAlign: "center"
      }}>
        <div style={{
          color: "white",
          fontSize: "16px",
          fontFamily: "Cera Pro",
          fontWeight: "700"
        }}>
          Martes, 31 de Febrero
        </div>
      </div>

      {/* Contenedor de horarios y eventos */}
      <div style={{
        width: "80%",
        display: "flex",
        gap: "10px",
        height: "250px"
      }}>
        {/* Columna de horarios */}
        <div style={{
          width: "120px",
          display: "flex",
          flexDirection: "column",
          gap: "10px"
        }}>
          {/* Horario 1 */}
          <div style={{
            flex: 1,
            background: "#F75E63",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "10px",
            borderRadius: "4px"
          }}>
            <div style={{
              background: "white",
              padding: "5px 10px",
              borderRadius: "25px",
              fontSize: "12px",
              fontFamily: "Cera Pro",
              fontWeight: "500",
              whiteSpace: "nowrap"
            }}>
              7:00 - 9:00
            </div>
          </div>

          {/* Horario 2 */}
          <div style={{
            flex: 1,
            background: "#42CDFF",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "10px",
            borderRadius: "4px"
          }}>
            <div style={{
              background: "white",
              padding: "5px 10px",
              borderRadius: "25px",
              fontSize: "12px",
              fontFamily: "Cera Pro",
              fontWeight: "500",
              whiteSpace: "nowrap"
            }}>
              7:00 - 9:00
            </div>
          </div>

          {/* Horario 3 */}
          <div style={{
            flex: 1,
            background: "#FFDF62",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "10px",
            borderRadius: "4px"
          }}>
            <div style={{
              background: "white",
              padding: "5px 10px",
              borderRadius: "25px",
              fontSize: "12px",
              fontFamily: "Cera Pro",
              fontWeight: "500",
              whiteSpace: "nowrap"
            }}>
              7:00 - 9:00
            </div>
          </div>

          {/* Horario 4 */}
          <div style={{
            flex: 1,
            background: "#C5F06F",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "10px",
            borderRadius: "4px"
          }}>
            <div style={{
              background: "white",
              padding: "5px 10px",
              borderRadius: "25px",
              fontSize: "12px",
              fontFamily: "Cera Pro",
              fontWeight: "500",
              whiteSpace: "nowrap"
            }}>
              7:00 - 9:00
            </div>
          </div>
        </div>

        {/* Columna de eventos */}
        <div style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: "10px"
        }}>
          {/* Evento 1 */}
          <div style={{
            flex: 1,
            background: "rgba(255, 255, 255, 0.57)",
            borderRadius: "4px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "5px",
            padding: "10px",
            border: "1px solid rgba(0, 0, 0, 0.1)"
          }}>
            <div style={{
              fontSize: "14px",
              fontFamily: "Cera Pro",
              fontWeight: "400"
            }}>
              Título de la conferencia
            </div>
            <div style={{
              background: "#F75E63",
              padding: "4px 15px",
              borderRadius: "12px"
            }}>
              <div style={{
                color: "white",
                fontSize: "12px",
                fontFamily: "Cera Pro",
                fontWeight: "700"
              }}>
                Lugar
              </div>
            </div>
          </div>

          {/* Evento 2 */}
          <div style={{
            flex: 1,
            background: "rgba(255, 255, 255, 0.57)",
            borderRadius: "4px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "5px",
            padding: "10px",
            border: "1px solid rgba(0, 0, 0, 0.1)"
          }}>
            <div style={{
              fontSize: "14px",
              fontFamily: "Cera Pro",
              fontWeight: "400"
            }}>
              Título de la conferencia
            </div>
            <div style={{
              background: "#42CDFF",
              padding: "4px 15px",
              borderRadius: "12px"
            }}>
              <div style={{
                color: "white",
                fontSize: "12px",
                fontFamily: "Cera Pro",
                fontWeight: "700"
              }}>
                Lugar
              </div>
            </div>
          </div>

          {/* Evento 3 */}
          <div style={{
            flex: 1,
            background: "rgba(255, 255, 255, 0.57)",
            borderRadius: "4px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "5px",
            padding: "10px",
            border: "1px solid rgba(0, 0, 0, 0.1)"
          }}>
            <div style={{
              fontSize: "14px",
              fontFamily: "Cera Pro",
              fontWeight: "400"
            }}>
              Título de la conferencia
            </div>
            <div style={{
              background: "#FFDF62",
              padding: "4px 15px",
              borderRadius: "12px"
            }}>
              <div style={{
                color: "white",
                fontSize: "12px",
                fontFamily: "Cera Pro",
                fontWeight: "700"
              }}>
                Lugar
              </div>
            </div>
          </div>

          {/* Evento 4 */}
          <div style={{
            flex: 1,
            background: "rgba(255, 255, 255, 0.57)",
            borderRadius: "4px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "5px",
            padding: "10px",
            border: "1px solid rgba(0, 0, 0, 0.1)"
          }}>
            <div style={{
              fontSize: "14px",
              fontFamily: "Cera Pro",
              fontWeight: "400"
            }}>
              Título de la conferencia
            </div>
            <div style={{
              background: "#C5F06F",
              padding: "4px 15px",
              borderRadius: "12px"
            }}>
              <div style={{
                color: "white",
                fontSize: "12px",
                fontFamily: "Cera Pro",
                fontWeight: "700"
              }}>
                Lugar
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tablas;