export type ResponseType = {
    statusCode?: number
    value?: string
    message?: string
    error?: string
}

type ImageType = {
    id: string
    url: string
    width: string
    height: string
}

export type UserType = {
    name: string
    email: string
    slug: string
    description: string
    image: ImageType
    cover: ImageType
    statusCode?: number
}
