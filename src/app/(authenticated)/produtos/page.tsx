import DraftIcon from "@/icons/draft.svg";
import InvisibleIcon from "@/icons/invisible.svg";
import LayersIcon from "@/icons/layers.svg";
import MailIcon from "@/icons/mail.svg";
import { PlusSmallIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const status = [
  { name: "Publicado", icon: LayersIcon },
  { name: "Rascunho", icon: DraftIcon },
  { name: "Oculto", icon: InvisibleIcon },
  { name: "Deletado", icon: MailIcon },
];

export default function Page() {
  const bgColor = "bg-purple-500";
  const textColor = "text-purple-600";

  return (
    <>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-semibold text-3xl">Produtos</h1>
          <p className="text-sm font-medium text-gray-500 mt-1">
            Cadastre os seus produtos aqui
          </p>
        </div>
        <button
          className={`inline-flex gap-x-2 items-center py-2.5 px-6 text-white ${bgColor} rounded-xl hover:bg-purple-600 focus:outline-none focus:ring-2 focus:${bgColor} focus:ring-offset-1"`}
        >
          <PlusSmallIcon className="w-6 h-6 text-white" />
          <span className="text-sm font-semibold tracking-wide">Produto</span>
        </button>
      </div>

      <ul className="flex items-center justify-between mt-10 px-4 border-y border-gray-200">
        {status.map((item, i) => (
          <li key={i}>
            <button
              className={`flex gap-x-2 items-center py-5 px-6 text-gray-500 hover:${textColor} relative group`}
            >
              <Image src={item.icon} className="w-6 h-6 fill-current" alt="" />
              <span className="font-medium"> {item.name} </span>
              <span
                className={`absolute w-full h-0.5 left-3 ${bgColor} rounded bottom-0 scale-x-0 group-hover:scale-x-100 transition-transform ease-in-out`}
              />
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
