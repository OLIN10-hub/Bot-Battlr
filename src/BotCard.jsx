import React from "react";

// Getting data from json nd adding a button to add bots
// The button renders information to the parent which is BotCollection....onClick is passed as a prop
function BotCard({ Bot, onClick }) {
  return (
    <div className="bot-card">
      <img src={Bot.avatar_url} alt={Bot.name} />
      <p> Class: {Bot.bot_class}</p>
      <button onClick={() => onClick(Bot)}> Add Bot </button>
    </div>
  );
}
export default BotCard;
