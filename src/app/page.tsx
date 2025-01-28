"use client"
import Slider from "./jobs/Home/Slider";
import ExploreCategory from "./jobs/Home/Expore-Category";
import BestJob from "./jobs/Home/Best-Job";
import TopCompany from "./jobs/Home/Top-Company";

export default function Home() {
  return (
    <div className="">

      <div className="mt-[-10px]">

        <Slider />
      </div>
      <div>
        <ExploreCategory />
      </div>
      <div>
        <BestJob />
      </div>
      <div>
        <TopCompany />
      </div>
    </div>
  );
}
