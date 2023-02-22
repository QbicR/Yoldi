export const fetcherWithToken = (url: string, token?: any) =>
    fetch(url, {
        method: 'GET',
        headers: {
            accept: 'application/json',
            'X-API-KEY': String(token),
        },
    }).then((res) => res.json())
