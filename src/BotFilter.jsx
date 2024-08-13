import React from 'react';

function BotFilter({ setFilter }) {
    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };

    return (
        <div className="bot-filter">
            <label htmlFor="filter">Filter by class: </label>
            <select id="filter" onChange={handleFilterChange}>
                <option value="All">All</option>
                <option value="Support">Support</option>
                <option value="Medic">Medic</option>
                <option value="Assault">Assault</option>
                <option value="Witch">Witch</option>
                <option value="Defender">Defender</option>
                <option value="Captain">Captain</option>
                
            </select>
        </div>
    );
}

export default BotFilter;
