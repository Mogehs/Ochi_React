import Button from "./Button";
import FeatureMain from "./FeatureMain";
import { useNavigate } from "react-router-dom";
const Features = () => {
  const navigate = useNavigate();
  const navigateWork = () => {
    navigate("/our-work");
  };
  return (
    <div className="w-full min-h-screen rounded-t-3xl">
      <h1 className="p-[3vw] text-[4vw] border-b-[1px] border-b-slate-800 rounded-t-3xl">
        Featured projects
      </h1>

      <FeatureMain limit={6}></FeatureMain>
      <div className="flex justify-center items-center pb-20">
        <div onClick={navigateWork}>
          <Button>View All Case Studies</Button>
        </div>
      </div>
    </div>
  );
};

export default Features;
