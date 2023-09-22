export class CharacterType {
    private _characterName: string 
    private _specialCapacity: string
    private _extraLife: number 
    private _extraForce: number 
    private _extraSpeed: number 
    private _extraIntelligence: number 
    private _extraMana: number 
    private _extraCriticalStrike: number 

    
    constructor (
        _characterName: string, 
        _specialCapacity : string,
        _extraLife: number,
        _extraForce: number,
        _extraSpeed : number,
        _extraIntelligence : number,
        _extraMana : number,
        _extraCriticalStrike : number 
        ) {
            this._characterName = ''
            this._specialCapacity = ''
            this._extraLife = _extraLife
            this._extraForce = _extraForce
            this._extraSpeed = _extraSpeed
            this._extraIntelligence = _extraIntelligence
            this._extraMana = _extraMana
            this._extraCriticalStrike = _extraCriticalStrike
        }

    public get characterName(): string {
        return this._characterName
    }
    public set characterName(value: string) {
        this._characterName = value
    }

    public get specialCapacity(): string {
        return this._specialCapacity
    }
    public set specialCapacity(value: string) {
        this._specialCapacity = value
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