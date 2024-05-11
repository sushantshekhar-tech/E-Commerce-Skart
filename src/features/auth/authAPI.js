export function createUser(userData) {
    return new Promise(async (resolve) => {
      const response = await fetch('http://localhost:8080/users', {
        method: 'POST',
        body: JSON.stringify(userData),
        headers: { 'content-type': 'application/json' },
      });
      const data = await response.json();
      // TODO: on server it will only return some info of user (not password)
      resolve({ data });
    });
  }
  