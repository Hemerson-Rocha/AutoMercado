import { useState, useEffect } from "react";

// 4 - custom hook

export const useFetch = (url) => {
    const [data, setData] = useState(null);

    // 5 - Refatorando post
    const [config, setConfig] = useState(null);
    const [method, setMethod] = useState(null);
    const [callFetch, setCallFetch] = useState(false);

    // 6 - Loading
    const [loading, setLoading] = useState(false);

    // 8 - tratando erros
    const [error, setError] = useState(null)

    // 9 - desafio, delete(do prof)
    const [itemId, setItemId] = useState(null);

    const httpConfig = (data, method) => {
        if(method === "POST") {
            setConfig({
                method,
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(data)
            });

            setMethod(method);
        } else if(method === "DELETE") {
            setConfig({
                method,
                headers: {
                    "Content-type": "application/json"
                },
            });

            setMethod(method);
            setItemId(data);
        }
    };

    // pegar os dados
    useEffect(() => {
        (async () => {
            setLoading(true);

           try {
            const res = await fetch(url);
            const json = await res.json();

            setData(json);
           } catch (error) {
            console.log(error.message);

            setError("Houve um erro ao carregar os dados");
           }

            setLoading(false)
        })()
    }, [url, callFetch]);

    // 5 - refatorando post
    // colocando dados
    useEffect(() => {
        (async () => {
            let json

            if (method === 'POST') {
                let fetchOptions = [url, config];
                const res = await fetch(...fetchOptions)
                json = await res.json();

            } else if (method === 'DELETE') {
                const deleteUrl = `${url}/${itemId}`
                const res = await fetch(deleteUrl, config);
                json = await res.json();

            }
            setCallFetch(json);
        })()
    }, [config])


    return { data, httpConfig, loading, error };
};