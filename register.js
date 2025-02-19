import { baseUrl } from "./index.js";

async function handleRegisterSubmit(body) {
  // Make an API call to the register endpoint.
  try {
    const response = await fetch(baseUrl + "/api/user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    if (response.status == 200) {
      return;
    } else if (response.status == 400) {
      return data.error;
    } else {
      return data.error;
    }
  } catch (e) {
    return e.toString();
  }
}
function validateUsername(username) {
  const regex = /^[a-zA-Z0-9_]{3,16}$/;
  return regex.test(username);
}
const spinner = document.querySelector("#spinner");

function showRegSpinner() {
  spinner.style.display = "block";
}

function hideRegSpinner() {
  spinner.style.display = "none";
}
export {
  handleRegisterSubmit,
  validateUsername,
  showRegSpinner,
  hideRegSpinner,
};
