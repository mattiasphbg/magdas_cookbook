import React from "react";

function Page({ params }: { params: { id: string } }) {
  return <div>My Post: {params.id}</div>;
}

export default Page;
