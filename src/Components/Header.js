import React from "react";
import "../Style/Header.css"

function Header({filter,filtrage,filtrage2}) {
     function change(e){
        console.log(e)
        filtrage(e.target.value)
        filtrage2(e.target.value)
    }
    return(
        <div className="header">
            <div>
                <h1 className="logo">Micheal-Decors</h1>
                <input type="text"  value={filter} onChange={change}/>
            </div>
        </div>
    )
}
export default Header;