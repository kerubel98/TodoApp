import React from "react";
import { BellIcon } from "@heroicons/react/24/outline";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CardWithForm } from "./todo/tasksCard";

const user = {
  name: "userprofile",
  avatar: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
};
const Userprofile = () => {
  return (
    <div className="flex flex-row items-center h-full w-full  font-semibold  hover:bg-blue-100 hover:text-sky-600 hover:rounded-md pl-2">
      <img
        src={user.avatar}
        alt={user.name}
        className="object-cover md:w-10 md:h-10  h-[50px] w-[50px] justify-center rounded-full md:overflow-hidden overflow-visible"
      />
      <div className="hidden  ml-3 md:flex flex-row items-center gap-14 justify-end">
        <p className="">{user.name}</p>
        <div className="w-14 h-14 object-cover flex gap-3">
          <BellIcon className="hover:cursor-pointer" />
          <Popover>
            <PopoverTrigger>
              <PlusCircleIcon className="w-10" />
            </PopoverTrigger>
            <div className="relative left-32">
            <PopoverContent className="absolute left-80 w-full h-full p-0 rounded-lg z-50">
              <CardWithForm />
            </PopoverContent>
            </div>
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default Userprofile;
