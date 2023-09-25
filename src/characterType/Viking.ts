import { timeStamp } from "console";
import { Arme } from "../Arme";
import { CharacterType } from "../characterType";
import { Personnage } from "../personnage";

export class Viking extends  CharacterType {
     
constructor(
    _characterName : string = "Viking",
    _extraLife: number = 25,
    _extraForce: number = 4,
    _extraSpeed : number = 2,
    _extraIntelligence : number = 0,
    _extraMana : number = 0,
    _extraCriticalStrike : number = 0.08
){

    super(_characterName, _extraLife, _extraForce, _extraSpeed, _extraIntelligence, _extraMana, _extraCriticalStrike)
}
      
}