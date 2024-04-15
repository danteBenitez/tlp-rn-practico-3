import { useEffect, useState } from "react";

export function usePromise(promiseFn, eager) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    // Si eager es true, la promesa se ejecuta inmediatamente
    // y por tanto comienza con el estado de carga.
    const [isLoading, setIsLoading] = useState(eager);

    const refresh = () => {
        setIsLoading(true);
        promiseFn()
            .then(data => setData(data))
            .catch(error => setError(error))
            .finally(() => setIsLoading(false));
    };

    useEffect(() => {
        if (eager) refresh();
    }, [promiseFn, eager]);

    return { data, error, isLoading, refresh };
}