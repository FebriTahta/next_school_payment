'use client';

import { useSearchParams } from 'next/navigation';
import PaymentList from "@/components/page/payment-list";

const Page = () => {
  const searchParams = useSearchParams();
  
  const payment_type = atob(searchParams.get('payment_type') || '-');
  const i_pay = searchParams.get('i_pay') || 'List';
  const nis = atob(searchParams.get('nis') || '-');
  const kd_rombel = atob(searchParams.get('kd_rombel') || '-');
  const token = atob(searchParams.get('token') || '-');

  const props = {
    title: `Active Payment : ${payment_type.toUpperCase()}`,
    desc: "Make payment before the due date passes",
    nis: nis,
    kd_rombel: kd_rombel,
    payment_type: payment_type,
    i_pay: i_pay,
    token: token,
  };

  return (
    <div>
      <PaymentList props={props} />
    </div>
  );
};

export default Page;
