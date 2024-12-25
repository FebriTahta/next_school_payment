import PaymentList from "@/components/page/payment-list";

const fetchPaymentDetails = async (searchParams: { [key: string]: string | undefined }) => {
  const payment_type = atob(searchParams.payment_type || '-');
  const i_pay = searchParams.i_pay || 'List';
  const nis = atob(searchParams.nis || '-');
  const kd_rombel = atob(searchParams.kd_rombel || '-');
  const token = atob(searchParams.token || '-');

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

const Page = async ({ searchParams }: { searchParams: { [key: string]: string | undefined } }) => {
  const props = await fetchPaymentDetails(searchParams);

  return (
    <div>
      <PaymentList props={props} />
    </div>
  );
};

export default Page;
