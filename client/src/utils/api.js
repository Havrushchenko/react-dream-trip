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

// export const createFlightout = () => {
//   const options = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Key': '8748a9f6e0msh46c36b26f7e0d08p19406djsne19cef7ec6ae',
//       'X-RapidAPI-Host': 'flight-info-api.p.rapidapi.com'
//     }
//   };
//   fetch('https://flight-info-api.p.rapidapi.com/schedules?version=v1&DepartureDate=2023-03-17&ArrivalDate=2023-03-17', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));
// }

    
