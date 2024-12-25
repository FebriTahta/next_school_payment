export const baseUrl = () => {
    return process.env.NEXT_PUBLIC_BACKEND_URL || 'https://backend.paysmkkrian1.site';
}

export const secretJwt = () => {
    return process.env.NEXT_PUBLIC_JWT_SECRET || 'secret';
}