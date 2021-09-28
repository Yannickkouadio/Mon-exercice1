import React from "react";
import "../Style/footer.css"

function Footer() {
    return(
        <div className="footer">
           <div className="footer1">
                <h3>Contacts</h3>
                <p>Mail : MichealDecors1@gmail.com</p>
                <p>Facebook : MichealDecors1@gmail.com</p>
                <p>Fixe : +225 555-555-555-555</p>
           </div>
           <div className="footer2">
           <h3>Les horaires</h3>
                <ul class="liste-horaires">
                 <li>✔️ Lun 10h-19h</li>
                 <li>✔️ Mar 10h-19h</li>
                 <li>✔️ Mer 10h-19h</li>
                 <li>✔️ Jeu 10h-19h</li>
                 <li>✔️ Ven 10h-19h</li>
                 <li>❌ Sam 10h-19h</li>
                 <li>❌ Dim 10h-19h</li>
                </ul>
           </div>
        </div>
    )
}
export default Footer;