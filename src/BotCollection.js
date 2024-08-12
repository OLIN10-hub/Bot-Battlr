import React from "react";
import BotCard from "./BotCard";

function BotList({Bots, onClick}) {
    return (
        <div class = "card">
            {Bots.map((Bot) => (
                <BotCard key={(Bot.id)} Bot={Bot} onClick={onClick} />
            ))}
            </div>
    )
}
export default BotCollection;