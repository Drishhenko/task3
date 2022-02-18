export class Users {
  static create(user) {
    return fetch(
      "https://auth-email-6d64f-default-rtdb.europe-west1.firebasedatabase.app/users.json",
      {
        method: "POST",
        body: JSON.stringify(user),
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((response) => response.json())
  }

  static fetch(token) {
    return fetch(``)
      .then((response) => response.json())
      .then((response) => {
        return response
          ? Object.keys(response).map((key) => ({
              ...response[key],
              id: key,
            }))
          : [];
      });
  }
}
