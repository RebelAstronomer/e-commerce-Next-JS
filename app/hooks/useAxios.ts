import { useState, useEffect } from "react";
import { AxiosError } from "axios";
import api from "@/utils/axios";
import APIResponse from "@/types/api";

interface HookResponse<T> {
  response: APIResponse<T> | undefined;
  loading: boolean;
  error: AxiosError | null | undefined;
  refetch: () => void;
}

export default function useAxios<T = any>(
  url: string,
  onSuccess?: (response: APIResponse<T>) => void,
): HookResponse<T> {
  const [response, setResponse] = useState<APIResponse<T>>();
  const [error, setError] = useState<AxiosError | null>();
  const [loading, setLoading] = useState(false);
  const [reload, setReload] = useState(0);

  // Used if refetch is needed
  const refetch = () => setReload((prev) => prev + 1);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      setLoading(true);
      try {
        const result = await api.get(url);
        setResponse(result.data);
        if (onSuccess) {
          onSuccess(result.data);
        }
      } catch (err) {
        setError(err as AxiosError);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => controller.abort();

    // eslint-disable-next-line
  }, [reload]);

  return {
    response,
    error,
    loading,
    refetch,
  };
}
