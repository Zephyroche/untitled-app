import React from 'react';

const TicketCard = ({ ticket }) => {
    return(
        <div className='ticket'>
            <div className='ticket-header'>
                <div>
                    <p>{ticket.price} Р</p>
                </div>
                <div>
                    <img src={`https://pics.avs.io/110/36/${ticket.carrier}.png`} />
                </div>
            </div>
        <div className='ticket-rls'>
            <div>
                {ticket.origin} - {ticket.destination}
            </div>
            <div>
                {ticket.departure_time} - {ticket.arrival_time}
            </div>
            <div>
                в пути
            </div>
            <div>
                ч м
                </div>
            <div>
                пересадки
            </div>
            <div>
                {ticket.stops}
            </div>
        </div>
        <div className='ticket-ft'>
            {ticket.origin_name} - {ticket.destination_name}
        </div>
    </div>
    );
}

export default TicketCard;