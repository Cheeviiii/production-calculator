import { useEffect, useState } from "react";
import { Darkmode } from "./components/Darkmode";

export const App = () => {
  const [numerosString, setNumerosString] = useState("");
  const [resultado, setResultado] = useState(0);

  useEffect(() => {
    const calcularNumeros = () => {
      try {
        const numerosArray = numerosString
          .split(",")
          .map((numero) => parseFloat(numero));
        const resultado = numerosArray.reduce(
          (acumulator, numero) => acumulator + numero,
          0
        );

        setResultado(resultado);

        if (Number.isNaN(resultado)) {
          setResultado(0);
        }
      } catch (err) {
        console.error(err);
      }
    };

    calcularNumeros();
  }, [numerosString]);

  return (
    <div className="w-full h-screen flex flex-col items-center p-auto m-auto">
      <Darkmode />
      <div className="h-screen flex flex-col gap-5 items-center justify-center">
        <h1 className="font-medium text-2xl">Calcule sua produção diária.</h1>
        <textarea
          className="p-2 w-[350px] md:w-[500px] text-black border-2 border-red-500 rounded focus:outline-none font-medium shadow-2xl"
          placeholder="Exemplo: 1234,1234,1234..."
          value={numerosString}
          onChange={(e) => setNumerosString(e.target.value)}
        />
        <h1 className="absolute bottom-0 right-0 m-3 bg-red-500 p-2 px-5 rounded-3xl text-bold text-xl text-white">Alguem ainda usa isso?</h1>
        <p className="text-4xl font-bold">Resultado: {resultado}</p>
      </div>
    </div>
  );
};
