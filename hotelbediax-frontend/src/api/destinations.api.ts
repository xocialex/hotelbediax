import type { Destination } from "../types/destination";

const API_URL = "http://localhost:5221/api/destinations";

export async function getDestinations(filter?: string): Promise<Destination[]> {
  const url = filter ? `${API_URL}?filter=${filter}` : API_URL;
  const res = await fetch(url);
  return res.json();
}

export async function createDestination(data: Omit<Destination, "id" | "lastModification">) {
  await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
}

export async function updateDestination(id: number, data: Omit<Destination, "id" | "lastModification">) {
  await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
}

export async function deleteDestination(id: number) {
  await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
}
