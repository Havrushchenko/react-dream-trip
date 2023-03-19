import React, { createContext, useContext, useState } from "react";

// Initialize new context for students
const AppContext = createContext();

// We create a custom hook to provide immediate usage of the student context value (students) in other components
export const useAppContext = () => useContext(AppContext);

// The provider is responsible for creating our state, updating the state, and persisting values to the children
export const AppProvider = ({ children }) => {
  const [shoppingCart, setShoppingCart] = useState([]);

  // Function to add a student
  const addToCart = (ticket) => {
    // Check if the user forgot to enter a name
    if (!Object.keys(ticket).length) {
      return;
    }
    

    // Update state with the students array with the newStudent
    setShoppingCart([...shoppingCart, ticket]);
  };

  // Function to remove a student
  const removeFromCart = (id) => {
    // to do delete methouds
    // // Copy the content of the students array into our new list with the spread operator, then filter out the student that matches the `id` that was passed
    // const newStudentsList = [
    //   ...students.filter((student) => student.id !== id),
    // ];

    // setStudents(newStudentsList);
  };
  
  return (
    <AppContext.Provider
      value={{ shoppingCart, addToCart, removeFromCart }}
    >
      {/* We render children in our component so that any descendent can access the value from the provider */}
      {children}
    </AppContext.Provider>
  );
};
