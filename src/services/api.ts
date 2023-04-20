import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.adzuna.com/v1/api/jobs/gb",
});

export const API_KEY = "5d3c4bcc26a49dbe6f193ef63841edb3";
export const APP_ID = "50404062";
