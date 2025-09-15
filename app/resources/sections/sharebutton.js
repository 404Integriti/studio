
export default function ShareButton({icon,link}) {
  return (
    
      <div className="  flex justify-center items-center text-white bg-[#009688] hover:bg-[#00B79B] transition-color duration-300 ease-in-out rounded-full text-xl p-3 cursor-pointer">
        <a target="_blank" href={link}>{icon}</a>
      </div>
  );
}
