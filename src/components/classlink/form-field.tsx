"use client";

import { cn } from "@/lib/utils";
import { Open_Sans } from "next/font/google";

interface FormFieldProps {
  id: string;
  type: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}


const openSans = Open_Sans({
  variable: '--open-sans',
  subsets: ['latin'],
})


export const FormField = ({ id, type, label, value, onChange }: FormFieldProps) => (
  <div className="relative">
    <input
      type={type}
      id={id}
      placeholder=" "
      value={value}
      onChange={onChange}
      className="peer w-full h-[3.75rem] p-4 pb-2.5 border-2 border-[#555] outline-classlink focus:outline-2 outline-offset-[6px] rounded-md text-[#555] text-sm font-medium"
    />
    <label
      htmlFor={id}
      className={cn(
        "absolute left-[15px] text-[#333] font-semibold transition-all duration-200",
        openSans.className,
        value ? "top-2 text-[11px]" : "top-4 text-base text-[#555]",
        "peer-focus:top-2 peer-focus:text-[11px]"
      )}
    >
      {label}
    </label>
  </div>
);
