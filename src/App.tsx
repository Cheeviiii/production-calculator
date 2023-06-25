import { useState } from "react";
import { Darkmode } from "./components/Darkmode";

export const App = () => {
  const [numerosString, setNumerosString] = useState("");
  const [resultado, setResultado] = useState(0);

  const calcularNumeros = () => {
    const numerosArray = numerosString
      .split(",")
      .map((numero) => parseFloat(numero));
    const resultado = numerosArray.reduce(
      (acumulator, numero) => acumulator + numero,
      0
    );

    setResultado(resultado);
  };

  if (Number.isNaN(resultado)) {
    setResultado(0)
  }

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
        <button
          className="bg-red-500 p-2 px-10 rounded text-white font-bold uppercase transition-transform hover:scale-110 shadow-2xl"
          onClick={calcularNumeros}
        >
          Calcular
        </button>
        {resultado >=1 ? <p className="text-4xl font-bold">Resultado: {resultado}</p> : ''}
      </div>
    </div>
  );
};
