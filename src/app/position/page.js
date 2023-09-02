export default function Position() {
    return (
        <main className="absolute h-[50vh] w-screen bg-gradient-to-r from-indigo-500 group peer/rs">
          <div className="m-1 aspect-square bg-slate-400 h-[10vw]  transition-all duration-[3000ms] ease-linear peer-hover/rs:hidden"></div>
          <div className="m-1 aspect-square bg-slate-400 h-[10vw] group-hover:translate-x-[900%] transition duration-[3000ms] ease-in"></div>
          <div className="m-1 aspect-square bg-slate-400 h-[10vw] group-hover:translate-x-[900%] transition duration-[3000ms] ease-out"></div>
          <div className="m-1 aspect-square bg-slate-400 h-[10vw] group-hover:translate-x-[900%] transition duration-[3000ms] ease-in-out"></div>
          <div></div>
          <div></div>
          <div></div>
          <button type="button" class="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ...">
  Hover me
</button>
        </main>
    );
}
