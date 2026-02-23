"use client";
import { Spinner } from "@/components/ui/spinner";
import Link from "next/link";
import { useState } from "react";

export default function SidebarEvent({ code, name, className = "" }: any) {
  const [loading, setLoading] = useState(false);

  return (
    <Link
      href={`/countries/${code}`}
      className={`flex items-center w-50 ${className}`}
      onClick={() => setLoading(true)}
    >
      {name}
      {loading && <Spinner className="ml-2 h-4 w-4" />}
    </Link>
  );
}
