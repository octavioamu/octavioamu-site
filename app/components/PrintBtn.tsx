"use client";

import { ComponentProps } from "react";

const PrintBtn = ({
  children,
  className,
  ...props
}: ComponentProps<"button">) => {
  const print = () => {
    window.print();
  };

  return (
    <button
      onClick={print}
      className={`${className} bg-[#f9c510] text-sm rounded py-1 px-2 `}
      {...props}
    >
      {children}
    </button>
  );
};

export default PrintBtn;
