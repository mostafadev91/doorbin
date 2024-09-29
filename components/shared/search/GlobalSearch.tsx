import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { Input } from "@/components/ui/input";

const GlobalSearch = () => {
  return (
    <div className="relative w-full max-w-96">
      <div className="background-light100_dark900 w-full rounded-xl h-10 flex items-center px-4">
        <FaMagnifyingGlass className="text-light400_dark600 text-xl" />
        <Input
          type="text"
          className="background-light100_dark900 text-light300_dark700 w-full h-full outline-none border-none base-medium placeholder:text-light-500"
          placeholder="جستجو ..."
        />
      </div>
    </div>
  );
};

export default GlobalSearch;
