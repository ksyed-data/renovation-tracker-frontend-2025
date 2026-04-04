
import { HomeMiniUI } from "./HomeMiniUI";
import { HomeData } from "../mock/HomeData";

export const ExploreMore = () => {
  return (
    <div className="flex-col justify-center py-10">
      <div className="w-full p-3">
        <ul className="overflow-x overflow-hidden gap-4 flex justify-center grid-cols-6">
          {HomeData.map((data) => (
            <HomeMiniUI key={data.url} miniUI={data} />
          ))}
        </ul>
      </div>
    </div>
  );
};
