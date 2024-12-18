import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { cn } from "@/utils/cn";

export default function FirmButton({props}:{props: string}) {
  const label = "Start";
  return (
    <Link href={props} className="group rounded-xl border-4 border-violet-800 border-opacity-0 bg-transparent transition-all duration-500 hover:border-opacity-100">
      <div className="relative flex items-center justify-center gap-4 overflow-hidden rounded-lg bg-violet-800 px-4 py-3 font-bold text-white text-sm">
        {label}
        <ArrowRight className="transition-all group-hover:translate-x-2 group-hover:scale-125" />
        <div
          className={cn(
            "absolute -left-16 top-0 h-full w-12 rotate-[30deg] scale-y-150 bg-white/10 transition-all duration-700 group-hover:left-[calc(100%+1rem)]",
          )}
        />
      </div>
    </Link>
  );
}
