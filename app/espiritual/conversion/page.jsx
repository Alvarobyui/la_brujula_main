"use client";
import Years from "@/components/Years";
import { useRouter } from "next/navigation";

const Conversion = () => {
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
          <h1 className="font-bold text-blue-700">¿Qué haré?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. similique
            delectus?
          </p>

          <h1 className="font-bold text-blue-700">¿Por qué lo hago?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. similique
            delectus?
          </p>

          <h1 className="font-bold text-blue-700">¿Cómo lo haré?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. similique
            delectus?
          </p>

          <h1 className="font-bold text-blue-700">¿Cuándo lo haré?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. similique
            delectus?
          </p>

          <h1 className="font-bold text-blue-700">¿Dónde lo haré?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. similique
            delectus?
          </p>

          <h1 className="font-bold text-blue-700">¿Con quién lo haré?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. similique
            delectus?
          </p>

          <h1 className="font-bold text-blue-700">¿Cuánto me costará?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. similique
            delectus?
          </p>
        </div>

        <div className="w-screen h-12 my-2 flex justify-center">
          <button
            onClick={() => {
              router.push("conversion/form");
            }}
            className="bg-blue-500 px-2 text-white rounded-xl"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="40"
              viewBox="0 -960 960 960"
              width="40"
              aria-hidden="true"
              fill="currentColor"
            >
              <path d="M180-180h44l443-443-44-44-443 443v44Zm614-486L666-794l42-42q17-17 42-17t42 17l44 44q17 17 17 42t-17 42l-42 42Zm-42 42L248-120H120v-128l504-504 128 128Zm-107-21-22-22 44 44-22-22Z" />
            </svg>
          </button>
        </div>
      </main>
    </>
  );
};

export default Conversion;
