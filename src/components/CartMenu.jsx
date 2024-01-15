import { Popover } from '@headlessui/react';
import { useState } from 'react';
import { usePopper } from 'react-popper';
import './CartMenu.css';

function CartMenu(props){
;
    const [referenceElement, setReferenceElement] = useState(null);
    const [popperElement, setPopperElement] = useState(null);
    const [arrowElement, setArrowElement] = useState(null);
    const { styles, attributes } = usePopper(referenceElement, popperElement, {
      modifiers: [{ name: 'arrow', options: { element: arrowElement } }],
    });

    return (
        <Popover>
            <Popover.Button
                id="CartButton"
                ref={setReferenceElement}
            >{props.button}
            </Popover.Button>
            <Popover.Panel
                id="CartMenu"
                className="z-10"
                ref={setPopperElement}
                style={styles.popper}
                {...attributes.popper}
                >
                <div id="CartArrow" ref={setArrowElement} style={styles.arrow}/>
                <div className="w-32 h-32">
                        <span>Carrinho vazio</span>
                </div>
            </Popover.Panel>   
        </Popover>
    )
}

export default CartMenu;