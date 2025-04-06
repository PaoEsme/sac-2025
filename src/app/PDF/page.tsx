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

function BodyComponent() { 
  const [isClient, setIsClient] = useState(false);
  const { loading, error, data } = useRecord<ExpedienteData>();
  
  useEffect(() => {
    setIsClient(true); 
  }, []);

  if (!isClient || loading || error || !data) return null; 

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center">
      <div className="absolute inset-0 bg-cover bg-no-repeat" />
      <PDF data={data} /> {/* Usamos data directamente */}
    </div>
  );
}

const PDFPage: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center">
      <BodyComponent />
    </main>
  );
};

export default PDFPage;