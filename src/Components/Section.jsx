function Section({ label, className, children }) {
  return (
    <div className={`py-5 px-10 ${className}`}>
      <h2 className="text-7xl font-bold text-center text-white group  mb-10  relative ">
        {label}

        <div className="absolute h-1 w-20 bg-white -bottom-3 left-1/2  -translate-x-1/2 group-hover:w-36 transition-[width] duration-300 "></div>
      </h2>
      {children}
    </div>
  );
}

export default Section;
