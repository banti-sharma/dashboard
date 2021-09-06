import { helpdeskConfig } from "../config/config";
import axios from "axios";

const headers = () => {
  return {
    "Content-Type": "application/json",
    Authorization: helpdeskConfig.userToken,
    "App-Token": helpdeskConfig.appToken,
  };
};

const initSession = async () => {
  const url = helpdeskConfig.url + "/initSession";
  const options = {
    method: "GET",
    headers: headers(),
    url,
  };

  const response = await axios(options);
  response = JSON.parse(response);
  return response.session_token;
};

const killSession = async (sessionToken) => {
  const url = helpdeskConfig.url + "/killSession";
  const options = {
    method: "POST",
    headers: { ...headers(), "Session-Token": sessionToken },
    url,
  };

  await axios(options);
};

export const getTickets = async () => {
  const sessionToken = await initSession();
  const options = {
    method: "GET",
    headers: { ...headers(), "Session-Token": sessionToken },
    url: helpdeskConfig.url + "/Ticket",
  };
  const tickets = await axios(options);
  await killSession(sessionToken);
  return tickets;
};
