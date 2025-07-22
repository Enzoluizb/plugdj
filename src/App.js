import React from "react";
import "./index.css";

const users = [
  { id: 1, name: "DJ Bunny", avatar: "🐰" },
  { id: 2, name: "User1", avatar: "😺" },
  { id: 3, name: "User2", avatar: "🤖" },
  { id: 4, name: "User3", avatar: "👽" },
  { id: 5, name: "User4", avatar: "🐉" },
];

export default function App() {
  return (
    <div className="app-container">
      <div className="main-area">
        <div className="player-header">
          <img
            src="https://i.scdn.co/image/ab67616d0000b273aa29a1378f8dbb450b70b7a1"
            alt="Current Track"
            className="track-image"
          />
          <div>
            <h2 className="track-title">How I Roll</h2>
            <p className="track-artist">Savant</p>
          </div>
        </div>

        <div className="center-stage">
          <div className="dj-stage">🐰</div>

          <div className="user-avatars">
            {users.slice(1).map((user) => (
              <div key={user.id} className="user-avatar" title={user.name}>
                {user.avatar}
              </div>
            ))}
          </div>

          <button className="join-button">Join Wait List</button>
        </div>

        <div className="reactions">
          <button className="reaction woot">Woot (9)</button>
          <button className="reaction grab">Grab (0)</button>
          <button className="reaction meh">Meh (0)</button>
        </div>
      </div>

      <div className="chat-panel">
        <div className="chat-header">
          <h3 className="chat-title">Chat</h3>
          <span>18 users</span>
        </div>

        <div className="chat-messages">
          <p>
            <strong>LanCeeXD:</strong> I'll kill you with my mashups sooner or
            later
          </p>
          <p>
            <strong>V3N4T0R:</strong> Join this
          </p>
          <p>
            <strong>Nova Prime'17:</strong> There is one song in this world that
            makes it wild
          </p>
          <p>
            <strong>WazaZoo:</strong> 1min
          </p>
          <p>
            <strong>AzureNinja:</strong> NO
          </p>
        </div>

        <input
          type="text"
          placeholder="Click here to join the conversation"
          className="chat-input"
        />
      </div>
    </div>
  );
}
