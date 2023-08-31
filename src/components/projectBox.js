export default function ProjectBox({ title, placeSelfEnd }){
    return(
    <div className={`group md:relative md:aspect-square max-sm:w-full max-sm:flex-shrink-0 max-sm:snap-center h-full ${placeSelfEnd ? 'place-self-end' : ''} md:hover:cursor-pointer`}>
      <div className="max-sm:hidden md:absolute md:inset-0 w-full h-full rounded-2xl border-2 border-black bg-blue-200">
        Description
      </div>
      <div className={`md:group-hover:${placeSelfEnd ? '-translate-x-full' : 'translate-x-full'} h-full md:absolute md:inset-0 rounded-2xl border-2 border-black bg-green-300 md:transition-transform md:duration-700 md:ease-in-out md:flex md:items-center md:justify-center`}>
        <h2 className="mb-2 text-center text-xl font-bold">{title}</h2>
      </div>
    </div>
    );
  };

  