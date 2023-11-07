import FormLogin from "./components/login";

export default function SidebarWithCta() {
  return (
    <>
      <div className="flex w-screen h-screen justify-center mt-32">
        <div className="max-w-lg w-full space-y-8 mx-auto">
          <div className="mb-10">
            <div className="flex justify-center">
              <h3 className="block antialiased tracking-normal font-sans text-3xl font-semibold leading-snug text-purple-500">
                ANTLIA
              </h3>
            </div>
            <h2 className="mt-20 text-center text-2xl font-semibold">
              Olá de novo!
            </h2>
          </div>
          <FormLogin />
        </div>
      </div>
    </>
  );
}
