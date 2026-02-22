import { ReactNode } from "react";

export default function Service({ children }: { children: ReactNode }) {
  return (
    <div className=" w-screen">
      {/* <DesktopHeader /> */}
      {children}
    </div>
  );
}
