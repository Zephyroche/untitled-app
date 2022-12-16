import React from 'react';

const TicketCard = ({ ticket }) => {
    return(
        <div className='ticket'>
            <div className='ticket-header'>
                <div>
                    {ticket.price} Р
                </div>
                <div>
                    <img src={`https://pics.avs.io/110/36/${ticket.carrier}.png`} />
                </div>
            </div>
        <div className='ticket-rls'>
            <div>
                <h2>{ticket.origin} - {ticket.destination}</h2>
            </div>
            <div>
                <h1>{ticket.departure_time} - {ticket.arrival_time}</h1>
            </div>
            <div>
                <h2>в пути</h2>
            </div>
            <div>
                <h1>ч м</h1>
                </div>
            <div>
                <h2>пересадки</h2>
            </div>
            <div>
                <h1>{ticket.stops}</h1>
            </div>
        </div>
        <div className='ticket-ft'>
            <h1>{ticket.origin_name} - {ticket.destination_name}</h1>
        </div>
    </div>
    );
}

export default TicketCard;