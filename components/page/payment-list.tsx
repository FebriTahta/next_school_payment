'use client'
import {motion} from "framer-motion";
import { Card, CardHeader, CardDescription, CardTitle } from "../ui/card";
import { AvailabelPaymentComponentsPageProps, AvailablePaymentComponentsResponse } from "@/interface/payment-list";
import { useState, useEffect } from 'react';
import CardItem from "../card-item";
import { availablePaymentComponents } from "@/api/payment-list";
import SkeletonItemCard from '../skeleton-item-card';

const PaymentList = ({props}: AvailabelPaymentComponentsPageProps) => {

  const [paymentList, setPaymentList] = useState<AvailablePaymentComponentsResponse | null>(null);
  const [loading, setLoading] = useState(true); // loading mulai
  const [error, setError] = useState<string | null>(null);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const availablePayments = await availablePaymentComponents(
          props.nis,
          props.kd_rombel,
          props.payment_type,
          props.token
        );
        setPaymentList(availablePayments);
        setLoading(false); // Pastikan loading selesai
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        setError(`Failed to fetch: ${errorMessage}`);
      }
    };
    fetchData();
  }, [props.nis, props.kd_rombel, props.payment_type, props.token]); // Tambahkan semua dependensi
  

  return (
    <div className="h-full pt-[30%] w-screen max-w-md relative">
        <motion.div
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
         
        >
       <div className="flex flex-col mt-[2vh] items-center justify-center">
        {/* card name */}
        <Card className="flex z-50 dark:bg-slate-900 dark:bg-opacity-70">
          <CardHeader className="pt-2 pb-2">
            <CardTitle className="text-sm">{props.title}</CardTitle>
            <CardDescription className="text-xs">{props.desc}</CardDescription>
          </CardHeader>
        </Card>
        {/* card payment component */}
        <Card className="z-20 mt-[-40px] w-full h-screen  pl-7 pr-7 rounded-[30px] dark:bg-slate-900 dark:bg-opacity-70">

          <CardHeader className="pr-5 pl-5 pt-16">
            <div className="flex flex-row justify-between">
              <div className="flex flex-col text_left">
                <p className="text-xs">
                {paymentList?.data.component_list.length !== 0 || error
                ? (error ? 'Error' : `Choose payment components below`) 
                : (`Payment components not available`)
                }
                </p>
                <small className="text-xs">
                  {paymentList?.data.component_list.length !== 0 || error
                  ? (error ? error : `Showing ${paymentList?.data.component_list.length} component`) 
                  : (`-`)
                  }
                  
                  
                </small>
              </div>
              <div className="flex flex-col items-end text_right">
                {/* <Time/>
                <Dates/> */}
              </div>
            </div>
          </CardHeader>

          
          {/* transaksi bulan ini */}
          <div className="overflow-y-auto pb-4 h-[62vh] scroll-smooth">
            {
              loading || error || paymentList?.data.component_list.length == 0 ? (
                <div className='className="flex flex-col justify-center mx-4 mb-4 gap-y-2 bg-gray-50 shadow-none dark:bg-slate-900 dark:bg-opacity-70 rounded-lg"'>
                  <SkeletonItemCard/>
                  {paymentList?.data.component_list.length == 0 || error
                  ? ( <div className="flex justify-center shadow-none dark:bg-slate-900 dark:bg-opacity-70 rounded-lg mt-5">
                        <p className="text-red-500 text-[10px]">
                          {error ? error : '404 Not Available'}
                        </p>
                    </div>) 
                  : ('')
                  }
                </div>
              ) : (
                paymentList?.data.component_list.map((item, index) => (
                  <CardItem key={index} item={item} icon={props.i_pay}/>
                ))
              )
            }
          </div>
        </Card>
      </div>
      </motion.div>
    </div>
  )
}

export default PaymentList