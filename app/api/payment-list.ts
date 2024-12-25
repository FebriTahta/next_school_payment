import { AvailablePaymentComponentsResponse } from "@/interface/payment-list";
  
export const availablePaymentComponents = async (nis: string, kd_rombel: string, komponen: string, token: string): Promise<AvailablePaymentComponentsResponse> => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/available-payment-comppnent/${nis}/${kd_rombel}/${komponen}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    });

    console.log('PAYMENT LIST: Response Available Payment Components:', response.status);

    if (!response.ok) {
        const errorData = await response.json();
        console.error('Error Data:', errorData);
        throw new Error(errorData.message || `Error ${response.status}: Fetching failed.`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      // throw new Error(errorMessage);
      throw errorMessage;
  }
};
