export default function Contacts() {
  return (
    <>
      <div className="relative rounded-2xl border border-primary bg-gray-100/50 p-4 max-sm:flex max-sm:flex-col max-sm:items-center">
        <h2 className="mb-2 rounded-xl border border-primary bg-gray-100/50 px-2 text-center text-2xl text-clamp_section_name text-gray-700 md:p-2 max-sm:text-clamp_sm_section_name">
          Contact
        </h2>
        <div>
          <a
            className="text-gray-800"
            href="mailto:artemfurman@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            artemfurman@gmail.com
          </a>
        </div>
        <div className="text-center text-gray-800">
          <a href="tel:+48660090343" target="_blank" rel="noopener noreferrer">
            +48 660 090 343
          </a>
        </div>
      </div>
    </>
  );
}
