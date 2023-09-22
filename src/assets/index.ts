import { Viking } from "./Viking"
import { Combat } from "./Combat"
import { Arme } from "./Arme"




const viking1 = new Viking('viking1', 48, 48, 12, new Arme('Lame du roi', 10), 6)
const viking2 = new Viking('viking2', 36, 39, 15, new Arme('Lame de sang', 20), 2)

const combat = new Combat([viking1, viking2])
combat.simulate()
combat.afficherVainqueur()