import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
function PageNotFound() {
  return (
    <div className="text-white h-screen justify-center items-center gap-3 font-bold text-center flex flex-col">
      <p className="text-4xl">Page Not Found 😕</p>
      <Link to="/" className="flex mr-5 items-center gap-1 hover:underline">
        <IoMdArrowRoundBack />
        <p>Back to Portfolio</p>
      </Link>
    </div>
  );
}

export default PageNotFound;
