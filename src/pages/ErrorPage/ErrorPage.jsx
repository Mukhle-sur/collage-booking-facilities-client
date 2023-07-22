import { Link } from "react-router-dom";
import error from "../../assets/error.jpg";

const ErrorPage = () => {
  return (
    <div>
      <img src={error} alt="error" className="w-full rounded-xl" />
      <div className="flex justify-center">
        <Link to={"/"}>
          <button className="btn btn-outline btn-error flex justify-center my-10">
            Back To Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
