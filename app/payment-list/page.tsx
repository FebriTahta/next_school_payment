import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import PaymentList from "@/components/page/payment-list";

type Props = {
  title: string;
  desc: string;
  nis: string;
  kd_rombel: string;
  payment_type: string;
  i_pay: string;
  token: string;
};

export const getServerSideProps: GetServerSideProps<{ props: Props }> = async (context) => {
  const query = context.query;

  const payment_type = atob((query.payment_type as string) || '-');
  const i_pay = (query.i_pay as string) || 'List';
  const nis = atob((query.nis as string) || '-');
  const kd_rombel = atob((query.kd_rombel as string) || '-');
  const token = atob((query.token as string) || '-');

  const props = {
    title: `Active Payment : ${payment_type.toUpperCase()}`,
    desc: "Make payment before the due date passes",
    nis: nis,
    kd_rombel: kd_rombel,
    payment_type: payment_type,
    i_pay: i_pay,
    token: token,
  };

  return { props: { props } };
};

const Page = ({ props }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div>
      <PaymentList props={props} />
    </div>
  );
};

export default Page;
