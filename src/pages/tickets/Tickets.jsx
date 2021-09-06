import React, { useEffect, useState } from "react";
import { getTickets } from "../../services/helpdesk-service";

const Tickets = () => {
  const [state, setState] = useState({ tickets: [] });
  
  const init = async () => {
    try {
      const tickets = await getTickets();
      setState({ ...state, tickets: tickets });
    } catch (error) {
        console.error(error);
    }
  };

  useEffect(() => {
    init();
  }, []);

  return <div>{state.tickets.length}</div>;
};

export default Tickets;
