import React from "react";

const CatchAllRoute = async ({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) => {
  console.log(await params);
  return (
    <div>
      <h1 className="text-4xl">Catch All Route</h1>
    </div>
  );
};

export default CatchAllRoute;
