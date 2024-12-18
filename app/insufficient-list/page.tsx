import PaymentList from "@/components/page/payment-list"

const props =  {
    title: "Insufficient List",
    desc: "please complete the payment"
}

const page = () => {
  return (
    <div>
        <PaymentList props={props}/>
    </div>
  )
}

export default page