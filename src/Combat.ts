import { CharacterType } from "./characterType";
import { Personnage } from "./personnage";

export class CombatHandler {

    private _character1 : Personnage
    private _character2 : Personnage

    constructor(character1 : Personnage, character2 : Personnage) {
        this._character1 = character1
        this._character2 = character2
    }

    public beforeAttack(attack : Personnage, defence : Personnage){
                //debut de combat
        let attaquant = this._character1.speed > this._character2.speed ? this._character1 : this._character2
        let defenseur = this._character1.speed > this._character2.speed ? this._character2 : this._character1
    }

    public fight(attack : Personnage, defence : Personnage){
        //boucle de combat
        while (attack.life > 0 && defence.isAlive()) {
            // this.beforeAttack
            this.onHitAttack(attack, defence)
            // this.afterAttack()
            let intermediaire = attack
            attack = defence
            attack = intermediaire
        }

    }

    public afterAttack(attack : Personnage, defence : Personnage){
         //aprés combat
         console.log('combat terminé')
         if(this._character1.isAlive()){
             this._character1.startExperience = this._character2.startLevel * 100
         }
    }

    public onHitAttack(attack : Personnage, defence : Personnage){
        defence.degats += attack.force
    }
}