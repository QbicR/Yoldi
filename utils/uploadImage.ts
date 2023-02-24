export const uploadImage = async (fileData: any) => {
    const response: any = await (
        await fetch('https://frontend-test-api.yoldi.agency/api/image', {
            method: 'POST',
            body: fileData,
        })
    ).json()

    return response
}
