export default function Home() {
    return (
      <main>
        <section id="skills-section" className="bg-cyan-300 w-screen h-[100svh] grid grid-cols-1 lg:grid-cols-2 grid-rows-7 lg:grid-rows-10 gap-4 p-4">
          <div className="row-span-3 lg:row-span-6 col-span-1 lg:col-span-1 flex flex-col">
          <h2 className="text-xl text-center font-bold mb-2">Frontend</h2>
            <div className="bg-blue-200 border-2 border-black rounded-2xl h-full w-full grid grid-rows-2 grid-cols-3 gap-2 p-2">
              <div className="bg-purple-200 border-2 border-black rounded-2xl"></div>
              <div className="bg-yellow-200 border-2 border-black rounded-2xl"></div>
              <div className="bg-pink-200 border-2 border-black rounded-2xl"></div>
              <div className="bg-orange-200 border-2 border-black rounded-2xl"></div>
              <div className="bg-gray-200 border-2 border-black rounded-2xl"></div>
              <div className="bg-indigo-200 border-2 border-black rounded-2xl"></div>
            </div>
          </div>
          <div className="row-span-3 lg:row-span-6 col-span-1 lg:col-span-1 flex flex-col">
          <h2 className="text-xl text-center font-bold mb-2">Backend</h2>
            <div className="bg-red-200 border-2 border-black rounded-2xl h-full w-full grid grid-rows-2 grid-cols-3 gap-2 p-2">
              <div className="bg-green-300 border-2 border-black rounded-2xl"></div>
              <div className="bg-pink-300 border-2 border-black rounded-2xl"></div>
              <div className="bg-teal-200 border-2 border-black rounded-2xl"></div>
              <div className="bg-purple-300 border-2 border-black rounded-2xl"></div>
              <div className="bg-yellow-300 border-2 border-black rounded-2xl"></div>
              <div className="bg-indigo-300 border-2 border-black rounded-2xl"></div>
            </div>
          </div>
          <div className="row-span-4 col-span-1 lg:col-span-2 flex flex-col">
            <h2 className="text-xl text-center font-bold mb-2">Backend</h2>
            <div className="bg-green-200 border-2 border-black rounded-2xl h-full w-full grid grid-cols-3 gap-2 p-2">
              <div className="bg-red-300 border-2 border-black rounded-2xl"></div>
              <div className="bg-blue-300 border-2 border-black rounded-2xl"></div>
              <div className="bg-yellow-400 border-2 border-black rounded-2xl"></div>
            </div>
          </div>
        </section>
      </main>
    );
  }
  