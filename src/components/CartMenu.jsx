import { Popover, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { usePopper } from 'react-popper';
import "./CartMenu.css"

export default function CartMenu(props) {
  const timeoutDuration = 200;
  let timeout;

  let buttonRef = useRef(null);

  let [popperElement, setPopperElement] = useState();
  let [referenceElement, setReferenceElement] = useState();
  let { styles, attributes } = usePopper(referenceElement, popperElement);

  const closePopover = () => {
    return buttonRef.current?.dispatchEvent(
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
    return buttonRef.current?.click();
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
                  ref={buttonRef}
                  className={`
                  ${open ? "" : "text-opacity-90"}`}
                  onMouseEnter={onMouseEnter.bind(null, open)}
                  onMouseLeave={onMouseLeave.bind(null, open)}
                >
                  {props.button}
                  <div ref={setReferenceElement}/>
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
                    ref={setPopperElement}
                    style={styles.popper}
                    {...attributes.popper}
                    className="absolute"
                    >
                    <div
                      className="rounded-lg w-32 h-32 z-10"
                      onMouseEnter={onMouseEnter.bind(null, open)}
                      onMouseLeave={onMouseLeave.bind(null, open)}
                    >
                        <div id="CartArrow"/>
                        <div id="CartContainer">
                        {/* CONTENT HERE */}
                        <span className="text-black">Carrinho vazio</span>
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