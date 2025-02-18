import { get_name } from "../../userdata";

    
const Acceuil1 = () => { // Assuming authUser is passed as a prop
    
    return (
        <div>
            <h1 className="heading-header-second-title">
                Bienvenue  ! {get_name()}
            </h1>
            
            {/* {isPro ? <p>ça marche</p> : <p>ça ne marche pas</p>} */}
        </div>
    );
}

export default Acceuil1;
