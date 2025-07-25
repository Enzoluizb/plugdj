import React from "react";
import { useParams } from "react-router-dom";
import SlashRoom from "../pages/SlashRoom";
import BeachParty from "../pages/BeachParty";

export default function Room() {
  const { id } = useParams();

  if (id === "slashroom") {
    return <SlashRoom />;
  }
  if (id === "beachparty") {
    return <BeachParty />;
  }

  return <div>Sala não encontrada</div>;
}
