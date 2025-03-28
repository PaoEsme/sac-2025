"use client";

import React, { useState, useEffect } from "react";
import PDF from "@/components/generatepdf/PDF";
import useRecord from "@/hooks/useRecord";

interface Workshop {
  id: number;
  nombre: string;
  date: string;
}

interface ExpedienteData {
  exp: number;
  workshops: Workshop[];
}

function BodyComponent({ storedCode }: { storedCode: string | null }) {
  const [isClient, setIsClient] = useState(false);

  const { fetchExpediente, loading, error, data } = useRecord<ExpedienteData>(); // Correcto: usa ExpedienteData como tipo genérico
  
  useEffect(() => {
    setIsClient(true); 
  }, []);

  if (!isClient || loading || error || !data) return null; // Asegúrate de que `data` esté disponible y evita renderizar nada en caso de error o carga

  const expedienteData: ExpedienteData = data; // Ahora `data` tiene el tipo adecuado

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center">
      <div className="absolute inset-0 bg-cover bg-no-repeat" />
      <PDF data={expedienteData} />
    </div>
  );
}

const PDFPage: React.FC = () => {
  const storedCode = localStorage.getItem("expedienteCode") || "";

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center">
      <BodyComponent storedCode={storedCode} />
    </main>
  );
};

export default PDFPage;
