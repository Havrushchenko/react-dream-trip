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

export const loginUser = (userData) => {
  return fetch('/api/users/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
};

export const getAllFlightouts = () => {
  return fetch('/api/flightouts', {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const findFlightout = (flightoutData) => {
  return fetch('/api/flightouts/search', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(flightoutData),
  });
};

export const getAllMessages = () => {
  return fetch('/api/messages/', {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const createMessage = (messageData) => {
  return fetch('/api/messages/', {
    method: 'POST',
    body: JSON.stringify(messageData),
    headers: {
      'Content-Type': 'application/json',
    }
  });
};