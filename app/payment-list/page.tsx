import PaymentList from "@/components/page/payment-list"

const props =  {
  title: "Active Payment List",
  desc: "make payment before the due date passes"
}

const page = ({}) => {
  return (
    <div>
        <PaymentList props={props}/>
    </div>
  )
}

export default page