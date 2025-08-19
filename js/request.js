import { loaderToggle } from "./loader.js";

export const url = "https://json-api.uz/api/project/cake-desert/desserts";

export const getData = async (url) => {
  loaderToggle(true);
  if (!url.trim()) {
    alert("NO URL");
    return;
  }
  try {
    const req = await fetch(url);
    if (!req.ok) {
      throw new Error("Something went wrong");
    }
    const data = await req.json();
    return data.data;
  } catch (error) {
    alert(error.message);
  } finally {
    loaderToggle(false);
  }
};
