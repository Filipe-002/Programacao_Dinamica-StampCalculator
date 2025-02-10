import { useState } from "react";

export default function StampSolver() {
  const [stamps, setStamps] = useState("1, 5, 16, 26, 34");
  const [target, setTarget] = useState(55);
  const [result, setResult] = useState(null);

  const findMinStamps = () => {
    const stampValues = stamps.split(",").map((s) => parseInt(s.trim(), 10)).sort((a, b) => a - b);
    const dp = Array(target + 1).fill(Infinity);
    const usedStamps = Array(target + 1).fill(null);
    dp[0] = 0;

    for (let i = 1; i <= target; i++) {
      for (let stamp of stampValues) {
        if (i >= stamp && dp[i - stamp] + 1 < dp[i]) {
          dp[i] = dp[i - stamp] + 1;
          usedStamps[i] = stamp;
        }
      }
    }

    if (dp[target] === Infinity) {
      setResult("Não é possível pagar com esses selos.");
      return;
    }

    let amount = target;
    const chosenStamps = [];
    while (amount > 0) {
      chosenStamps.push(usedStamps[amount]);
      amount -= usedStamps[amount];
    }

    setResult({ minStamps: dp[target], usedStamps: chosenStamps });
  };

  return (
    <div className="p-4 max-w-md mx-auto border rounded-lg shadow-lg bg-white">
      <h2 className="text-lg font-bold mb-2">Calculadora de Selos</h2>
      <input
        type="text"
        value={stamps}
        onChange={(e) => setStamps(e.target.value)}
        placeholder="Digite os valores dos selos separados por vírgula"
        className="border p-2 rounded w-full mb-2"
      />
      <input
        type="number"
        value={target}
        onChange={(e) => setTarget(parseInt(e.target.value, 10))}
        placeholder="Valor a pagar"
        className="border p-2 rounded w-full mb-2"
      />
      <button onClick={findMinStamps} className="bg-blue-500 text-white px-4 py-2 rounded w-full">Calcular</button>
      {result && (
        <div className="mt-4 p-2 border rounded bg-gray-100">
          {typeof result === "string" ? (
            <p>{result}</p>
          ) : (
            <div>
              <p className="font-bold">Mínimo de selos necessários: {result.minStamps}</p>
              <p>Selos utilizados: {result.usedStamps.join(", ")}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
