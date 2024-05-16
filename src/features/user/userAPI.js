//To fetch the user from the user API
export function fetchLoggedInUserOrders(userId) {
  return new Promise(async (resolve) => {
    const response = await fetch(
      "http://localhost:8080/orders/?user.id=" + userId
    );
    const data = await response.json();
    resolve({ data });
  });
}

//API used for fetching the loggedin user
export function fetchLoggedInUser(userId) {
  return new Promise(async (resolve) => {
    const response = await fetch(
      "http://localhost:8080/users/" + userId
    );
    const data = await response.json();
    resolve({ data });
  });
}



//For handling the personal information of the user
export function updateUser(update) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/users/"+update.id, {
      method: "PATCH",
      body: JSON.stringify(update),
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();
    // TODO: on server it will only return some info of user (not password)
    resolve({ data });
  });
}