import { cn } from "@/lib/utils"
import { Card } from "./ui/card"
import { NotebookPen, BookMarked, LibraryBig, BookType, CalendarCheck2, School, FolderSearch, Grid2X2, List } from "lucide-react";
import { formatDateTime } from "@/lib/date-time"

type CardItemProps = {
  item: {
    kode_komponen?: number;
    nama_komponen: string;
    jatuh_tempo?: string;
    sisa: number;
    status: string;
    terbayar: number;
    created_at?: string;
  };
  icon: string | null;
};  

export default function CardItem({ item, icon }: CardItemProps) {
  
  const iconMap: Record<string, React.ElementType> = {
    List: List,
    NotebookPen: NotebookPen,
    BookMarked: BookMarked,
    LibraryBig: LibraryBig,
    BookType: BookType,
    CalendarCheck2: CalendarCheck2,
    School: School,
    FolderSearch: FolderSearch,
    Grid2X2: Grid2X2,
  };  

  // Ambil komponen ikon dari peta
  const IconComponent =
  icon && iconMap[icon.trim()]
    ? iconMap[icon.trim()]
    : List;
  
  
  return (
    <Card
      className={cn(
        "flex flex-col justify-center mx-4 mb-4 p-4 gap-y-2 bg-gray-50 shadow-none dark:bg-transparent rounded-lg"
      )}
    >
      <div className="flex gap-4 items-center">
        {/* Ikon di sebelah kiri */}
        <div className="icon">
          <IconComponent className="h-5 w-5" />
        </div>
        {/* Teks di sebelah kanan */}
        <div className="flex flex-col w-full">
          {/* Baris pertama */}
          <div className="flex justify-between">
            <small className="text-md">{item.nama_komponen}</small>
            <small className="text-md lowercase">{item.status}</small>
          </div>
          {/* Baris kedua */}
          <div className="flex justify-between">
            <small className="text-[10px]">
              {item.terbayar !== 0
                ? new Intl.NumberFormat("id-ID").format(item.terbayar)
                : new Intl.NumberFormat("id-ID").format(item.sisa)}
            </small>
            <small className="text-[10px]">
              {item.created_at
                ? formatDateTime(item.created_at).date +
                  formatDateTime(item.created_at).time
                : item.jatuh_tempo
                ? formatDateTime(item.jatuh_tempo).date
                : "-"}
            </small>
          </div>
        </div>
      </div>
    </Card>
  );
}