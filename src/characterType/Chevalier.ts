import { CharacterType } from "../characterType";

export class Chevalier extends  CharacterType {
     
    constructor(
        _characterName : string = "Chevalier",
        _extraLife: number = 40,
        _extraForce: number = 5,
        _extraSpeed : number = 1,
        _extraIntelligence : number = 1,
        _extraMana : number = 5,
        _extraCriticalStrike : number = 0.03
    ){
    
        super(_characterName, _extraLife, _extraForce, _extraSpeed, _extraIntelligence, _extraMana, _extraCriticalStrike)
    }
          
    }