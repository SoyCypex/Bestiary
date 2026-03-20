import { useState } from "react";

export default function MonsterCard({item}){
    const[monster,setMonster]=useState(item);

    const getTreath= value=>{
        let treath =[];
        let amenaza = 10-value;
        let am1= value;

        for(let i=0;i<value;i++){
         treath.push(<i className="bi bi-star-fill me-2"></i>);
        }
        for(let i=0;i<amenaza;i++){
         treath.push(<i className="bi bi-star me-2"></i>)
        }

        return<>{treath}</>
    }

    const getDebil = list=>{
        let debil=[];
        if(list.includes("FIRE")){
            debil.push(<img src="/img/fire.WEBP" alt="" width={30} height={30} />);
        }
        if(list.includes("DRACO")){
            debil.push(<img src="/img/draco.WEBP" alt="" width={30} height={30} />);
        }
        if(list.includes("BLEEDING")){
            debil.push(<img src="/img/bleeding.WEBP" alt="" width={30} height={30} />);
        }
        if(list.includes("ICE")){
            debil.push(<img src="/img/ice.WEBP" alt="" width={30} height={30} />);
        }
        if(list.includes("NITRO")){
            debil.push(<img src="/img/nitro.WEBP" alt="" width={30} height={30} />);
        }
        if(list.includes("PARALYSIS")){
            debil.push(<img src="/img/paralysis.WEBP" alt="" width={30} height={30} />);
        }
        if(list.includes("POISON")){
            debil.push(<img src="/img/poison.WEBP" alt="" width={30} height={30} />);
        }
        if(list.includes("SLEEP")){
            debil.push(<img src="/img/sleep.WEBP" alt="" width={30} height={30} />);
        }
        if(list.includes("THUNDER")){
            debil.push(<img src="/img/thunder.WEBP" alt="" width={30} height={30} />);
        }
        if(list.includes("WATER")){
            debil.push(<img src="/img/water.WEBP" alt="" width={30} height={30} />);
        }
        return<>{debil}</>;
        
    }

    const getElement = list=>{
        let element = [];
        if(list.includes("FIRE")){
            element.push(<img src="/img/fire.WEBP" alt="" width={30} height={30} />);
        }
        if(list.includes("DRACO")){
            element.push(<img src="/img/draco.WEBP" alt="" width={30} height={30} />);
        }
        if(list.includes("BLEEDING")){
            element.push(<img src="/img/bleeding.WEBP" alt="" width={30} height={30} />);
        }
        if(list.includes("ICE")){
            element.push(<img src="/img/ice.WEBP" alt="" width={30} height={30} />);
        }
        if(list.includes("NITRO")){
            element.push(<img src="/img/nitro.WEBP" alt="" width={30} height={30} />);
        }
        if(list.includes("PARALYSIS")){
            element.push(<img src="/img/paralysis.WEBP" alt="" width={30} height={30} />);
        }
        if(list.includes("POISON")){
            element.push(<img src="/img/poison.WEBP" alt="" width={30} height={30} />);
        }
        if(list.includes("SLEEP")){
            element.push(<img src="/img/sleep.WEBP" alt="" width={30} height={30} />);
        }
        if(list.includes("THUNDER")){
            element.push(<img src="/img/thunder.WEBP" alt="" width={30} height={30} />);
        }
        if(list.includes("WATER")){
            element.push(<img src="/img/water.WEBP" alt="" width={30} height={30} />);
        }
        return<>{element}</>;

    }
    return(

        <div className="col-6">
                <div className="card bg-dark border-0 rounded-4">
                    <div className="card-body text-light">
                        <div className="h-100 w-100 d-flex">
                            <div className="rounded-2 me-3 text-center" style={{width: 600, height: 280, backgroundColor: '#181b1d'}}>
                                <img src={monster.imgUrl} className="rounded-2" style={{ width: '100%', height: '100%', objectFit: 'cover'}} />
                            </div>

                            <div className="w-100">
                                <p className="fw-light mb-1"><small>Nombre:</small></p>
                                <p className="fw-bold fs-5">{monster.name}</p>

                                <p className="fw-light mb-1 mt-3"><small>Tipo:</small></p>
                                <p className="fw-bold fs-5">{monster.type}</p>

                                <p className="fw-light mb-1 mt-3"><small>Nivel de amenaza:</small></p>
                                <p className="fw-bold fs-5">
                                    {getTreath(monster.treath)}
                                </p>

                                <div className="row">
                                    <div className="col-6">
                                        <p className="fw-light mb-1"><small>Elementos:</small></p>
                                        <div className="d-flex">
                                            {getElement(monster.elements)}
                                        </div>
                                    </div>

                                    <div className="col-6">
                                        <p className="fw-light mb-1"><small>Debil a:</small></p>
                                        <div className="d-flex">
                                           {getDebil(monster.weakness)}
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}