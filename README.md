React Immersive Code Challenge : Bot Battlr

Welcome to **Bot Battlr**, the one and only spot in the known universe where you can custom build your own Bot Army! This is our app:

Here's the scenario: a galactic overlord has hired you, a galactic web developer, to develop a galactic web app that will allow them to browse through a list of robots, view a robot's details, and, enlist a bot into their army.


Instructions

For this project, you’ll be building out a React application that displays a list of available bots, among other features. 

Part of what this code challenge is testing is your ability to follow given instructions. While you will definitely have a significant amount of freedom in how you implement the features, be sure to carefully read the directions for setting up the application.

Core Deliverables

As a user, I should be able to:

- See profiles of all bots rendered in `BotCollection`.

- Add an individual bot to my army by clicking on it. The selected bot should

  render in the `YourBotArmy` component. The bot can be enlisted only **once**.

  The bot **does not** disappear from the `BotCollection`.

- Release a bot from my army by clicking on it. The bot disappears from the

  `YourBotArmy` component.

- Discharge a bot from their service forever, by clicking the red button marked

  "x", which would delete the bot both from the backend and from the

  `YourBotArmy` on the frontend.

  Advanced Deliverables
  
  As a user, I should be able to:

- Choose if I want to enlist a bot into my army or just see their data. Clicking

  on the card should instead display a show view (`BotSpecs`) for that bot,

  which should replace `BotsCollection`. BotSpecs should have two buttons: one

  to go back to the list view and another to enlist that bot. Your app could

  look like the following:

- Sort bots by their health, damage or armor. For this, create a new component,

  `SortBar`.

- When I enlist a bot it will be **removed** from the `BotCollection` and added

  to `YourBotArmy`.

- Filter bots by their class. We can select a few filters at the same time.

- Sort bots by their health, damage or armor. For this, create a new component,

  `SortBar`.

- Only enlist **one** bot from each `bot_class`. The classes are

  `["Support", "Medic", "Assault", "Defender", "Captain", "Witch"]`.

