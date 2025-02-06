import Image from "./Image";

function LocationSection() {
  return (
    <div className="flex flex-col md:flex-row gap-6">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1758669.7450883205!2d29.797547361050555!3d30.58031614802492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458415c5e062eb5%3A0x16c154bbc30ab836!2sMustafa%20Kamel%20Square!5e0!3m2!1sen!2seg!4v1738769428284!5m2!1sen!2seg"
        className="w-full h-[500px] md:h-[600px] rounded-2xl"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <Image
        className="w-full rounded-2xl overflow-hidden"
        src="./public/Mostafa_Kamel_Square_Cairo.jpg"
      />
    </div>
  );
}

export default LocationSection;
