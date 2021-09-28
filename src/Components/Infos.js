/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import "../Style/Infos.css"
import img1 from "../images/1.jpg"
import img2 from "../images/2.jpg"
import img3 from "../images/3.jpg"
import img4 from "../images/4.jpg"
import img5 from "../images/5.jpg"
import img6 from "../images/6.jpg"
import img7 from "../images/7.jpg"
import img8 from "../images/8.jpg"



function Infos({cart,principale,presentation,filter,filter1}) {
    
    const [produit2]=useState([
        {
            img:img5,
            nom:"",
            prix:1500,
        },
        {
            img:img6,
            nom:"Q",
            prix:1500,
        },
        {
            img:img7,
            nom:"",
            prix:1500,
        },
        {
            img:img8,
            nom:"fauteille",
            prix:1500,
        },
       
    ])

    const [produit]= useState( [
        {
            img:img1,
            nom:"Fauteuil en cuir marron",
            prix:1500,
        },
        {
            img:img2,
            nom:"B",
            prix:1500,
        },
        {
            img:img3,
            nom:"C",
            prix:1500,
        },
        {
            img:img4,
            nom:"D",
            prix:1500,
        },
       
        
    ])
    const [panier,ajoutpanier]=useState([])
    function Ajouter(produits2) {
        console.log("bien")
        ajoutpanier([...panier,produits2])
       
    }
    function ajouter(produits) {
        console.log("Réussir")
        ajoutpanier([...panier,produits])
    }
   /* function vider() {
        ajoutpanier([...panier,panier])
        
    }*/
    
    
    const [Page,modifpage]=useState(presentation)
    
    const [vrai,faux]=useState(true)
    const total = panier.reduce(
        (acc, panier) => acc + panier.prix  ,
            0
        )
        
        /*useEffect(()=>{
            alert(`J'aurai ${total}€ à payer 💸`)},[total])*/
    let saisir = produit.filter(item =>
            Object.keys(item).some(key=>
                item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
                )
        )
    let saisir2 = produit2.filter(items =>
        Object.keys(items).some(key=>
            items[key].toString().toLowerCase().includes(filter1.toString().toLowerCase())
            )
    )
        return(
            <div className="section" id="produits">
                 
                
                {
                    Page === presentation && 
                    <div className="bloc3">
                    <div>
                    <h1>Micheal-Decors</h1>
                    <p>
                        Micheal-Decors est une petite boite spécialisée dans la vente <br/>
                        des meubles et la décoration pour toutes les pièces de vos maisons, <br/>
                        bureaux, jardins, chambres et sans oublié la cuisine
                    </p>
                    <button onClick={()=>modifpage(principale)}>Cliquez ici</button>
                    </div>
                    <div className="sliders">
                    
                    </div>
                    </div>
                }
                {
                    Page===principale &&
                    <div className="bloc1">
                            <div className="b1">
                            <h3>Nos meubles</h3>
                                {
                                saisir.map((items,i)=>
                                <div key={i} className="cart">
                                <div className="img"><img src={items.img} alt="images" /></div>
                                <div className="labels">
                                <label style={{fontSize:"12px"}}>Nom : {items.nom}</label>
                                <label style={{fontSize:"12px"}}>Prix : {items.prix}</label>
                                <button onClick={()=>ajouter(items)}>Ajouter</button>
                            </div>
                            </div>
                                )
                                }
                            <h3>Nos décorations</h3>
                                {
                                saisir2.map((items,i)=>
                                <div key={i} className="cart">
                                <div className="img"><img src={items.img} alt="images" /></div>
                                <div className="labels">
                                <label style={{fontSize:"12px"}}>Nom : {items.nom}</label>
                                <label style={{fontSize:"12px"}}>Prix : {items.prix}</label>
                                <button onClick={()=>Ajouter(items)}>Ajouter</button>
                                </div>
                                </div>
                                )
                                }
                            </div>
                           
                    </div>
                     
                   
                }  
                {    Page === principale &&
                     
                     <div className="bloc2">
                             {
                                 vrai?
                                 <div>
                             <button onClick={()=>faux(false)}>Fermer</button> 
                             <div className="compte">
                             <h3>Panier</h3>
                             <h3>Total : {total} Frfca</h3> 
                             {
                                 panier.map((i,j)=>
                                 <div style={{fontSize:"12px"}} key={j}>{i.nom} {i.prix} Frfca</div>
                                 )
                             }
                             </div>
                             <button >Vider le panier</button>
                            </div>:<div><button onClick={()=>faux(true)}>Voir le panier</button></div>
                             }
                             
                         <button onClick={()=>modifpage(cart)}>Voir mes commandes {panier.length}</button>    
                     </div> 
                }
              
                {
                    Page===cart &&
                    <div className="bloc1">
                        <div className="b1">
                        <h3>Vos commandes</h3>
                            {
                            panier.map((items,i)=>
                            <div key={i} className="cart">
                            <div className="img"><img src={items.img} alt="images" /></div>
                            <div className="labels">
                            <label style={{fontSize:"12px"}}>Nom : {items.nom}</label>
                            <label style={{fontSize:"12px"}}>Prix : {items.prix}</label>
                            <button>Supprimer</button>
                            </div>
                            </div>
                            )
                            }
                            
                        </div>
                        <button onClick={()=>modifpage(principale)}>Revenir aux produits</button>
                    </div>
                }     
               </div>
        
        )
    }
export default Infos;