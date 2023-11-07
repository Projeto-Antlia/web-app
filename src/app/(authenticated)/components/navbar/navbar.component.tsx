"use client";

import { logout } from "@/services/auth.service";
import {
  ArrowRightOnRectangleIcon,
  ChevronDownIcon,
  Cog8ToothIcon,
  QuestionMarkCircleIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { useWindowSize } from "@uidotdev/usehooks";
import React from "react";

export default function LayoutNavbar() {
  const [open, setOpen] = React.useState(false);
  const { width } = useWindowSize();

  const dropdown = [
    {
      name: "Configurações",
      icon: Cog8ToothIcon,
      onAction: () => console.log("abrir configurações"),
    },
    {
      name: "Centro de Suporte",
      icon: QuestionMarkCircleIcon,
      onAction: () => () => console.log("abrir suporte"),
    },
    { name: "Sair", icon: ArrowRightOnRectangleIcon, onAction: () => logout() },
  ];

  return (
    <div className="h-32 flex justify-end items-center">
      <div className="relative ml-3">
        <div>
          <button
            type="button"
            className="relative rounded-lg p-1.5 hover:bg-gray-100 flex gap-x-2 items-center text-sm focus:outline-none"
            id="user-menu-button"
            aria-expanded="false"
            aria-haspopup="true"
            onClick={() => setOpen(!open)}
          >
            <UserCircleIcon className="h-10 w-10" />
            <span
              className={`font-semibold text-gray-800 ${
                width && width <= 1140 && "hidden"
              }`}
            >
              Thiago Alves Oliveira
            </span>
            <ChevronIcon
              icon={ChevronDownIcon}
              className={open && "rotate-180"}
            />
          </button>
        </div>

        <div
          className={`absolute ${
            !open && "scale-0"
          } transition-all duration-300 p-8 right-0 z-10 mt-2 w-[450px] origin-top-right rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="user-menu-button"
          tabIndex={-1}
        >
          <div className="flex w-full items-center gap-x-2 mb-8">
            <div className="flex flex-col flex-grow">
              <span className="font-semibold text-lg">
                Thiago Alves Oliveira
              </span>
              <span className="text-sm text-gray-600">
                thiago_marketingdigital@hotmail.com
              </span>
            </div>
            <button className="rounded-2xl px-4 h-8 bg-lime-600">
              <span className="text-sm text-blue-lime-950 font-semibold">
                Detalhes
              </span>
            </button>
          </div>
          <ul className="flex flex-col w-full ">
            {/* <!-- Active: "bg-gray-100", Not Active: "" --> */}
            {dropdown.map(({ name, icon: Icon, onAction }, i) => (
              <li key={i}>
                <button
                  type="button"
                  onClick={onAction}
                  className={`flex gap-x-4 items-center py-2 text-gray-700  hover:text-purple-600 group`}
                >
                  {/* <span className="w-1.5 h-8 bg-purple-600 rounded-r-full left-0 scale-y-0 -translate-x-full group-hover:scale-y-100 group-hover:translate-x-0 transition-transform ease-in-out" /> */}
                  <Icon className="w-6 h-6" />
                  <span className="text-md">{name}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

interface ChevronProps {
  icon: React.ElementType;
  className?: false | string;
}

const ChevronIcon = ({ icon: Icon, className }: ChevronProps) => {
  return <Icon className={`w-4 h-4 ${className}`} />;
};
