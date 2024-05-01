import React from "react";
import CreatePropertyClient from "./CreatePropertyClient";
import getCurrentUser from "../actions/getCurrentUser";

type CreatePropertyProps = {};

const CreateProperty: React.FC<CreatePropertyProps> = async () => {
  const currentUser = await getCurrentUser();

  return <CreatePropertyClient currentUser={currentUser} />;
};
export default CreateProperty;
