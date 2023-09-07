export default function Contacts() {
    return (
        <>
            
            <div className="relative bg-gray-100/50 p-4 border rounded-2xl border-black max-sm:flex max-sm:flex-col max-sm:items-center">
                <h2 className="max-sm:text-clamp_sm_section_name text-clamp_section_name border rounded-xl px-2 md:p-2 bg-gray-100/50 border-black mb-2 text-center text-2xl">
                    Contact
                </h2>
                <div>
                    <a href="mailto:artemfurman@gmail.com" target="_blank" rel="noopener noreferrer">
                        artemfurman@gmail.com
                    </a>
                </div>
                <div className="text-center">
                    <a href="tel:+48660090343" target="_blank" rel="noopener noreferrer">
                        +48 660 090 343
                    </a>
                </div>
            </div>
        </>
        
    );
}
