export const Button = ({ text }) => {
  return (
    <button className="text-white border rounded-xl border-yellowtsd py-1 px-2 text-center w-3/4 my-4 mx-auto hover:bg-yellowtsd hover:text-black lg:text-xl 2xl:py-4 2xl:px-8 2xl:w-4/5">
      {text}
    </button>
  );
};
