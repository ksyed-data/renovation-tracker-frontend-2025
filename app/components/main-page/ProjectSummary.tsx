export const ProjectSummary = () => {
  return (
    <div className="flex justify-center py-3">
      <div className="py-3">
        <h1 className="text-gray-800 text-4xl p-3 font-bold text-center">
          Project Summary
        </h1>
        <p className="text-gray-500 max-w-400 text-2xl text-center">
          This project is a website that helps users better understand property
          renovations using AI. It combines text analysis and image recognition
          to highlight renovations and connects them directly to property
          photos. The system can identify room types (like kitchens or
          bathrooms) and provides images of the room types that were renovated.
          This makes it easier for users to see what’s been updated and evaluate
          a property more clearly. The frontend integrates smoothly with the AI
          model and focuses on a clean, responsive user experience.{" "}
        </p>
      </div>
    </div>
  );
};
