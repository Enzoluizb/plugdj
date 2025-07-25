import React from "react";
import "../css/room.css";

export default function BeachParty() {
  return (
    <div
      style={{
        backgroundImage: "url(/images/BeachParty.jpg)",
        height: "100vh",
        backgroundSize: "cover",
        color: "white",
        padding: "20px",
      }}
    >
      <h1>Bem-vindo à Beach Party</h1>
      {/* Outros componentes aqui */}
    </div>
  );
}
