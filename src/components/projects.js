import ProjectBox from "./projectBox";

const projects = [
    {
        title: "Honey Marketplace",
        description: "A robust e-commerce platform dedicated to the sale of premium honey products. Designed the UI/UX and implemented features such as product categorization, search functionality, and secure payment gateway. Collaborated closely with a local honey producer to translate business requirements into technical solutions.",
        stack: ['tailwind', 'js', 'next', 'react', 'redux', 'python', 'django'],
        placeSelfEnd: true
    },
    {
        title: "ExpenseTracker+",
        description: "A financial management app aimed at simplifying the expense tracking process. Current features include the ability to add, edit, and categorize receipts. Future releases are planned to incorporate OCR technology for automatic receipt scanning and data extraction.",
        stack: ['tailwind', 'js', 'next', 'react', 'redux', 'python', 'django'],
        placeSelfEnd: false
    },
    {
        title: "CryptoCompounder",
        description: "A specialized financial calculator that showcases the accumulative power of daily investments in Bitcoin. Users input a fixed daily investment amount and the tool calculates the projected returns based on the current Bitcoin price. Designed to educate on the potential of consistent cryptocurrency investments.",
        stack: ['tailwind', 'js', 'next', 'react', 'redux', 'python', 'django'],
        placeSelfEnd: true
    },
    {
        title: "ChatGPT Avatar",
        description: "A virtual chatbot avatar that mimics my personality and can answer questions about me, serving as an interactive resume. Employed Natural Language Processing (NLP) techniques to create a more engaging and informative experience for users interested in my background and skills.",
        stack: ['tailwind', 'js', 'next', 'react', 'redux', 'python', 'django'],
        placeSelfEnd: false
    },
]

export default function Projects(){
    return(
        <div
            className="h-[95%] w-full max-sm:flex max-sm:snap-x max-sm:snap-mandatory max-sm:flex-row max-sm:overflow-scroll md:grid md:grid-cols-2 md:grid-rows-2 md:gap-4 md:pt-2 p-6"
        >
            {projects.map((project, index) => (
                <ProjectBox key={index} title={project.title} description={project.description} stack={project.stack} placeSelfEnd={project.placeSelfEnd} />
            ))}
        </div>
    )
}