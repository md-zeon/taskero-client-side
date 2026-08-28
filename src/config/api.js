export const API_BASE_URL =
  import.meta.env.VITE_API_URL || "https://taskero-server.vercel.app";

export const tasksUrl = (suffix = "") => `${API_BASE_URL}/tasks${suffix}`;
