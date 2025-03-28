import { useState } from "react";

type ExpedienteData = {
  exp: number;
  workshops: { id: number; nombre: string; date: string }[];
};

const useRecord = <T>() => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [data, setData] = useState<T | null>(null);

  const fetchExpediente = async (expediente: string) => {
    if (!expediente.trim()) return;

    setLoading(true);
    setError("");
    setData(null);

    try {
      const response = await fetch(`http://localhost:3001/api/records/${expediente}`);

      if (!response.ok) {
        throw new Error(response.statusText || "Error al buscar expediente");
      }

      const result: T = await response.json();
      setData(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error desconocido");
    } finally {
      setLoading(false);
    }
  };

  return { fetchExpediente, loading, error, data };
};

export default useRecord;
