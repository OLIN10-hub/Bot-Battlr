import React from "react";

function BotArmy({ army, deleteBot, release }) {
    return (
        <div>
            <div className="bot-army">
                {army.length === 0 ? (
                    <p>NO BOTS IN ARMY</p>
                ) : (
                    army.map((bot) => (
                        <div key={bot.id} className="card">
                            <h2>{bot.name}</h2>
                            <img src={bot.avatar_url} alt={bot.name} className="card-image" />
                            <button onClick={() => release(bot)}>Release</button>
                            <button onClick={() => deleteBot(bot)} style={{ backgroundColor: 'red' }}>X</button>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default BotArmy;
