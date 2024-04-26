import { useState } from "react";
import Loader from "../../../../components/ui/loader";
import { useSelector } from "react-redux";
import Card from "./card";
import { useGetAllRocketsQuery } from "../../../../services/rocket";
import Pagination from "../../../../components/pagination";

const RocketLists = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rocketsPerPAge] = useState(10);

  const { data, isFetching } = useGetAllRocketsQuery();
  const inputData = useSelector((state) => state.filters.value.input);
  const category = useSelector((state) => state.filters.value.selectedCategory);

  if (isFetching) {
    return <Loader />;
  }
  const indexOfLastRocket = currentPage * rocketsPerPAge;
  const indexOfFirstRocket = indexOfLastRocket - rocketsPerPAge;
  const currentRocket = data?.slice(indexOfFirstRocket, indexOfLastRocket);
  const nPages = Math.ceil(data?.length / rocketsPerPAge);
  console.log(currentRocket);
  return (
    <>
      {!isFetching && (
        <div className="lg:py-20 py-10 md:px-12 px-6 lg:px-24">
          <div className="flex flex-col items-center justify-center gap-3">
            <span className="lg:text-[32px] md:text-[20px] text-lg font-medium uppercase">
              Capsules
            </span>
            <span className="md:text-base text-sm lg:text-lg">
              All available capsules
            </span>
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  gap-10 pt-10">
            {(category === "" || inputData === "") &&
              currentRocket?.map((rocket) => (
                <Card
                  showButton={false}
                  rocket={rocket}
                  key={rocket.capsule_serial}
                />
              ))}
            {category === "status" &&
              currentRocket
                ?.filter((rocket) => rocket.status === inputData)
                .map((rocket) => (
                  <Card
                    showButton={false}
                    rocket={rocket}
                    key={rocket.capsule_serial}
                  />
                ))}
            {category === "type" &&
              currentRocket
                ?.filter((rocket) => rocket.type === inputData)
                .map((rocket) => (
                  <Card
                    showButton={false}
                    rocket={rocket}
                    key={rocket.capsule_serial}
                  />
                ))}
            {category === "original_launch" &&
              currentRocket
                ?.filter((rocket) => rocket.original_launch === inputData)
                .map((rocket) => (
                  <Card
                    showButton={false}
                    rocket={rocket}
                    key={rocket.capsule_serial}
                  />
                ))}
          </div>

          <Pagination
            nPages={nPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      )}
    </>
  );
};

export default RocketLists;
