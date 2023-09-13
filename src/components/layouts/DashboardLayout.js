import React from "react";
import GreenSidebar from "../includes/GreenSidebar";
import GreenTopbar from "../includes/GreenTopbar";

export default function DashboardLayout({ children }) {
  return (
    <div className="w-full">
      <div className="flex flex-row items-stretch">
        <div className="basis-1/5">
          <GreenSidebar />
        </div>
        <div className="basis-4/5">
          <GreenTopbar />
          <div className="p-10">{children}</div>
        </div>
      </div>
    </div>
  );
}
