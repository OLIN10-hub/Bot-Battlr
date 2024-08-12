import React from "react";

function BotArmy({army, deleteBot}) {
    return (
        <div>
            <div class= "bot-army">
                {BotArmy.length === 0 ?(
                <p> No Bot Equipped </p>
                ) : (

                    // list of bot names
                    // Addition of button to remove the bots
                    BotArmy.map((Bot) => (
                        <div key={Bot.id} class="card">
                            <h2>{Bot.name}</h2>
                            <img src={Bot.avatar_url} alt={Bot.name} class="card-image" />
                            <button onClick={() => deleteBot(Bot)}> X </button>
                            </div>
                    ))
                )}
        </div>
        </div>
    );
}
export default BotArmy;