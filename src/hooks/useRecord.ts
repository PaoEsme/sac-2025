import { useState } from "react";

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
      const response = await fetch(`api/records/${expediente}`);

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
