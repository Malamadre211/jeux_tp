import { CharacterType } from "../characterType";

export class Magicien extends  CharacterType {
     
    constructor(
        _characterName : string = "Magicien",
        _extraLife: number = 5,
        _extraForce: number = 1,
        _extraSpeed : number = 1,
        _extraIntelligence : number = 5,
        _extraMana : number = 45,
        _extraCriticalStrike : number = 0
    ){
    
        super(_characterName, _extraLife, _extraForce, _extraSpeed, _extraIntelligence, _extraMana, _extraCriticalStrike)
    }
          
    }