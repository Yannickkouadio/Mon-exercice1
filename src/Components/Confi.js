<div className="bloc1">
<div className="b1">
{ page === principale && <>   
<div>  
 <h3>Nos meubles</h3>
{
produit.map((items,i)=>
<div key={i} className="cart">
<div className="img"><img src={items.img} alt="images" /></div>
<div className="labels">
<label>Nom : {items.nom}</label>
<label>Prix : {items.prix}</label>
<button onClick={()=>ajouter(items)}>Ajouter</button>
 </div>
</div>
)
}
<div>  
 <h3>Nos décorations</h3>
{
produit.map((items,i)=>
<div key={i} className="cart">
<div className="img"><img src={items.img} alt="images" /></div>
<div className="labels">
<label>Nom : {items.nom}</label>
<label>Prix : {items.prix}</label>
<button onClick={()=>ajouter(items)}>Ajouter</button>
 </div>
</div>
)
}
</div>
</div>
</>
}

{
    page === cart && <>
     <div>  
 <h3>Votre panier</h3>
{
panier.map((items,i)=>
<div key={i} className="cart">
<div className="img"><img src={items.img} alt="images" /></div>
<div className="labels">
<label>Nom : {items.nom}</label>
<label>Prix : {items.prix}</label>
<button>Supprimer</button>
 </div>
</div>
)
}
</div>
    </>
} 
</div>
</div>

{
    page === cart && <>
     <div>  
 <h3>Votre panier</h3>
{
panier.map((items,i)=>
<div key={i} className="cart">
<div className="img"><img src={items.img} alt="images" /></div>
<div className="labels">
<label>Nom : {items.nom}</label>
<label>Prix : {items.prix}</label>
<button>Supprimer</button>
 </div>
</div>
)
}
</div>
    </>
} 
</div>
</div>




<div className="bloc2">
<button >Fermer</button>
<h3>Panier</h3>
<p>{panier.length} </p>
<h3>Total :</h3>
<button onClick={()=>modifpage(cart)}>Voir ses produits</button>
</div>




<div>  
 <h3>Nos meubles</h3>
{
produit.map((items,i)=>
<div key={i} className="cart">
<div className="img"><img src={items.img} alt="images" /></div>
<div className="labels">
<label>Nom : {items.nom}</label>
<label>Prix : {items.prix}</label>
<button onClick={()=>ajouter(items)}>Ajouter</button>
 </div>
</div>
)
}
</div>