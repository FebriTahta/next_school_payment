export const fetchVerif = async (payload: string) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/verification`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: payload, // FormData secara otomatis menetapkan boundary header untuk multipart/form-data
        });
    
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || `Error ${response.status}: Fetching failed.`);
        }
  
        return response.json(); // Kembalikan data JSON jika berhasil

    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        throw new Error(errorMessage);
    }
};
  
  