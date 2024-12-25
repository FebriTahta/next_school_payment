import PaymentList from "@/components/page/payment-list";

const fetchPaymentDetails = async (searchParams: URLSearchParams) => {
  const payment_type = atob(searchParams.get('payment_type') || '-');
  const i_pay = searchParams.get('i_pay') || 'List';
  const nis = atob(searchParams.get('nis') || '-');
  const kd_rombel = atob(searchParams.get('kd_rombel') || '-');
  const token = atob(searchParams.get('token') || '-');

  return {
    title: `Active Payment : ${payment_type.toUpperCase()}`,
    desc: "Make payment before the due date passes",
    nis: nis,
    kd_rombel: kd_rombel,
    payment_type: payment_type,
    i_pay: i_pay,
    token: token,
  };
};

const Page = async ({ searchParams }: { searchParams: URLSearchParams }) => {
  const props = await fetchPaymentDetails(searchParams);

  return (
    <div>
      <PaymentList props={props} />
    </div>
  );
};

export default Page;
