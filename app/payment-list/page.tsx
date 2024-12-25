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

const Page = async ({
  searchParams,
}: {
  searchParams: SearchParams;
}) => {
  // Parsing searchParams
  const props = await fetchPaymentDetails(searchParams);

  return (
    <div>
      <PaymentList props={props} />
    </div>
  );
};

export default Page;
