import { CharacterType } from "../characterType";

export class Archer extends  CharacterType {
     
    constructor(
        _characterName : string = "Archer",
        _extraLife: number = 15,
        _extraForce: number = 2,
        _extraSpeed : number = 3,
        _extraIntelligence : number = 1,
        _extraMana : number = 10,
        _extraCriticalStrike : number = 0.05
    ){
    
        super(_characterName, _extraLife, _extraForce, _extraSpeed, _extraIntelligence, _extraMana, _extraCriticalStrike)
    }
          
    }