"use client";

import { languages } from "@/lib/data";
import { useState } from "react";

const Footer = () => {

  const year = new Date().getFullYear()
  const [language, setLanguage] = useState('en')
  const selectedLanguage = languages.find(l => l.value === language)?.label ?? "English (US)";


  return (<>
    <footer className="w-full bg-[#121212] fixed bottom-0">
      <div className="h-20 84px px-36 flex items-center justify-between">


        <div className="relative w-44 h-8 border rounded-sm border-[#767676] cursor-pointer py-1">
          <p className="text-sm text-white px-4 pointer-events-none">{selectedLanguage}</p>

          <select
            id="language"
            name="language"
            value={language}
            onChange={e => setLanguage(e.target.value)}
            className="w-full h-full absolute top-0 left-0 appearance-none px-1 opacity-0 cursor-pointer focus-visible:outline-none">
            {languages.map(language => (
              <option
                className="text-black text-sm "
                key={language.value}
                value={language.value}>
                {language.label}
              </option>
            ))}
          </select>
        </div>

        <p className="text-sm font-semibold text-[#8a8b91]">&copy; {year} TikTok</p>

      </div>
    </footer>
  </>)
}

export default Footer
