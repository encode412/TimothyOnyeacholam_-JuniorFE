const Card = ({ rocket }: any) => {
  return (
    <div
      key={rocket.capsule_id}
      className="flex flex-col gap-3 hover:scale-105 hover:cursor-pointer transition-all ease-in bg-primary px-6 py-8 shadow-xl"
    >
      <img src={"/home/dragon.jpg"} className="h-full w-full" alt="" />
      <div className="flex justify-between">
        <span className="text-xs">{rocket.type}</span>
        <span className="text-sm font-semibold">{rocket.status}</span>
      </div>{" "}
      <div className="flex justify-between">
        <span className="text-xs">Number of landings</span>
        <span className="text-sm font-semibold">{rocket.landings}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-xs">Serial</span>
        <span className="text-sm font-semibold">{rocket.landings}</span>
      </div>
      {rocket.missions.length > 0 ? (
        rocket.missions.map((mission) => (
          <div className="flex justify-between">
            <span className="text-sm">mission:</span>
            <span>{mission.name}</span>
          </div>
        ))
      ) : (
        <div className="flex justify-between">
          <span>mission:</span>
          <span>null</span>
        </div>
      )}
      {rocket.missions.length > 0 ? (
        rocket.missions.map((mission) => (
          <div className="flex justify-between">
            <span className="text-sm">mission flight:</span>
            <span>{mission.flight}</span>
          </div>
        ))
      ) : (
        <div className="flex justify-between">
          <span className="text-sm">mission flight:</span>
          <span>null</span>
        </div>
      )}
      <div className="flex flex-col gap-1">
        <span className="text-sm">Overview</span>
        <span className="text-sm text-start"> {rocket.details}</span>
      </div>
    </div>
  );
};

export default Card;
