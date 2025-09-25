import { FaXTwitter, FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa6";

export default function ShareSection({ slug }) {
  const shareUrl = `https://www.integritistudio.com/blogs-2/${slug}/`;

  return (
    <div className="w-[220px] sm:w-[260px] md:w-[280px] ">
      <h3
        className="text-xl sm:text-2xl md:text-[28px] font-bold leading-tight mb-4 text-left text-[#333]"
        style={{ fontFamily: "var(--font-raleway)" }}
      >
        Share
      </h3>
      <div className="flex items-center justify-start gap-3 flex-wrap">
        <a
          href={`https://x.com/share?url=${shareUrl}&title=Blogs`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center rounded-full bg-[#009688] text-white hover:bg-[#00b79b] transition-colors duration-300"
        >
          <FaXTwitter size={18} />
        </a>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center rounded-full bg-[#009688] text-white hover:bg-[#00b79b] transition-colors duration-300"
        >
          <FaFacebookF size={18} />
        </a>
        <a
          href={`https://www.instagram.com/share?url=${shareUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center rounded-full bg-[#009688] text-white hover:bg-[#00b79b] transition-colors duration-300"
        >
          <FaInstagram size={18} />
        </a>
        <a
          href={`https://github.com/share?url=${shareUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center rounded-full bg-[#009688] text-white hover:bg-[#00b79b] transition-colors duration-300"
        >
          <FaGithub size={18} />
        </a>
      </div>
    </div>
  );
}
