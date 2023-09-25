export class CharacterType {
    private _characterName: string = ""
    private _extraLife: number = 0
    private _extraForce: number = 0
    private _extraSpeed: number = 0 
    private _extraIntelligence: number = 0
    private _extraMana: number = 0
    private _extraCriticalStrike: number = 0

    
    constructor (
        characterName: string, 
        extraLife: number,
        extraForce: number,
        extraSpeed : number,
        extraIntelligence : number,
        extraMana : number,
        extraCriticalStrike : number 
        ) {
            this._characterName = characterName
            this._extraLife = extraLife
            this._extraForce = extraForce
            this._extraSpeed = extraSpeed
            this._extraIntelligence = extraIntelligence
            this._extraMana = extraMana
            this._extraCriticalStrike = extraCriticalStrike
        }

    public get characterName(): string {
        return this._characterName
    }
    public set characterName(value: string) {
        this._characterName = value
    }

    public get extraLife(): number {
        return this._extraLife
    }
    public set extraLife(value: number) {
        this._extraLife = value
    }

    public get extraForce(): number {
        return this._extraForce
    }
    public set extraForce(value: number) {
        this._extraForce = value
    }

    public get extraSpeed(): number {
        return this._extraSpeed
    }
    public set extraSpeed(value: number) {
        this._extraSpeed = value
    }

    public get extraCriticalStrike(): number {
        return this._extraCriticalStrike
    }
    public set extraCriticalStrike(value: number) {
        this._extraCriticalStrike = value
    }

    public get extraIntelligence(): number {
        return this._extraIntelligence
    }
    public set extraIntelligence(value: number) {
        this._extraIntelligence = value
    }

    public get extraMana(): number {
        return this._extraMana
    }
    public set extraMana(value: number) {
        this._extraMana = value
    }
}