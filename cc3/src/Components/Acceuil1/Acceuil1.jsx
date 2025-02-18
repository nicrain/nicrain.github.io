// import styles of this component
import logo from "../../assets/192.png";
import "./Acceuil1.css";

// import other components


import BrickLayout from "../BrickLayout/BrickLayout";


// import something from react packages

// import jsons


// Header component
const Acceuil1 = () => {
  return (
    <header className='styles.header flex justify-content-center'>
        
          <div className="blur-circle-shape"></div>

          <BrickLayout />
          
          <div className="headings-header flex justify-content-center flex-column">
            
            <h1 className="heading-header-second-title">
                Bienvenue sur culture Connect !
            </h1>
            <h2 className="heading-header-title">L'application qui Lorem ipsum dolor sit amet. </h2>
            <p className="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. </p>
            <img src={logo} alt="" className="logo1" />

            


            
          </div>
        
    </header>
  )
}

export default Acceuil1