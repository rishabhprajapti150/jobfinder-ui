"use client"
import Slider from "@/app/(job-seeker)/jobs/Home/Slider";
import ExploreCategory from "@/app/(job-seeker)/jobs/Home/Expore-Category";
import BestJob from "@/app/(job-seeker)/jobs/Home/Best-Job";
import TopCompany from "@/app/(job-seeker)/jobs/Home/Top-Company";
import RemoteJob from "@/app/(job-seeker)/jobs/remote/page";
import WalkInJOb from "@/app/(job-seeker)/jobs/walk-in/page";
import  DomaimComponet  from "@/app/(job-seeker)/jobs/domain/page";

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
      <RemoteJob />
      <WalkInJOb />
      <DomaimComponet />
    </div>
  );
}
