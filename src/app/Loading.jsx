"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import gdg_logo from "../../public/assets/logo_gdg.png";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="animate-spin">
        <Image
          src={gdg_logo}
          alt="GDG Logo"
          width={50}
          height={25}
        />
      </div>
    </div>
  );
}
