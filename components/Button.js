import Link from "next/link";

export const Button = ({ text, href }) => {
  return (
    <button className="text-white border rounded-xl border-yellowtsd py-1 px-2 text-center w-3/4 my-4 mx-auto hover:bg-yellowtsd hover:text-black">
      <Link href={href}>{text}</Link>
    </button>
  );
};
