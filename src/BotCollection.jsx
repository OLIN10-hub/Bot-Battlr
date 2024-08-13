import React from "react";

function BotCollection({ bots, onAddBot }) {
  return (
    <div className="bot-collection">
      {bots.map((bot) => (
        <div key={bot.id}>
          <h2>{bot.name}</h2>
          <img src={bot.avatar_url} alt={bot.name} className="card-image" />
          <button onClick={() => onAddBot(bot)}>Add to Army</button>
        </div>
      ))}
    </div>
  );
}

export default BotCollection;
