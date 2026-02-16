import { CreateListing, DeleteListing, GetListingWithRenovation, ReadListing, UpdateListing } from "~/BFF/WebBFF";
import { ExploreMore } from "../main-page/ExploreMore";
import { ProjectSummary } from "../main-page/ProjectSummary";
import { SearchBar } from "../main-page/SearchBar";
import { NavMenu } from "../NavMenu";
import { useEffect } from "react";


export const Dashboard = () => {
    //This is purely for testing purpose of BFF
    //Start of testing for BFF function 
    useEffect(() => {
    const runTest = async () => {
      try {
        const result = await GetListingWithRenovation("/home.com/test1");
        console.log("GET success:", result);
      } catch (err) {
        console.error("GET failed:", err);
      }
    };

    runTest();
  }, []);
  //End of testing for BFF Function



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
