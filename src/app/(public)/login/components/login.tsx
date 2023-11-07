"use client";

import { signIn } from "@/services/auth.service";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  username: z.string(),
  password: z.string(),
});

type ValidationSchema = z.infer<typeof schema>;

export default function FormLogin() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ValidationSchema>({
    mode: "onBlur",
    resolver: zodResolver(schema),
  });

  const router = useRouter();

  const onSubmit: SubmitHandler<ValidationSchema> = (data) => {
    signIn(data).then(() => router.push("/"));
  };

  return (
    <form className="mt-8" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <div className="my-5">
          <label htmlFor="username">O seu nome de usuário</label>
          <input
            id="username"
            type="text"
            {...register("username")}
            placeholder="Seu nome de usuário"
            className="rounded-md appearance-none relative mt-1 block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
            required
          />
        </div>
        <div className="my-5">
          <label htmlFor="password" className="text-color-gray-300">
            A sua senha
          </label>
          <input
            id="password"
            type="password"
            {...register("password")}
            placeholder="********"
            className="rounded-md appearance-none relative mt-1 block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
            required
          />
        </div>
      </div>
      <button
        type="submit"
        className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-3xl text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mt-8"
      >
        Login
      </button>
    </form>
  );
}
