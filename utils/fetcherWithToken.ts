export const fetcherWithToken = (url: string, token?: string | null) =>
    fetch('https://frontend-test-api.yoldi.agency/api' + url, {
        method: 'GET',
        headers: {
            accept: 'application/json',
            'X-API-KEY': String(token),
        },
    }).then((res) => res.json())
