import fetch from "node-fetch";
export async function fetchJson<T>(url: string) {
  const result = await fetch(url);
  const json = (await result.json()) as T;
  return json;
}
