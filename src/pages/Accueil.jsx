 import Navbar from "../composant/Navbar";
 import '../App.css';
 import Card from "../composant/Card";
 import Flooter from "../composant/flooter";

 function Accueil () {

    return (
    <>
        <div className="App">
            <Navbar/>
        </div>
        <div className="cont1">
            <h2 className="mot">Bienvenue chez le TACOS Food</h2>
            <div className="intrt">
                <p className="intro">Nous servons une délicieuse sélection de plats rapides, frais et savoureux pour tous les goûts. Nos repas sont préparés rapidement et avec soin pour vous offrir une expérience de restauration rapide de qualité. Passez votre commande aujourd'hui et goûtez par vous-même!</p>
            </div>
        </div>
        
        <div className="put">
            <input  type="text" placeholder="Rechercher un Plat"/>
        </div>
       
        <div className="dispo1">
            <Card/>
            <Card/>
            <Card/>
        </div>
        <div className="dispo">
            <Card/>
            <Card/>
            <Card/>
        </div>
        <div className="dispo">
            <Card/>
            <Card/>
            <Card/>
        </div>
        <Flooter/>
        

    </>
    )
 }
 export default Accueil; 