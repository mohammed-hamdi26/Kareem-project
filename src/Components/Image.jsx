function Image({ src, className }) {
  return (
    <div className={className + " rounded-2xl "}>
      <img
        className="w-full h-full  object-cover object-top hover:scale-110 transition-[scale] duration-500 ease-in-out"
        src={src}
      />
    </div>
  );
}

export default Image;
