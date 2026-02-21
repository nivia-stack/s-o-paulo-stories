import { Smartphone } from "lucide-react";

const RotationAlert = () => {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black px-8 text-center sm:hidden portrait:flex">
      <div className="mb-8 animate-rotate-phone text-amber-500">
        <Smartphone size={80} strokeWidth={1.5} />
      </div>
      
      <h2 className="mb-4 text-2xl font-bold text-white">
        Vire seu aparelho
      </h2>
      
      <p className="max-w-[280px] text-zinc-400">
        Para apreciar os detalhes e ver o narrador, utilize o celular na horizontal.
      </p>

      <div className="mt-10 h-1 w-32 overflow-hidden rounded-full bg-zinc-800">
        <div className="h-full w-full bg-amber-500/50 animate-progress"></div>
      </div>
    </div>
  );
};

export default RotationAlert;