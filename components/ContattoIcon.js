import { useRouter } from "next/router";

export const ContattoIcon = () => {
  const router = useRouter();
  const location = router.pathname;
  return (
    <div
      className={` hover:stroke-yellowtsd hover:text-yellowtsd ${
        location === "contatto"
          ? "stroke-yellowtsd text-yellowtsd"
          : "stroke-white hover:cursor-pointer"
      }`}
    >
      <svg className="m-auto" width="30" height="30" viewBox="0 0 30 30">
        <path
          d="M13.1925 7.80001L8.9638 2.91876C8.4763 2.35626 7.58255 2.35876 7.0163 2.92626L3.5388 6.41001C2.5038 7.44626 2.20755 8.98501 2.8063 10.2188C6.38332 17.625 12.3564 23.6064 19.7575 27.1938C20.99 27.7925 22.5275 27.4963 23.5625 26.46L27.0725 22.9438C27.6413 22.375 27.6425 21.4763 27.075 20.9888L22.175 16.7825C21.6625 16.3425 20.8663 16.4 20.3525 16.915L18.6475 18.6225C18.5603 18.714 18.4454 18.7743 18.3205 18.7942C18.1956 18.814 18.0677 18.7924 17.9563 18.7325C15.1694 17.1276 12.8575 14.8128 11.2563 12.0238C11.1963 11.9122 11.1746 11.784 11.1945 11.659C11.2144 11.5339 11.2747 11.4187 11.3663 11.3313L13.0663 9.63001C13.5813 9.11251 13.6375 8.31251 13.1925 7.79876V7.80001Z"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <p className="font-bold italic">CONTATTO</p>
    </div>
  );
};
