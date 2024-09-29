import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { FaBell } from "react-icons/fa6";
import Image from "next/image";

const Notifications = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="background-light100_dark900 focus:bg-light-100 dark:focus:bg-dark-900 data-[state=open]:bg-light-100 dark:data-[state=open]:bg-dark-900  w-8 h-8 p-0 flex-center rounded-[6px] cursor-pointer">
        <FaBell className="text-light400_dark600 text-xl" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="background-light50_dark950 absolute left-[-3rem] top-4 rounded-xl border-none shadow-light-200 dark:shadow-dark-200 min-w-72 p-0">
        <DropdownMenuLabel className="text-light100_dark900 h3-semibold text-right p-3">
          اعلان ها
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="hover:background-light200_dark800 text-light100_dark900 flex flex-row-reverse items-center gap-3 cursor-pointer p-3">
          <Image
            src="https://i.pravatar.cc/150"
            width={40}
            height={40}
            alt="avatar"
            className="rounded"
          />
          <div>
            <p className="text-light300_dark700 body-medium">
              <span className="body-semibold text-light100_dark900">
                مهدی مهدوی
              </span>{" "}
              پست شما را پاسخ داد
            </p>
            <p className="text-light400_dark600 subtle-medium direction-reverse flex flex-row-reverse gap-1 mt-1">
              <span>1</span>
              <span>دقیقه پیش</span>
            </p>
          </div>
        </DropdownMenuItem>

        <DropdownMenuItem className="hover:background-light200_dark800 text-light100_dark900 flex flex-row-reverse items-center gap-3 cursor-pointer p-3">
          <Image
            src="https://i.pravatar.cc/150"
            width={40}
            height={40}
            alt="avatar"
            className="rounded"
          />
          <div>
            <p className="text-light300_dark700 body-medium">
              <span className="body-semibold text-light100_dark900">
                محمد محمدی
              </span>{" "}
              شما را دنبال کرد
            </p>
            <p className="text-light400_dark600 subtle-medium direction-reverse flex flex-row-reverse gap-1 mt-1">
              <span>2</span>
              <span>ساعت پیش</span>
            </p>
          </div>
        </DropdownMenuItem>

        <DropdownMenuItem className="hover:background-light200_dark800 text-light100_dark900 flex flex-row-reverse items-center gap-3 cursor-pointer p-3">
          <Image
            src="https://i.pravatar.cc/150"
            width={40}
            height={40}
            alt="avatar"
            className="rounded"
          />
          <div>
            <p className="text-light300_dark700 body-medium">
              <span className="body-semibold text-light100_dark900">
                علی علوی
              </span>{" "}
              پست شما را پسندید
            </p>
            <p className="text-light400_dark600 subtle-medium direction-reverse flex flex-row-reverse gap-1 mt-1">
              <span>10</span>
              <span>دقیقه پیش</span>
            </p>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Notifications;
