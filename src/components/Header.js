import React from 'react'

export default function Header(props) {
    const {countCartItems}=props;

    return (
        <div className=""> 
           <header>
                <div className="d-flex gap-2 p-3 bg-secondary fs-4 justify-content-between  fw-bold " >
               <div>
                   <a href="#" className="text-decoration-none text-white">Shopping cart</a>

               </div>
               <div className="">
                   <a href="#"  className="text-decoration-none pe-4">
                       
                   Cart<sup>
          {props.countCartItems ? (
            <code className=" text-light">{countCartItems}</code>
          ) : ( ''
            
          )}
</sup>

                   </a>
                   <a href="#"  className="text-decoration-none pe-1">Sign</a>

               </div>
               </div>
           </header>
        </div>
    )
}
