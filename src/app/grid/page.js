export default function Home() {
    return (
        <main>
            <section id="skills-section" className="bg-cyan-300 w-screen h-screen grid grid-rows-10 gap-4 p-4">
                <div className="row-span-6 grid grid-cols-2 gap-4">
                    <div className="bg-blue-200 border-2 border-black rounded-2xl col-span-1 h-full w-full grid grid-rows-2 grid-cols-3 gap-2 p-2">
                        <div className="bg-purple-200 border-2 border-black rounded-2xl"></div>
                        <div className="bg-yellow-200 border-2 border-black rounded-2xl"></div>
                        <div className="bg-pink-200 border-2 border-black rounded-2xl"></div>
                        <div className="bg-orange-200 border-2 border-black rounded-2xl"></div>
                        <div className="bg-gray-200 border-2 border-black rounded-2xl"></div>
                        <div className="bg-indigo-200 border-2 border-black rounded-2xl"></div>
                    </div>
                    <div className="bg-red-200 border-2 border-black rounded-2xl col-span-1 h-full w-full grid grid-rows-2 grid-cols-3 gap-2 p-2">
                        <div className="bg-green-300 border-2 border-black rounded-2xl"></div>
                        <div className="bg-pink-300 border-2 border-black rounded-2xl"></div>
                        <div className="bg-teal-200 border-2 border-black rounded-2xl"></div>
                        <div className="bg-purple-300 border-2 border-black rounded-2xl"></div>
                        <div className="bg-yellow-300 border-2 border-black rounded-2xl"></div>
                        <div className="bg-indigo-300 border-2 border-black rounded-2xl"></div>
                    </div>
                </div>
                <div className="bg-green-200 border-2 border-black rounded-2xl row-span-4 h-full w-full grid grid-cols-3 gap-2 p-2">
                    <div className="bg-red-300 border-2 border-black rounded-2xl"></div>
                    <div className="bg-blue-300 border-2 border-black rounded-2xl"></div>
                    <div className="bg-yellow-400 border-2 border-black rounded-2xl"></div>
                </div>
            </section>
        </main>
    );
}
