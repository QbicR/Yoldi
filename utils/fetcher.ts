export const fetcher = (url: string, init?: any) =>
    fetch(url, init)
        .then((res) => res.json())
        .catch((e) => console.log(e))
