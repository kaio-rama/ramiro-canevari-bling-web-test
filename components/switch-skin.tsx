"use client"

import { styleCards } from "@/app/ui/classes";


export default function SwitchSkin (){

    const handleClick = ()=>{
        let getImage = document.getElementsByTagName("img")
        let getLabel = document.getElementsByTagName("label")

        if ( getImage[1].hidden && getLabel[1].hidden  ){
            getImage[0].hidden = getLabel[0].hidden = true;
            getImage[1].hidden = getLabel[1].hidden = false;
            
        } else{
            getImage[1].hidden = getLabel[1].hidden = true;
            getImage[0].hidden = getLabel[0].hidden =false;              

        }

    }
    return(
        <button className={`p-4 m-4 border border-slate-600 rounded hover:shadow-lg sub-title`} onClick={handleClick}> SWITCH SKIN </button>
    )

}