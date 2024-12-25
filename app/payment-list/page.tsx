import { Suspense } from 'react';
import PaymentList from "@/components/page/payment-list";

interface SearchParams {
  payment_type?: string;
  i_pay?: string;
  nis?: string;
  kd_rombel?: string;
  token?: string;
}

const fetchPaymentDetails = async (searchParams: SearchParams) => {
  const payment_type = atob(searchParams.payment_type || '-');
  const i_pay = searchParams.i_pay || 'List';
  const nis = atob(searchParams.nis || '-');
  const kd_rombel = atob(searchParams.kd_rombel || '-');
  const token = atob(searchParams.token || '-');

  return {
    title: `Active Payment : ${payment_type.toUpperCase()}`,
    desc: "Make payment before the due date passes",
    nis,
    kd_rombel,
    payment_type,
    i_pay,
    token,
  };
};

export interface PageProps {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export default async function Page({ searchParams }: PageProps) {
  const typedSearchParams: SearchParams = {
    payment_type: searchParams.payment_type as string | undefined,
    i_pay: searchParams.i_pay as string | undefined,
    nis: searchParams.nis as string | undefined,
    kd_rombel: searchParams.kd_rombel as string | undefined,
    token: searchParams.token as string | undefined,
  };

  const props = await fetchPaymentDetails(typedSearchParams);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PaymentList props={props} />
    </Suspense>
  );
}

