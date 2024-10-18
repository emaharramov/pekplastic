import React from "react";
import SyncLoader from "react-spinners/SyncLoader";

const Loader = () => {
  return (
    <div className="flex justify-center py-12">
      <SyncLoader color="#3C4048" size={15} />
    </div>
  );
};

export default Loader;
