"use client";

import {
  ChartBarIcon,
  CubeIcon,
  HomeIcon,
  ShoppingBagIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LayoutSidebar() {
  const pathname = usePathname();

  const sidebar = [
    { name: "Página inicial", icon: HomeIcon, path: "/" },
    { name: "Vendas", icon: ShoppingBagIcon, path: "/pedidos" },
    { name: "Produtos", icon: CubeIcon, path: "/produtos" },
    { name: "Faturamento", icon: ChartBarIcon, path: "/faturamento" },
    { name: "Gerenciar", icon: Squares2X2Icon, path: "/gerenciar" },
  ];

  return (
    <aside className="w-72">
      <div className="h-32 flex items-center justify-center">
        <h3 className="block antialiased tracking-normal font-sans text-3xl font-semibold leading-snug text-purple-500">
          ANTLIA
        </h3>
      </div>
      <ul className="flex flex-col w-full gap-y-2">
        {sidebar.map(({ name, path, icon: Icon }, i) => (
          <li key={i} className="w-full">
            <Link
              href={path}
              className={`flex gap-x-4 items-center py-2 text-gray-700 ${
                pathname === path && "text-purple-600 font-semibold"
              } hover:text-purple-600 group`}
            >
              {/* <span className="w-1.5 h-8 bg-purple-600 rounded-r-full left-0 scale-y-0 -translate-x-full group-hover:scale-y-100 group-hover:translate-x-0 transition-transform ease-in-out" /> */}
              <Icon className="w-6 h-6" />
              <span className="text-md">{name} </span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
