import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useAppContext } from "../../context";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function CartToggle() {
  const { shoppingCart } = useAppContext();
  function calculateTotal() {
    let sum = 0;
    shoppingCart.forEach((item) => {
      sum += shoppingCart[0].price;
    });

    return sum;
  }

  return (
    <Menu as="div" className="visible relative z-50	 inline-block text-left">
      <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-3 text-sm text-slate-600 hover:text-black shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
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
        <Menu.Items
          className="md:absolute mt-2 w-50 ml-[70px] origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none
       
         "
        >
          <div className="md:absolute left lg:absolute right-0 z-10 mt-2 w-100 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ">
            {shoppingCart.map((item) => (
              <div className="w-72 ">
                <Menu.Item>
                  {({ active }) => (
                    <span
                      className={classNames(
                        "text-green-800 font-extrabold",
                        "block px-4 py-2 text-sm text-center	border-t-2"
                      )}
                    >
                      {shoppingCart[0].airline}
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
                      <span>Price</span>
                      <span>{shoppingCart[0].price} $</span>
                    </div>
                  )}
                </Menu.Item>

                <Menu.Item>
                  {({ active }) => (
                    <div
                      className={classNames(
                        "text-gray text-xs font-extralight",
                        " flex w-full px-4 py-2 text-left text-sm  space-x-20"
                      )}
                    >
                      <div>{shoppingCart[0].date.split("T")[0]}</div>
                      <div className=" ">
                        number {shoppingCart[0].flight_number}
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
                      <div className="font-bold text-green-800 text-center	">
                        <span className="text-gray-700 text-xs font-extralight">
                          from
                        </span>{" "}
                        {shoppingCart[0].departure_city} -{" "}
                        <span className="text-gray-700 text-xs font-extralight">
                          to
                        </span>{" "}
                        {shoppingCart[0].destination_city}
                      </div>
                    </div>
                  )}
                </Menu.Item>
              </div>
            ))}
            <div className=" text-green-800 px-4 py-2">
              <span>Total: {calculateTotal()} $</span>
            </div>
            <button className="flex w-full h-11 rounded-b-[5px] gap-2 text-white bg-green-800 hover:bg-green-700 justify-center place-items-center text-sm">
              Checkout
            </button>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}