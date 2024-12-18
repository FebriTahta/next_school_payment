'use client'
import Link from "next/link";
import {Card,CardHeader,CardTitle,CardDescription, CardContent} from "../ui/card"
import { List, NotebookPen, BookMarked, LibraryBig, BookType, CalendarCheck2, School, FolderSearch, Grid2X2 } from "lucide-react";
import { motion } from "framer-motion";

const main_menu1 = [
  {
    menu_icon: BookMarked,
    menu_text: 'SPP'
  },
  {
    menu_icon: BookType,
    menu_text: 'USP'
  },
  {
    menu_icon: NotebookPen,
    menu_text: 'UAS'
  },
  {
    menu_icon: LibraryBig,
    menu_text: 'LKS'
  },
];

const main_menu2 = [
  {
    menu_icon: CalendarCheck2,
    menu_text: 'KGTN'
  },
  {
    menu_icon: School,
    menu_text: 'D.U'
  },
  {
    menu_icon: FolderSearch,
    menu_text: 'Search'
  },
  {
    menu_icon: Grid2X2,
    menu_text: 'more'
  }
]

const Home = () => {
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
        <p className="flex text-4xl mt-4 bg-clip-text bg-gradient-to-br text-white from-white via-neutral-200 to-black/[0.6] max-w-2xl">
          <span className="flex mr-2 text-sm">Rp</span> 500.000,-
        </p>
      </motion.div>

      {/* card*/}
      <motion.div
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
         
        >
      <div className="flex flex-col mt-[-30px] items-center justify-center">
        {/* card name */}
        <Card className="flex z-50 dark:bg-transparent">
          <CardHeader className="pt-2 pb-2">
            <CardTitle className="text-sm">Febri Rizqi Tahta Nugraha</CardTitle>
            <CardDescription>XII RPL I</CardDescription>
          </CardHeader>
        </Card>
        {/* card payment component */}
        <Card className="z-20 mt-[-40px] w-full h-screen rounded-[30px] dark:bg-transparent">
          <CardHeader className="pr-8 pl-8 pt-2">
            <CardTitle className="mt-16">Payment Component</CardTitle>
          </CardHeader>

          <CardContent className="pr-8 pl-8">
            {/* menu component 1 */}
            <div className="menu flex justify-between mt-4">
              {main_menu1.map((item, index)=> (
                <div key={index} className="flex flex-col h-12 w-12 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800">
                  <div className="flex icon">
                    <Link href={'/home'}>
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
                <div key={index} className="flex flex-col h-12 w-12 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800">
                  <div className="flex icon">
                    <Link href={'/home'}>
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

          <CardHeader className="pr-8 pl-8">
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
          <div className="overflow-y-auto pb-4 h-52 scroll-smooth">
            {Array(3).fill(null).map((_, index) => (
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
  );
};

export default Home;
