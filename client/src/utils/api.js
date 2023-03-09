export const getAllUsers = () => {
    return fetch('/api/users/', {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };
  
export const createUser = (userData) => {
    return fetch('/api/users/auth/signup', {
      method: 'POST',
      body: JSON.stringify(userData),
      headers: {
        'Content-Type': 'application/json',
      }
    });
  };