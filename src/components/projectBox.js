import Image from "next/image";

export default function ProjectBox({ title, description, stack, placeSelfEnd }){
    return(
    <div className={`group md:relative md:aspect-square max-sm:w-full max-sm:flex-shrink-0 max-sm:snap-center h-full ${placeSelfEnd ? 'place-self-end' : ''} md:hover:cursor-pointer`}>
      <div className="text-center text-clamp_project_description p-2 md:absolute md:inset-0 w-full h-full flex flex-col justify-between rounded-2xl border-2 border-black bg-blue-200">
        <div className="h-4/5 overflow-scroll">
          {description}
        </div>
        <div className="h-[13%] w-full bg-amber-200 flex flex-row  items-center justify-around">
          {stack.map((tech, index) => (
            <div className="relative h-full w-auto group/tech hover:cursor-pointer" key={index}>
              {/* Text to show on hover */}
              <div className="absolute bg-white border rounded-lg  w-auto bottom-full text-center opacity-0 group-hover/tech:opacity-100 transition -translate-x-1/2 left-1/2">
                {tech}
              </div>
              {/* Image */}
              <div className="relative bg-indigo-300 flex items-center justify-center aspect-square h-2/3 rounded-2xl">
                <Image
                  src={`/img/skills/${tech}.png`}
                  alt={`${tech} icon`}
                  className="h-full w-auto"
                  width={200}
                  height={200}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="h-[13%] w-full bg-amber-200 flex flex-row  items-center justify-around">
          {stack.map((tech, index) => (
            <div className="relative h-full w-auto group/tech hover:cursor-pointer" key={index}>
              {/* Text to show on hover */}
              <div className="absolute bg-white border rounded-lg  w-auto bottom-full text-center opacity-0 group-hover/tech:opacity-100 transition -translate-x-1/2 left-1/2">
                {tech}
              </div>
              {/* Image */}
              <div className="relative bg-indigo-300 block aspect-square h-2/3 rounded-2xl">
                <Image
                  src={`/img/skills/${tech}.png`}
                  alt={`${tech} icon`}
                  className="h-full w-auto object-cover object-center"
                  fill={true}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className={`${placeSelfEnd ? 'md:group-hover:-translate-x-full' : 'md:group-hover:translate-x-full'} max-sm:hidden h-full md:absolute md:inset-0 rounded-2xl border-2 border-black bg-green-300 md:transition-transform md:duration-700 md:ease-in-out md:flex md:items-center md:justify-center`}>
        <h2 className="mb-2 text-center text-xl font-bold">{title}</h2>
      </div>
    </div>
    );
  };

  