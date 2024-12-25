'use client'

import { useState, useEffect } from 'react';
import Link from "next/link";
import { Card,CardHeader,CardTitle,CardDescription, CardContent } from "../ui/card"
import { NotebookPen, BookMarked, LibraryBig, BookType, CalendarCheck2, School, FolderSearch, Grid2X2 } from "lucide-react";
import { motion } from "framer-motion";
import { MonthlyRecapPaymentResponse } from "@/interface/home";
import { monthlyRecapPayment } from '@/api/home'; 
import SkeletonItemCard from '../skeleton-item-card';
import CardItem from '../card-item';
import { checkTokenActive } from '@/lib/jwt';


const main_menu1 = [
  { menu_icon: BookMarked, menu_text: 'SPP', komponen: 'spp',menu_icon_text: 'BookMarked'},
  { menu_icon: BookType, menu_text: 'USP', komponen: 'usp',menu_icon_text: 'BookType' },
  { menu_icon: NotebookPen, menu_text: 'UAS', komponen: 'uas',menu_icon_text: 'NotebookPen' },
  { menu_icon: LibraryBig, menu_text: 'LKS', komponen: 'lks',menu_icon_text: 'LibraryBig' },
];

const main_menu2 = [
  { menu_icon: CalendarCheck2, menu_text: 'KGTN' , komponen: 'kegiatan',menu_icon_text: 'CalendarCheck2'},
  { menu_icon: School, menu_text: 'D.U', komponen: 'daftar ulang',menu_icon_text: 'School' },
  { menu_icon: FolderSearch, menu_text: 'Search', komponen: 'search',menu_icon_text: 'FolderSearch' },
  { menu_icon: Grid2X2, menu_text: 'more', komponen: 'more',menu_icon_text: 'Grid2X2' },
];

const Home = () => {

  const [namaSiswa, setNamaSiswa] = useState('');
  const [kdRombel, setKdRombel] = useState('');
  const [nis, setNis] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState<MonthlyRecapPaymentResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [token, setToken] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const statusToken = checkTokenActive();
        if (statusToken.status == true) {
          setNamaSiswa(statusToken.data?.NAMASISWA || "-");
          setKdRombel(statusToken.data?.KDROMBEL || "-");
          setNis(statusToken.data?.data || "-");
          setToken(statusToken.cookieToken || "-");
          try {
            const monthlyPaymentRes = await monthlyRecapPayment(statusToken.data?.data, statusToken.cookieToken);
            setMonthlyPayment(monthlyPaymentRes);
          } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Unknown error';
            setError(`${errorMessage}`);
          }
        } else {
          setError('No auth token found.');
        }
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        setError(`An error occurred during data fetching.: ${errorMessage}`);
      } finally {
        setLoading(false); // Pastikan loading selesai
      }
    };

    fetchData();
  }, []);

  return (
    <div className="h-full top-2 w-screen max-w-md relative">
      {/* Konten Tengah */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        className="h-52 w-full flex flex-col items-center justify-center z-10"
      >
        <h5 className="text-transparent text-center font-bold bg-clip-text bg-gradient-to-br from-white via-neutral-200 to-black/[0.6] max-w-2xl">
          Monthly Payment
        </h5>
        <p className="text-sm text-white bg-clip-text bg-gradient-to-br from-white via-neutral-200 to-black/[0.6] max-w-2xl">
          December
        </p>
        <div className="flex text-4xl mt-4 bg-clip-text bg-gradient-to-br text-white from-white via-neutral-200 to-black/[0.6] max-w-2xl">
          <span className="flex mr-2 text-sm">Rp</span>
          {loading || error ? (<>
          <div role="status">
              <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
              </svg>
              <span className="sr-only">Loading...</span>
          </div>
          </>) : (new Intl.NumberFormat('id-ID').format(monthlyPayment?.data.total_payment || 0))},-
        </div>
      </motion.div>

      {/* card*/}
      <motion.div
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
         
        >
      <div className="flex flex-col mt-[-30px] items-center justify-center">
        {/* card name */}
        <Card className="flex z-50 dark:bg-slate-900 dark:bg-opacity-70">
          <CardHeader className="pt-2 pb-2">
            <CardTitle className="text-sm">{namaSiswa}</CardTitle>
            <CardDescription>{kdRombel}</CardDescription>
          </CardHeader>
        </Card>
        {/* card payment component */}
        <Card className="z-20 pr-7 pl-7 mt-[-40px] w-full h-screen rounded-[30px] dark:bg-slate-900 dark:bg-opacity-70">
          <CardHeader>
            <CardTitle className="mt-16">Payment Component</CardTitle>
          </CardHeader>

          <CardContent>
            {/* menu component 1 */}
            <div className="menu flex justify-between mt-4">
              {main_menu1.map((item, index)=> (
                <div key={index} className="flex flex-col hover:scale-125 h-12 w-12 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800">
                  <div className="flex icon">
                    <Link 
                      href={{
                        pathname: '/payment-list',
                        query: {
                          nis: btoa(nis),
                          kd_rombel: btoa(kdRombel),
                          payment_type: btoa(encodeURIComponent(item.komponen.toLowerCase())), // komponen
                          i_pay: item.menu_icon_text, // icon
                          token: btoa(token)
                        },
                      }}>
                      {
                        <item.menu_icon className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                      }
                    </Link>
                  </div>
                  <div className="flex text">
                    <p className="text-[10px]">{item.menu_text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="menu flex justify-between mt-4">
              {main_menu2.map((item, index)=> (
                <div key={index} className="flex flex-col hover:scale-125 h-12 w-12 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800">
                  <div className="flex icon">
                    <Link href={{
                        pathname: '/payment-list',
                        query: {
                          nis: btoa(nis),
                          kd_rombel: btoa(kdRombel),
                          payment_type: btoa(encodeURIComponent(item.komponen.toLowerCase())), // komponen
                          i_pay: btoa(`${item.menu_icon}`), // icon
                          token: btoa(token)
                        },
                      }}>
                      {
                        <item.menu_icon className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                      }
                    </Link>
                  </div>
                  <div className="flex text">
                    <p className="text-[10px]">{item.menu_text}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>

          <CardHeader>
            <div className="flex flex-row justify-between">
              <div className="flex flex-col text_left">
                <small className="text-xs">Last transaction</small>
              </div>
             <div className="flex text-right">
              <p className=" text-xs">More..</p>
             </div>
            </div>
          </CardHeader>

          
          {/* transaksi bulan ini */}
          <div className="overflow-y-auto pb-4 h-[25vh] scroll-smooth">
            {
              loading || error ? (
                <div className='className="flex flex-col justify-center mx-4 mb-4 p-4 gap-y-2 bg-gray-50 shadow-none dark:bg-slate-900 dark:bg-opacity-70 rounded-lg"'>
                  <SkeletonItemCard/>
                </div>
              ) 
              : (
                monthlyPayment?.data.payment_list.map((item, index) => (
                  <CardItem key={index} item={item} icon={null}/>
                ))
              )
            }
            <div className="flex justify-center shadow-none dark:bg-slate-900 dark:bg-opacity-70 rounded-lg">
              {error && <p className="text-red-500 text-[8px]">{error}</p>}
            </div>
          </div>
        </Card>
      </div>
      </motion.div>
    </div>
  );
};

export default Home;
