import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoIosAirplane } from "react-icons/io";
import { AiOutlineSearch } from "react-icons/ai";
import backgroundVideo from "../../assets/img/background-video.mp4";
import { findFlightout } from "../../utils/api";
import Auth from "../../utils/auth";
import { motion, useScroll } from "framer-motion";
import { Card } from "../Card";

export function Search() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  function update() {
    if (scrollY?.current < scrollY?.prev) {
      setHidden(false);
    } else if (scrollY?.current > 100 && scrollY?.current > scrollY?.prev) {
      setHidden(true);
    }
  }

  useEffect(() => {
    return scrollY.onChange(() => update());
  });

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -25 },
  };

  const [startDate, setStartDate] = useState(new Date());
  const [formData, setFormData] = useState({
    departure_city: "",
    destination_city: "",
    startDate: "",
  });

  const [flightoutsData, setFlightoutsData] = useState({});
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await findFlightout(formData);

      if (!response.ok) {
        throw new Error("something went wrong!");
      }
      const flightout = await response.json();

      setFlightoutsData(flightout.flightout);

    } catch (err) {
      console.error(err);
    }

    setFormData({
      departure_city: "",
      destination_city: "",
      startDate: "",
    });
  };
  return (
    <>
      <motion.div
        variants={variants}
        animate={hidden ? "hidden" : "visible"}
        transition={{ ease: [0.9, 0.25, 0.3, 1], duration: 0.6 }}
        className="flex flex-col items-center justify-center shadow-lg mx-[50px] my-[50px] mt-[50px]"
      >
        <video
          className="video rounded-[10px] h-[500px] w-[100%] object-cover"
          src={backgroundVideo}
          muted
          autoPlay
          loop
        />
        {Auth.loggedIn() ? (
          <>
            <div className="absolute mt-[-200px]">
              <h2 className="text-[25px] font-bold leading-tight tracking-tight text-green-800 text-center">
                Book cheep flights
                <span className="text-white">
                  {" "}
                  other sites simply can't find
                </span>
              </h2>
            </div>
            <div className="grid absolute gp-10 bg-grey rounded-[10px] shadow-lg">
              <form
                action
                className=" flex m-[50px] items-center justify-center"
              >
                <div
                  className="flex justify-between items-center rounded-[10px] 
gap-[10px] bg-white shadow-lg shadow-greyIsh-700"
                >
                  <div className="flex gap-2 items-center">
                    <IoIosAirplane className="text-[25px] ml-[10px]" />
                    <input
                      value={formData.departure_city}
                      onChange={handleInputChange}
                      name="departure_city"
                      type="text"
                      className="bg-transparent focus:outline-none
w-[100%] text-sm"
                      placeholder="Departure City"
                      autocomplete="off"
                    />
                  </div>
                  <div className="flex gap-2 items-center">
                    <IoIosAirplane className="text-[25px] ml-[10px]" />
                    <input
                      value={formData.destination_city}
                      onChange={handleInputChange}
                      name="destination_city"
                      type="text"
                      className="bg-transparent focus:outline-none
w-[100%] text-sm"
                      placeholder="Destination City"
                      autocomplete="off"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={handleFormSubmit}
                    className="flex w-32 h-11 rounded-r-[10px] gap-2 text-white bg-green-800 hover:bg-green-700 justify-center place-items-center text-sm"
                  >
                    <AiOutlineSearch className="" />
                    Search
                  </button>
                </div>
              </form>
            </div>
          </>
        ) : (
          <>
            <div className="absolute">
              <h2 className="text-[25px] font-bold leading-tight tracking-tight text-green-800 text-center">
                Book cheep flights
                <span className="text-white">
                  {" "}
                  other sites simply can't find
                </span>
              </h2>
              <p className="text-white">
                Please{" "}
                <Link className="font-bold hover:text-green-800" to="/login">
                  login
                </Link>{" "}
                or create a{" "}
                <Link className="font-bold hover:text-green-800" to="/signup">
                  new account
                </Link>{" "}
                to use all the advantages of our service.
              </p>
            </div>
          </>
        )}
      </motion.div>
      <div>
        {Object.keys(flightoutsData).length > 0 ? (
          <Card {...flightoutsData} />
        ) : null}
      </div>
    </>
  );
}
