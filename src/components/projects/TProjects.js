import ProjectBox from "./TProjectBox";

const projects = [
  {
    title: "Honey Marketplace",
    description:
      "A robust e-commerce platform dedicated to the sale of premium honey products. Designed the UI/UX and implemented features such as product categorization, search functionality, and secure payment gateway. Collaborated closely with a local honey producer to translate business requirements into technical solutions.",
    stack: ["tailwind", "js", "next", "react", "redux", "python", "django"],
    placeSelfEnd: true,
    link: "https://honey-marketplace.vercel.app/sklep",
    code: "https://github.com/Arden27/honey_marketplace",
    isLocal: false,
  },
  {
    title: "ExpenseTracker+",
    description:
      "A financial management app aimed at simplifying the expense tracking process. Current features include the ability to add, edit, and categorize receipts. Future releases are planned to incorporate OCR technology for automatic receipt scanning and data extraction.",
    stack: ["tailwind", "js", "next", "react", "redux", "python", "django"],
    placeSelfEnd: false,
    link: "https://artman.pythonanywhere.com/receiptapp/login?portfolio=true",
    code: "https://github.com/Arden27/receipts",
    isLocal: false,
  },
  {
    title: "CryptoCompounder",
    description:
      "A specialized financial calculator that showcases the accumulative power of daily investments in Bitcoin. Users input a fixed daily investment amount and the tool calculates the projected returns based on the current Bitcoin price. Designed to educate on the potential of consistent cryptocurrency investments.",
    stack: ["html", "css", "js", "jquery", "python", "django"],
    placeSelfEnd: true,
    link: "https://artman.pythonanywhere.com/flaws",
    code: "https://github.com/Arden27/flaw-to-crypto",
    isLocal: false,
  },
  {
    title: "Avatar",
    description:
      "A virtual chatbot avatar that mimics my personality and can answer questions about me, serving as an interactive resume. Employed Natural Language Processing (NLP) techniques to create a more engaging and informative experience for users interested in my background and skills.",
    stack: ["tailwind", "js", "next", "react", "redux", "openai"],
    placeSelfEnd: false,
    code: "https://github.com/Arden27/portfolio",
    isLocal: true,
  },
];

export default function Projects() {
  return (
    <div className="h-[95%] max-h-[800px] w-full max-w-[1440px] p-4 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-4 md:p-6 md:pt-2 max-sm:flex max-sm:snap-x max-sm:snap-mandatory max-sm:flex-row max-sm:overflow-scroll">
      {projects.map((project, index) => (
        <ProjectBox key={index} {...project} />
      ))}
    </div>
  );
}
