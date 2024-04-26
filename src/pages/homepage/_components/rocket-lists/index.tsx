import Card from "./card";
import Loader from '../../../../components/ui/loader'
import Button from "../../../../components/ui/button";
import { useGetInitialRocketsQuery } from "../../../../services/rocket";
import { Link } from "react-router-dom";

const RocketLists = () => {
  const { data: allRockets, isFetching } = useGetInitialRocketsQuery(3);

  if(isFetching) {
    return <Loader />
  }
  return (
    <div className="lg:py-20 py-10 md:px-12 px-6 lg:px-24">
      <div className="flex flex-col items-center justify-center gap-3">
        <span className="lg:text-[32px] md:text-[20px] text-lg  font-medium uppercase">Capsules</span>
        <span className="md:text-base text-sm lg:text-lg">Turbo powered engines</span>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 pt-10">
        {allRockets?.map((rocket) => (
          <Card rocket={rocket} />
        ))}
      </div>
      <Link to={"/capsules"} className="flex justify-center items-center py-10">
        <Button children="View all" className="w-fit" />
      </Link>
    </div>
  );
};

export default RocketLists;
