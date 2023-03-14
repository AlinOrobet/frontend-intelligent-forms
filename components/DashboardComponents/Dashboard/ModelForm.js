import React from "react";
import ModelFormCard from "./ModelFormCard";

function ModelForm() {
  return (
    <div className="flex flex-col h-[350px] bg-white rounded-2xl text-third">
      <h1 className="font-bold text-xl pt-4 mx-4">Model Forms</h1>
      <div className="h-full overflow-y-auto mx-4 my-3 rounded-2xl ">
        <ModelFormCard />
        <ModelFormCard />
        <ModelFormCard />
        <ModelFormCard />
        <ModelFormCard />
        <ModelFormCard />
        <ModelFormCard />
      </div>
    </div>
  );
}

export default ModelForm;
