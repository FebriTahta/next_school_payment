'use client'
import {motion} from "framer-motion";
import { Card, CardHeader, CardDescription, CardTitle } from "../ui/card";
// import Link from "next/link";
import { List } from "lucide-react";

const PaymentList = () => {
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
            <CardTitle className="text-sm">Active Payment List</CardTitle>
            <CardDescription className="text-xs">make payment before the due date passes</CardDescription>
          </CardHeader>
        </Card>
        {/* card payment component */}
        <Card className="z-20 mt-[-40px] w-full h-screen rounded-[30px] dark:bg-transparent">

          <CardHeader className="pr-8 pl-8 pt-16">
            <div className="flex flex-row justify-between">
              <div className="flex flex-col text_left">
                <p className="text-sm">Transaction This Month</p>
                <small className="text-xs">Last 5 transaction</small>
              </div>
             <div className="flex text-right">
              <p className=" text-sm">More..</p>
             </div>
            </div>
          </CardHeader>

          
          {/* transaksi bulan ini */}
          <div className="overflow-y-auto pb-4 h-[455px] scroll-smooth">
            {Array(10).fill(null).map((_, index) => (
              <Card
                key={index}
                className="flex flex-col justify-center mx-4 mb-4 p-4 gap-y-2 bg-gray-50 shadow-none dark:bg-transparent rounded-lg"
              >
                <div className="flex gap-4 items-center">
                  {/* Ikon di sebelah kiri */}
                  <div className="icon">
                    <List className="h-5 w-5" />
                  </div>
                  {/* Teks di sebelah kanan */}
                  <div className="flex flex-col w-full">
                    {/* Baris pertama */}
                    <div className="flex justify-between">
                      <small className="text-md">SPP/Desember</small>
                      <small className="text-md">paid off</small>
                    </div>
                    {/* Baris kedua */}
                    <div className="flex justify-between">
                      <small className="text-[10px]">12-12-2024</small>
                      <small className="text-[10px]">16:45</small>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          
        </Card>
      </div>
      </motion.div>
    </div>
  )
}

export default PaymentList