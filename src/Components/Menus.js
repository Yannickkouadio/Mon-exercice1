/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */

import "../Style/Menus.css"

function Menus({principale,modifpage}) {
   
    return(
        <ul>
            <li className="liens"><a  onClick={()=>modifpage(principale)}>Accueil</a></li>
            <li className="liens"><a href="#" >Services</a></li>
            <li className="liens"><a href="#"> Produits </a></li>
            <li className="liens"><a href="#">A props de nous </a></li>
        </ul>
    )
}
export default Menus;