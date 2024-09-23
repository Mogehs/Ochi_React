import React from "react";

export const DrawOutlineButton = ({ children, ...rest }) => {
  return (
    <button
      {...rest}
      className="group relative py-[1.2px] font-smemibold text-white transition-colors duration-[400ms] "
    >
      <span>{children}</span>

      <span className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-white transition-all delay-200 duration-500 group-hover:w-full" />
    </button>
  );
};
