export default function NavButton({
    name,
    section,
    navItemsVisible,
    activeLink,
    initialRender,
    handleNavLinkClick,
    transitionDelay,
  }) {
    return (
      <div
        onClick={() => handleNavLinkClick(section)}
        className={`
                      relative cursor-pointer rounded-xl border p-1 px-3 transition-all 
                      duration-500 md:mx-2 
                      ${
                        navItemsVisible
                          ? "scale-100 opacity-100"
                          : "scale-0 opacity-0"
                      }
                      ${
                        activeLink === section
                          ? "border-primary bg-gray-100/30 text-white/80"
                          : "border-transparent text-gray-100/80"
                      }
                  `}
        style={
          initialRender && navItemsVisible
            ? { transitionDelay: transitionDelay }
            : {}
        }
      >
        {name}
      </div>
    );
  }