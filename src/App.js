import React from 'react';
import { useEffect, useState } from 'react';
import TicketCard from './TicketCard';
import logo from './Logo.svg'
import './App.css';

const App = () => {
    const [tickets, setTickets] = useState([]);

    const ticketList = async() => {
        const response = await fetch(`./tickets/Tickets.json`);
        const data = await response.json();

        setTickets(data.tickets);
    }

    useEffect(() => {
        ticketList()
    }, []);

    return (
        <div className='body'>
            <div className='logo-row'>
                <img src={logo} className='logo'/>
            </div>
            <div className='filter'></div>
            <div className='tabs'>
                <button>
                    <p>самый дешевый</p>
                </button>
                <button>
                    <p>самый быстрый</p>
                </button>
            </div>
            <div>
                {tickets.map((ticket, index) => (
                    <TicketCard ticket={ticket} key={index}/>
                ))}
            </div>
        </div>
    );
}

export default App;