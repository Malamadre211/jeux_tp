import { Magicien } from "./characterType/Magicien"
import { Viking } from "./characterType/Viking"
import { Personnage } from "./personnage"
import { CombatHandler } from "./Combat"




const vikingDeNorvege = new Viking('Harold')
const character1 = new Personnage('Harold', vikingDeNorvege)

const magicienMerlin = new Magicien('Merlin')
const character2 = new Personnage('Merlin', magicienMerlin)


