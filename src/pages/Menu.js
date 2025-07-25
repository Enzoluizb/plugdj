import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/menu.css";

const rooms = [
  {
    id: "slashroom",
    name: "Slash Room",
    thumbnail: "/images/SlashRoom.jpg",
  },
  {
    id: "beachparty",
    name: "Beach Party",
    thumbnail: "/images/BeachParty.jpg", 
  },
];

export default function Menu() {
  const navigate = useNavigate();

  return (
    <div className="menu-container">
      <h1>Escolha uma sala</h1>
      <div className="room-list">
        {rooms.map((room) => (
          <div
            key={room.id}
            className="room-card"
            onClick={() => navigate(`/room/${room.id}`)}
          >
            <img src={room.thumbnail} alt={room.name} />
            <h2>{room.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
