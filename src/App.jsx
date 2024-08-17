import React, { useEffect, useState } from "react";
import BotCollection from "./BotCollection";
import BotArmy from "./BotArmy";
import BotFilter from "./BotFilter";

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState("All");

  // Fetching data from the json
  useEffect(() => {
    fetch(" http://localhost:3000/bots ")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network respons not okay");
        }
        return response.json();
      })
      .then((data) => {
        setBots(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []); // Empty dependency array means this effect runs once after the initial render

  // Adding a bot to army
  const addBot = (bot) => {
    //   this is to check if bot exists in army component,then added if not
    if (!army.find((b) => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  //function to release bot from army
  const release = (bot) => {
    setArmy(army.filter((b) => b.id !== bot.id));
  };

  // Deleting bots from an army
  const deleteBot = (bot) => {
    fetch(`http://localhost:3000/bots/${bot.id}`, {
      method: "DELETE",
    }).then(() => {
      setArmy(army.filter((b) => b.id !== bot.id));
      setBots(bots.filter((b) => b.id !== bot.id));
    });
  };

  //Filter bots by class

  const filterBots =
    filter === "All" ? bots : bots.filter((bot) => bot.bot_class === filter);

  //
  if (loading) return <> loading </>;
  if (error) return <> error </>;

  return (
    <>
      <div className="header">
        <h1>Bot Battlr</h1>
        <BotFilter setFilter={setFilter} />
      </div>
      <div className="main">
        <BotArmy army={army} release={release} deleteBot={deleteBot} />
        <BotCollection bots={filterBots} onAddBot={addBot} />
      </div>
    </>
  );
}
export default App;
