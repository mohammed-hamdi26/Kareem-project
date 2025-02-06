import Image from "./Image";

function EventItem({ title, info, image }) {
  return (
    <div className="text-white flex flex-col-reverse md:flex-row md:items-center gap-7">
      <div className="flex-auto space-y-7 md:w-[50%]">
        <h3 className="text-2xl md:text-6xl font-semibold">{title}</h3>
        <p className="md:text-2xl text-paragraph">{info}</p>
      </div>

      <Image className="flex-auto  md:w-[50%]" src={image} />
    </div>
  );
}

export default EventItem;
