import { Card } from "../ui/card"
import { List } from "lucide-react"

const PaymentComponentList = () => {
  return (
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
                <small className="text-md">Insufficient</small>
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
  )
}

export default PaymentComponentList