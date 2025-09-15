export const OtherResourcesCard = ({ title, description, btntitle, path }) => {
  // Function to truncate description by words
  const truncateWords = (text, limit) => {
    // Remove HTML tags first (basic)
    const plainText = text.replace(/<[^>]+>/g, "");
    const words = plainText.split(" ");
    if (words.length > limit) {
      return words.slice(0, limit).join(" ") + "...";
    }
    return plainText;
  };

  return (
    <div className="rounded-2xl flex flex-col justify-between bg-[#EDE9E9] w-[313px] pr-[5px]">
      <div className="pl-[15px] pt-[10px]">
        <h4 className="text-[#333333] font-[700] text-[23px] leading-[30px] my-[10px]">
          {title}
        </h4>
        <div
          className="text-[#333333] text-[14px] mb-[10px]"
          dangerouslySetInnerHTML={{
            __html: truncateWords(description, 30),
          }}
        />
      </div>
      <div className="flex justify-center py-[20px]">
        <a
          href={path}
          className="bg-[#009688] text-[14px] text-white font-[500] py-[13px] px-[47px] text-center rounded-full hover:bg-[#00776C]"
        >
          {btntitle}
        </a>
      </div>
    </div>
  );
};
