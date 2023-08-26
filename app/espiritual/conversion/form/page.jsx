"use client";
import Years from "@/components/Years";
import { useRouter } from "next/navigation";

export default function Form() {
  const router = useRouter();
  return (
    <>
      <div className="my-4">
        <Years />
      </div>
      <main className="min-h-screen flex flex-col justify-evenly md:items-center w-screen bg-gray-100">
          <div className="">
            <h1 className="text-4xl text-blue-700">Conversión</h1>
          </div>
          <div className="space-y-3 bg-white p-8 md:w-2/3 md:rounded-lg shadow-xl w-full md:shadow-blue-600">
            <label className="block font-bold text-blue-700" htmlFor="que">
              ¿Qué haré?
            </label>
            <input
              className="block w-full border rounded px-3 py-2 border-blue-700"
              id="que"
              type="text"
            />

            <label className="block font-bold text-blue-700" htmlFor="por-que">
              ¿Por qué lo hago?
            </label>
            <input
              className="block w-full border rounded px-3 py-2 border-blue-700"
              id="por-que"
              type="text"
            />

            <label className="block font-bold text-blue-700" htmlFor="como">
              ¿Cómo lo haré?
            </label>
            <input
              className="block w-full border rounded px-3 py-2 border-blue-700"
              id="como"
              type="text"
            />

            <label className="block font-bold text-blue-700" htmlFor="cuando">
              ¿Cuándo lo haré?
            </label>
            <input
              className="block w-full border rounded px-3 py-2 border-blue-700"
              id="cuando"
              type="text"
            />

            <label className="block font-bold text-blue-700" htmlFor="donde">
              ¿Dónde lo haré?
            </label>
            <input
              className="block w-full border rounded px-3 py-2 border-blue-700"
              id="donde"
              type="text"
            />

            <label className="block font-bold text-blue-700" htmlFor="con-quien">
              ¿Con quién lo haré?
            </label>
            <input
              className="block w-full border rounded px-3 py-2 border-blue-700"
              id="con-quien"
              type="text"
            />

            <label className="block font-bold text-blue-700" htmlFor="cuanto">
              ¿Cuánto me costará?
            </label>
            <input
              className="block w-full border rounded px-3 py-2 border-blue-700"
              id="cuanto"
              type="text"
            />
          </div>

          <div className="w-screen h-12 my-2 flex items-center justify-center">
            <a
              href="../page.jsx"
              className="bg-blue-500 px-5 py-2 text-white rounded-xl"
            >
              Guardar
            </a>
          </div>
      </main>

    </>
  )
}