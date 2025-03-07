import Link from "next/link";

import { Button } from "@/components/ui/button";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center gap-8 p-8">
      <h1 className="text-3xl font-bold">Bem-vindo ao FSW Donalds</h1>{" "}
      {/*Welcome to FSW Donalds */}
      <p className="text-center text-lg">
        Peça sua comida e bebida favorita no FSW Donalds mais perto de você.
        {/*Order your favorite food and drinks from your nearest FSW Donalds.*/}
      </p>
      <p className="text-center text-lg">
        Escolha o seu restaurante abaixo.
        {/*Choose your restaurant below.*/}
      </p>
      <div>
        <Button variant="destructive" className="rounded-full" asChild>
          <Link href={`/fsw-donalds`}>FSW Donalds</Link>
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
