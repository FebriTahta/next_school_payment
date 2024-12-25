import { MonthlyRecapPaymentResponse } from "@/interface/home"
  
export const monthlyRecapPayment = async (params: string, token: string): Promise<MonthlyRecapPaymentResponse> => {
  try {
    //   console.log('API URL:', `${process.env.NEXT_PUBLIC_BACKEND_URL}/monthly-recap-payment/${params}`);
    //   console.log('Authorization Token:', token);

      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/monthly-recap-payment/${params}`, {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
          },
      });

      console.log('HOME: Response Status Monthly Payment:', response.status);

      if (!response.ok) {
          const errorData = await response.json();
          console.error('Error Data:', errorData);
          throw new Error(errorData.message || `Error ${response.status}: Fetching failed.`);
      }

      const data = await response.json();
    //   console.log('Response Data:', data); // Log response body
      return data;
  } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      throw new Error(errorMessage);
  }
};
