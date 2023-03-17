import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { AiOutlineShoppingCart } from "react-icons/ai";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function CartToggle() {
  // static icon
  const [customOpen, setCustomOpen] = useState(false);
  
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      airline: "Kiwi",
      flight_number: "WG 345",
      departure_city: "Kharkiv",
      destination_city: "London",
      date: "SEP 22",
      price: 3500,
      quantity: 1,
    },
    {
      id: 2,
      airline: "WizzAir",
      flight_number: "RT 123",
      departure_city: "Lviv",
      destination_city: "Kyiv",
      date: "MAR 16",
      price: 1950,
      quantity: 2,
    },
  ]);

  const increaseQuantity = (id) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedCartItems);
  };

  const decreaseQuantity = (id) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity - 1 } : item
    );
    setCartItems(updatedCartItems.filter((item) => item.quantity > 0));
  };

  const removeItem = (id) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCartItems);
  };
  
  const calculateFlightTotal = (item) => {
    const quantity = Number(item.quantity);
    const price = Number(item.price);
    if (isNaN(quantity) || isNaN(price)) {
      return 0;
      }
    return quantity * price;
  };
  
  const calculateOverallTotal = () => {
    return cartItems.reduce((acc, item) => {
      return acc + calculateFlightTotal(item);
    }, 0);
  };
  
  const totalPerFlight = cartItems.map((item) => {
    return calculateFlightTotal(item);
  });
  
  const overallTotal = calculateOverallTotal();
  
  return (
    <Menu as="div" className="visible relative z-50	 inline-block text-left ">
      <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm text-slate-600 hover:text-black shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
        <AiOutlineShoppingCart className="m-auto" />
        Cart
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items static className="md:absolute mt-2 w-50 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" >
          <div className="md:absolute left lg:absolute right-0 z-10 mt-2 w-100 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ">
            {cartItems.map(
              ({
                id,
                airline,
                flight_number,
                departure_city,
                destination_city,
                date,
                price,
                quantity
              }) => (
                <div key={id} className="w-72 ">
                  <Menu.Item>
                    {({ active }) => (
                      <span
                        className={classNames(
                          "text-green-800 font-extrabold",
                          "block px-4 py-2 text-sm text-center	border-t-2"
                        )}
                      >
                        {airline}
                      </span>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <div
                        className={classNames(
                          "text-white bg-green-800  space-x-40",
                          "block w-full px-4 py-2 text-left text-sm border-t-0 "
                        )}
                      >
                        <span>Flights</span>
                        <span>{price}$</span>
                      </div>
                    )}
                  </Menu.Item>
                        
                  <Menu.Item>
                    {({ active }) => (
                      <div
                        className={classNames(
                          "text-white bg-green-800  space-x-40",
                          "block w-full px-4 py-2 text-left text-sm border-t-0 "
                        )}
                      >
                        <ul>
                          <li>
                          <span>No. Tickets: </span>
                          <button onClick={() => increaseQuantity(id)} className="bg-green-500 text-white py-1 px-2 rounded-full hover:bg-green-700 focus:outline-none">+</button>
                          <span> {quantity} </span>
                          <button onClick={() => decreaseQuantity(id)} className="bg-red-500 text-white py-1 px-2 rounded-full hover:bg-red-700 focus:outline-none">-</button>
                          <button className= "text-white px-2 py-1 rounded" onClick={() => removeItem(id)}>🛒</button>
                          </li>
                        </ul>
                      </div>
                    )}
                  </Menu.Item>
                    
                  <Menu.Item>
                    {({ active }) => (
                      <div
                        className={classNames(
                          "text-gray-700",
                          "flex  w-full px-4 py-2 text-left text-sm  space-x-20"
                        )}
                      >
                        <div>{date}</div>
                        <div className="font-bold text-green-800">
                          {departure_city} - {destination_city}
                        </div>
                      </div>
                    )}
                  </Menu.Item>

                  <Menu.Item>
                    {({ active }) => (
                      <div
                        className={classNames(
                          "text-gray text-xs font-extralight	",
                          "block w-full px-4 py-2 text-left text-sm border-t-0 "
                        )}
                      >
                        <div className="pl-32 pb-2 ">
                          number {flight_number}
                        </div>
                      </div>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <div
                        className={classNames(
                          "text-gray-700",
                          "flex  w-full px-4 py-2 text-left text-sm  space-x-20"
                        )}
                        >
                        
                      </div>
                    )}
                  </Menu.Item>
                </div>

              )
            )}
            <Menu.Item>
                    {({ active }) => (
                      <div
                        className={classNames(
                          "text-gray-700",
                          "flex  w-full px-4 py-2 text-left text-sm  space-x-20"
                        )}
                        >
                        <div className="bg-green-500 text-white py-1 px-2 rounded-full" >
                        TOTAL Amount($): <span>{calculateOverallTotal(overallTotal)}</span>
                        </div>
                      </div>
                    )}
            </Menu.Item>
            <button className='flex w-full h-11 rounded-b-[5px] gap-2 text-white bg-green-800 hover:bg-green-700 justify-center place-items-center text-sm'>Checkout</button>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
