import { ExploreMore } from "../main-page/ExploreMore";
import { ProjectSummary } from "../main-page/ProjectSummary";
import { SearchBar } from "../main-page/SearchBar";
import { NavMenu } from "../NavMenu";

export const Dashboard = () => {
  return (
    <div className="flex-col h-full">
      <div className="flex-col h-140 bg-[url('/background.png')] bg-bottom bg-no-repeat bg-cover">
        <nav>
          <div className="bg-transparent">
            <NavMenu />
          </div>
        </nav>
        <SearchBar />
      </div>
      <ProjectSummary />
      <div className="w-full py-10">
        <h1 className="text-gray-800 text-4xl p-3 font-bold text-center">
          Explore more renovations...
        </h1>
        <p className="text-gray-500 text-2xl text-center">
          Check out some renovations.
        </p>
      </div>
      <ExploreMore />
    </div>
  );
};
