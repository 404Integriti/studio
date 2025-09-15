export default function BuiltForYou({ heading, text, bgcolor }) {
  return (
    <div
      className="built-for-you rounded-[20px] pb-[20px] w-[100%] lg:max-w-[32%] md:max-w-[49%] max-w-[100%] h-[200px] pl-[20px] pr-[20px]"
      style={{ backgroundColor: bgcolor }}
    >
      <h2 className="text-[24px] font-[600] leading-[30px] mt-[20px] mb-[10px] raleway w-[100%] xl:max-w-[70%] lg:max-w-[90%] md:max-w-[60%] sm:max-w-[40%] max-w-[70%]">{heading}</h2>
      <p className="text-[16px] leading-[20px] text-[#333]">{text}</p>
    </div>
  );
}
