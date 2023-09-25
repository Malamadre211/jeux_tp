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
      
    specialAttackCapacity(char: Personnage, target: Personnage, attackResult: number){
        let lifeLeech = this.LifeLeech(attackResult);
        let manaLeech = this.ManaLeech(attackResult);
    }

    ManaLeech(attackResult: number) : number {
        let manaLeech : number = Math.ceil(attackResult *0.03);
        console.log("Le coup de Hache absorbe l'energie mentale de l'adversaire, "+ manaLeech + " points de mana sont volés")
        return manaLeech;
    }

    LifeLeech(attackResult: number) : number {
        let leech : number = Math.ceil(attackResult * 0.15);
        console.log("Le coup de Hache absorbe la vie de l'adversaire, "+ leech + " points de vie sont volés")
        return leech;
    }

    SpecialBeforeAttackCapacity(char: Personnage, target: Personnage){}
    SpecialAfterAttackCapacity(char: Personnage, target: Personnage){}


}