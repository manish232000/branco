const API_BASE = "http://localhost:4000/api";

// generic helper
async function api(path, options = {}) {
  const res = await fetch(`${API_BASE}${path}`, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

// users
export const getUsers = () => api("/users");
export const createUser = (data) =>
  api("/users", { method: "POST", body: JSON.stringify(data) });

// items
export const getItems = () => api("/items");
export const createItem = (data) =>
  api("/items", { method: "POST", body: JSON.stringify(data) });
export const updateItem = (id, data) =>
  api(`/items/${id}`, { method: "PATCH", body: JSON.stringify(data) });
export const deleteItem = (id) =>
  api(`/items/${id}`, { method: "DELETE" });
