export const fetcherWithToken = (url: string, token?: string | null) =>
    fetch(url, {
        method: 'GET',
        headers: {
            accept: 'application/json',
            'X-API-KEY': String(token),
        },
    }).then((res) => res.json())
