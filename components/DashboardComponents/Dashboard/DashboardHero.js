import React, {useState} from "react";
import Card from "./Card";
import ModelForm from "./ModelForm";
import ModelFormCard from "./ModelFormCard";
import NewCard from "./NewCard";
import ReceivedFormByCard from "./ReceivedFormByCard";
import SearchComponent from "./Search";
function DashboardHero({forms}) {
  const sortedForms = forms.sort((a, b) => new Date(b.lastOpen) - new Date(a.lastOpen));
  const [searchValueReceivedForms, setSearchValueReceivedForms] = useState("");
  const [filteredForms, setFilteredForms] = useState(forms);
  const handleSearch = (e) => {
    const searchValue = e.target.value.toLowerCase();
    setSearchValueReceivedForms(searchValue);
    setFilteredForms(forms.filter((form) => form.formTitle.toLowerCase().includes(searchValue)));
  };
  return (
    <div className="h-full w-full font-secondary text-primary">
      <div className="flex flex-col xl:flex-row gap-3">
        <div className="xl:w-4/5">
          {/* FORMS */}
          <div className="p-4 rounded-2xl bg-white shadow-2xl text-third lg:mx-4 mb-12">
            <h1 className="font-bold text-xl">Forms</h1>
            <div className="flex flex-col w-full sm:flex-row gap-3 pt-4">
              <div className="w-full sm:w-1/2 md:w-1/3">
                <NewCard />
              </div>
              <div className="lg:pl-2 w-full sm:w-1/2 md:w-1/3">
                <Card form={sortedForms[0]} />
              </div>
              <div className="lg:pl-2 hidden w-full sm:w-1/2 md:inline md:w-1/3">
                <Card form={sortedForms[1]} />
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-5">
            {/* RECENTLY USED */}
            <div className="flex flex-col w-full lg:w-1/2 h-[350px] md:h-[500px] rounded-2xl bg-white text-third lg:ml-4 shadow-2xl">
              <div className="flex items-center justify-between pt-4 px-4">
                <h1 className="font-bold text-xl ">Recently used</h1>
              </div>
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
            <div className="lg:hidden">
              <ModelForm />
            </div>
            <div className="md:hidden bg-white rounded-2xl text-third">
              <ModelForm />
            </div>
            {/* RECEIVED FORMS */}
            <div className="flex flex-col w-full lg:w-1/2 xl:w-full xl:col-span-2 h-[350px] md:h-[500px] rounded-2xl bg-white shadow-2xl text-third lg:mr-4">
              <div className="flex items-center justify-between pt-4 px-4">
                <h1 className="font-bold text-xl ">Received forms</h1>
                <SearchComponent handleSearch={handleSearch} />
              </div>
              <div className="h-full overflow-y-auto mx-4 my-3 rounded-2xl ">
                {filteredForms.map((form) =>
                  form.clients?.map((client) => (
                    <ReceivedFormByCard key={client.id} formName={form.formTitle} client={client} />
                  ))
                )}
              </div>
            </div>
          </div>
          <div className="hidden lg:inline xl:hidden">
            <ModelForm />
          </div>
        </div>
        {/* MODEL FORMS XL */}
        <div className="hidden xl:inline xl:w-1/5 bg-white text-third rounded-2xl shadow-xl">
          <div className="flex flex-col h-[830px]">
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
        </div>
      </div>
    </div>
  );
}

export default DashboardHero;
