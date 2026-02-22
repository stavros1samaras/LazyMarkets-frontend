import { ReactNode } from "react";

export default function Service() {
  return (
    <div className=" w-screen">
      {/* <DesktopHeader /> */}
      {/* {children} */}

      {process.env.NODE_ENV === "development" ? <h1>dev</h1> : <h1>prod</h1>}
    </div>
  );
}
