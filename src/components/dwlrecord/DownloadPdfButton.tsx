import React, { useEffect, useState } from "react";
import { createRoot } from 'react-dom/client';
import PDF from "../generatepdf/PDF";

export default function DownloadPdfButton() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(typeof window !== 'undefined');
    }, []);

    const generatePDF = async () => {
        if (!isClient) return;

        try {
            // Crear un contenedor visible para debug
            const container = document.createElement('div');
            container.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 9999;
                background: white;
                display: flex;
                justify-content: center;
                align-items: center;
            `;

            
            const element = document.createElement('div');
            element.style.cssText = `
            width: 850px; 
            height: 1100px;
            background: white;
            position: relative;
            overflow: visible; 
            `;
            
            container.appendChild(element);
            document.body.appendChild(container);
            
            // Renderizar el componente PDF
            const root = createRoot(element);
            root.render(<PDF />);
            
            // Esperar a que se carguen las imágenes y los estilos
            await new Promise(resolve => setTimeout(resolve, 2000));
        
            const html2pdf = await import('html2pdf.js');
            
            const options = {
                margin: 0,
                filename: 'horario.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: {
                    scale: 1,
                    useCORS: true,
                    logging: true,
                    allowTaint: true,
                    backgroundColor: '#FFFFFF'
                },
                jsPDF: {
                    unit: 'pt',
                    format: 'letter',
                    orientation: 'portrait'
                }
            };

            // Generar el PDF
            await html2pdf.default()
                .from(element)
                .set(options)
                .save()
                .then(() => {
                    root.unmount();
                    document.body.removeChild(container);
                })
                .catch((err: Error) => {
                    console.error('Error generando PDF:', err);
                    root.unmount();
                    document.body.removeChild(container);
                });

        } catch (error) {
            console.error('Error al generar el PDF:', error);
            alert('Hubo un error al generar el PDF. Por favor, intenta de nuevo.');
        }
    };

    if (!isClient) return null;

    return (
        <div 
            onClick={generatePDF} 
            style={{
                display: 'flex',
                alignItems: 'center',
                borderRadius: '9999px',
                margin: 'auto',
                width: 'fit-content',
                height: '131px',
                backgroundColor: '#FFDF62',
                transition: 'all 100ms',
                cursor: 'pointer'
            }}
            className="hover:scale-106"
        >
            <p style={{
                alignSelf: 'center',
                padding: '1.5rem',
                fontWeight: 'bold',
                fontSize: '1.5rem'
            }}>
                DESCARGA TU PDF
            </p>
        </div>
    );
}