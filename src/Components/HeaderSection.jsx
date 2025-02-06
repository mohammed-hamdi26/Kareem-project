import { useState } from "react";
import Image from "./Image";

function HeaderSection() {
  const [show, setShow] = useState(false);
  return (
    <div className="px-10 py-10 bg-[url('/images/Flag_of_Egypt_1882-1922.png')] h-screen  bg-cover bg-center bg-no-repeat overflow-hidden  flex items-center flex-col gap-7 md:flex-row">
      <div className="flex flex-col  flex-auto  md:justify-center h-full text-white space-y-7 md:w-[50%] ">
        <h2 className="text-3xl md:text-7xl font-bold">Mustafa Kamel Pasha</h2>
        <p className="text-xl md:text-2xl text-paragraph">
          Mustafa Kamel Pasha (1874 - 1908) was an Egyptian political leader and
          writer. He founded the National Party and the newspaper Al-Liwaa. He
          was a strong advocate for the establishment (or re-establishment) of
          an Islamic university{" "}
          {!show && (
            <span
              className="cursor-pointer underline "
              onClick={() => setShow(true)}
            >
              ...Read More
            </span>
          )}
          {show && (
            <span>
              He was one of the leading figures in the anti-colonial movement
              and played a major role in national revival efforts, particularly
              in promoting education and the creation of a national university.
              His party called for a stronger bond with the Ottoman Empire. His
              efforts to expose the crimes of the British occupation and
              denounce them in international forums were significant, especially
              after the Denshawi Massacre, which led to the downfall of Lord
              Cromer, the British Consul-General in Egypt.{" "}
            </span>
          )}
          {show && (
            <span
              className="cursor-pointer underline "
              onClick={() => setShow(false)}
            >
              Show less
            </span>
          )}
        </p>
      </div>
      <Image
        className=" flex justify-end w-[200px] sm:w-[300px]  md:w-[40%]  "
        src="/images/مصطفى_باشا_كامل-removebg-preview.png"
      />
    </div>
  );
}

export default HeaderSection;
