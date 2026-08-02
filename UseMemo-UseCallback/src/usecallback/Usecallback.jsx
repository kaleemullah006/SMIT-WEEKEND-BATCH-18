import { useCallback, useState } from "react";

function UseCallback() {
  const [number, setNumber] = useState(1);
  const [name, setName] = useState("");

  const increaseNumber = useCallback(() => {
    setNumber((prev) => prev + 1);
  }, []);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-black py-6">
        <h1 className="w-full rounded-2xl border border-purple-200/30 bg-gradient-to-b from-purple-400 to-purple-700 px-6 py-4 text-center text-xl font-bold text-white shadow-[0_7px_0_#6b21a8,0_12px_20px_rgba(0,0,0,0.4)]">
          UseCallback
        </h1>
        <div className="mx-auto mt-12 flex w-[250px] flex-col items-center gap-6 rounded-3xl border border-white/20 bg-gradient-to-br from-slate-700 to-slate-950 p-8 shadow-[0_15px_0_#020617,0_25px_50px_rgba(0,0,0,0.6)]">
          <h2 className="w-full rounded-2xl border border-purple-200/30 bg-gradient-to-b from-purple-400 to-purple-700 px-6 py-4 text-center text-xl font-bold text-white shadow-[0_7px_0_#6b21a8,0_12px_20px_rgba(0,0,0,0.4)]">
            Number: {number}
          </h2>

          <button
            className="w-full rounded-2xl border border-blue-300/30 bg-gradient-to-b from-blue-400 to-blue-700 px-6 py-4 font-bold text-white shadow-[0_8px_0_#1e3a8a,0_14px_25px_rgba(0,0,0,0.5)] transition duration-150 hover:-translate-y-1 hover:shadow-[0_12px_0_#1e3a8a,0_18px_30px_rgba(0,0,0,0.5)] active:translate-y-2 active:shadow-[0_3px_0_#1e3a8a] "
            onClick={increaseNumber}
          >
            ADD
          </button>

          <input
            className="w-full border bg-slate-800 border-red-200/30 rounded-2xl px-6 py-4  text-xl font-bold text-white shadow-[0_7px_0_#475569,0_12px_20px_rgba(15,23,42,0.4)]"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Name"
          />

          <h2 className="w-full rounded-2xl border border-purple-200/30 bg-gradient-to-b from-purple-400 to-purple-700 px-6 py-4 text-center text-xl font-bold text-white shadow-[0_7px_0_#6b21a8,0_12px_20px_rgba(0,0,0,0.4)]">
           .... {name}
          </h2>
        </div>
      </div>
    </>
  );
}

export default UseCallback;
