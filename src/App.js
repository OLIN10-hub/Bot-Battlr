import React, {useEffect, useState} from "react";
import BotCollection from "./BotCollection";
import BotArmy from "./BotArmy";

function App() {
    const [bots, setBots] = useState([]);
    const [army, setArmy] =useState([]);
}

// Fetching data from the json
useEffect (() => {
    fetch(" http://localhost:8001/bots")
    .then((response) => response.json())
    .then ((data) => setBots(data))
    .catch((error) => console.log(error));
}, []); // Empty dependency array means this effect runs once after the initial render

// Adding a bot to army
const addBot =(Bot) => {
//   this is to check if bot exists in army component,then added if not
if(!army.find((Bot) => Bot.id === Bot.id)) {
    setArmy([...army, Bot]);
}
};

// Deleting bots from an army 
const deleteBot = (Bot) => {
    setArmy(army.filter((Bot) => Bot.id !== Bot.id));

};









return (
    <div>
        <BotCollection Bot={Bots} onClick={addBot} />
        <BotArmy army={army} deleteBot={deleteBot}/>

    </div>
)