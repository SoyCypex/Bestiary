import { useEffect, useState } from "react";
import MonstersController from "C:/Users/Erick/OneDrive/Escritorio/5B node js/2do examen ordinario/bestiary/src/modules/games/MonstersController.js";
import MonstersCard from "C:/Users/Erick/OneDrive/Escritorio/5B node js/2do examen ordinario/bestiary/src/modules/games/components/MonstersCard.jsx";
export default function MonsterView(){

    const [monsterList,setMonsterList]=useState([]);

    useEffect(()=>{
     handleGetJson();
    },[]);

    const handleGetJson = async()=> setMonsterList(await MonstersController.findAll());
    return(
        <main className="p-5 text-light" style={{ backgroundColor: '#181b1d' }}>
        <h1>Bestiario</h1>
        <hr />
        <div className="row g-3" style={{overflowX: 'hidden', overflowY: 'auto', height: '93%'}}>
            {monsterList.map((monster,index)=>(
                <MonstersCard key={index} item={monster}/>
            ))}
        </div>
    </main>
    );
}