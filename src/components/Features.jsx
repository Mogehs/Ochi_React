import Button from "./Button";
import FeatureMain from "./FeatureMain";
import { useNavigate } from "react-router-dom";
const Features = () => {
  const navigate = useNavigate();
  const navigateWork = () => {
    navigate("/our-work");
  };
  return (
    <div className="bg-zinc-950 w-full min-h-screen rounded-t-3xl">
      <h1 className=" font-neue px-[2rem] py-[1.5rem] text-[1.7rem] border-b-[0.1rem] border-zinc-800 rounded-t-3xl">
        Featured projects
      </h1>

      <FeatureMain limit={6}></FeatureMain>
      <div
        onClick={navigateWork}
        className="flex justify-center items-center p-[2rem]"
      >
        <Button>View All Case Studies</Button>
      </div>
    </div>
  );
};

export default Features;
