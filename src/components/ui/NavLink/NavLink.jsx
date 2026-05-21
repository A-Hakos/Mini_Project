const NavLink = ({ label, href = "#" }) => {
  return (
    <a
      href={href}
      className="group relative py-2 ml-10 text-lg uppercase tracking-wider text-white transition-colors duration-300 hover:text-teal-200"
    >
      {label}

      <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-white transition-all duration-500 ease-in-out group-hover:w-full" />
    </a>
  );
};

export default NavLink;
