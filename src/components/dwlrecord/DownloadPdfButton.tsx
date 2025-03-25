import React, { useEffect, useState } from "react";
import { createRoot } from 'react-dom/client';
import PDF from "../generatepdf/PDF";

const html2pdfPromise = import("html2pdf.js").then((mod) => mod.default);

export default function DownloadPdfButton() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        // Solo se ejecuta en el cliente
        setIsClient(typeof window !== 'undefined');
    }, []);

    const generatePDF = async () => {
        if (!isClient) return;

        try {
            const html2pdf = await html2pdfPromise;
            
            const element = document.createElement('div');
            element.style.width = '100%';
            element.style.height = '100%';
            element.style.position = 'relative';
            element.style.backgroundColor = '#FFFFFF';
            element.style.padding = '20px';
            
            // Renderizar el componente PDF en el elemento
            const root = document.createElement('div');
            root.id = 'pdf-content';
            root.style.cssText = `
                background-color: #FFFFFF;
                color: #000000;
                --primary-color: #FFDF62;
                --secondary-color: #F75E63;
                --accent-color: #42CDFF;
                --success-color: #C5F06F;
            `;
            element.appendChild(root);
            
            // Renderizar el componente PDF usando createRoot
            const reactRoot = createRoot(root);
            reactRoot.render(<PDF />);
            
            // Dar más tiempo para que se carguen todos los estilos
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            const opt = {
                margin: 1,
                filename: 'horario.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { 
                    scale: 2, 
                    useCORS: true, 
                    logging: true, 
                    allowTaint: true,
                    backgroundColor: '#FFFFFF',
                    removeContainer: true
                },
                jsPDF: { 
                    unit: 'in', 
                    format: 'a4', 
                    orientation: 'portrait', 
                    compress: true 
                }
            };

            await html2pdf().set(opt).from(element).save();
            
            // Limpiar
            reactRoot.unmount();
        } catch (error) {
            console.error('Error al generar el PDF:', error);
            alert('Hubo un error al generar el PDF. Por favor, intenta de nuevo.');
        }
    };

    if (!isClient) return null;  // No renderizar el botón en el servidor

    return (
        <div 
            onClick={generatePDF} 
            className="items-center rounded-full m-auto w-fit h-131px bg-[#FFDF62] transition-all duration-100 hover:scale-106 cursor-pointer"
        >
            <p className="self-center p-6 font-bold text-2xl
                sm:p-4 sm:text-xl
                md:p-6 md:text-2xl"
            >
                DOWNLOAD PDF
            </p>
        </div>
    );
}