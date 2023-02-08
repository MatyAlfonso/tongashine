import { useRouter } from "next/router";

export const ChiSiamoIcon = () => {
  const router = useRouter();
  const location = router.pathname;
  return (
    <div className={` hover:stroke-yellowtsd hover:text-yellowtsd ${
      location === "chisiamo"
        ? "stroke-yellowtsd text-yellowtsd"
        : "stroke-white hover:cursor-pointer"
    }`}>
      <svg
        className="m-auto"
        width="30"
        height="30"
        fill="none"
        viewBox="0 0 30 30"
      >
        <path
          d="M15 27.5C21.9036 27.5 27.5 21.9036 27.5 15C27.5 8.09644 21.9036 2.5 15 2.5C8.09644 2.5 2.5 8.09644 2.5 15C2.5 21.9036 8.09644 27.5 15 27.5Z"
          strokeWidth="2"
        />
        <path
          d="M12.5 10.605C13.125 9.3675 13.75 8.75 15 8.75C16.5575 8.75 17.5 9.98625 17.5 11.2225C17.5 12.4587 16.875 13.0763 15 14.3138V16.25M15 20.625V21.25"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
      <p className="font-bold italic">CHI SIAMO</p>
    </div>
  );
};
