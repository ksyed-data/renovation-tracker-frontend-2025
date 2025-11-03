import Home from "~/routes/home";
import { HomeMiniUI } from "./HomeMiniUI";
import { HomeData } from "../mock/HomeData";

export const ExploreMore = () => {
  return (
    <div className="flex-col justify-center py-10">
      <div className="w-full p-3">
        <ul className="grid p-3 space-x-1 justify-center grid-cols-6">
          {HomeData.map((data) => (
            <HomeMiniUI miniUI={data} />
          ))}
        </ul>
      </div>
    </div>
  );
};
