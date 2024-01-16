import { Popover, Transition } from "@headlessui/react";
import { Fragment, useRef } from "react";

export default function CartMenu(props) {
  const ButtonRef = useRef(null);
  const timeoutDuration = 200;
  let timeout;

  const closePopover = () => {
    return ButtonRef.current?.dispatchEvent(
      new KeyboardEvent("keydown", {
        key: "Escape",
        bubbles: true,
        cancelable: true
      })
    );
  };

  const onMouseEnter = (open) => {
    clearTimeout(timeout)
    if (open) return;
    return ButtonRef.current?.click();
  };

  const onMouseLeave = (open) => {
    if (!open) return;
    timeout = setTimeout(() => closePopover(), timeoutDuration);
  };

  return (
    <div>
      <Popover className="relative">
        {({ open }) => {
          return (
            <>
              <div onMouseLeave={onMouseLeave.bind(null, open)}>
                <Popover.Button
                  id="CartButton"
                  ref={ButtonRef}
                  className={`
                  ${open ? "" : "text-opacity-90"}`}
                  onMouseEnter={onMouseEnter.bind(null, open)}
                  onMouseLeave={onMouseLeave.bind(null, open)}
                >
                  {props.button}
                </Popover.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel 
                    id="CartMenu"
                    className="absolute"
                    >
                    <div
                      className="rounded-lg w-32 h-32 z-10"
                      onMouseEnter={onMouseEnter.bind(null, open)}
                      onMouseLeave={onMouseLeave.bind(null, open)}
                    >
                        <div id="CartArrow"/>
                        <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
                        {/* CONTENT HERE */}
                        </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </div>
            </>
          )
        }}
      </Popover>
    </div>
  )
}