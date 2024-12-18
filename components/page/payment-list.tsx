'use client'
import {motion} from "framer-motion";
import { Card, CardHeader, CardDescription, CardTitle } from "../ui/card";
import { payment_list_page_props } from "@/interface/payment-list-page-props";
import {Dates, Time} from "../time";
import { useState, useEffect } from 'react';
import PaymentComponentList from "./payment-component-list";

const PaymentList = ({props}: payment_list_page_props) => {

  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) return null;

  return (
    <div className="h-full pt-[45%] w-screen max-w-md relative">
        <motion.div
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
         
        >
      <div className="flex flex-col mt-[-30px] items-center justify-center">
        {/* card name */}
        <Card className="flex z-50 dark:bg-transparent">
          <CardHeader className="pt-2 pb-2">
            <CardTitle className="text-sm">{props.title}</CardTitle>
            <CardDescription className="text-xs">{props.desc}</CardDescription>
          </CardHeader>
        </Card>
        {/* card payment component */}
        <Card className="z-20 mt-[-40px] w-full h-screen rounded-[30px] dark:bg-transparent">

          <CardHeader className="pr-5 pl-5 pt-16">
            <div className="flex flex-row justify-between">
              <div className="flex flex-col text_left">
                <p className="text-xs">Choose payment component below</p>
                <small className="text-xs">Showing 10 component</small>
              </div>
              <div className="flex flex-col items-end text_right">
                <Time/>
                <Dates/>
              </div>
            </div>
          </CardHeader>

          
          {/* transaksi bulan ini */}
          <PaymentComponentList />

          
        </Card>
      </div>
      </motion.div>
    </div>
  )
}

export default PaymentList