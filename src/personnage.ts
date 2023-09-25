import { CharacterType } from "./characterType"

export class Personnage{
    private _name: string = ""
    private _characterType: CharacterType
    private _startLife: number = 50
    private _startLevel: number = 0
    private _startExperience: number = 0 
    private _startMana: number = 50
    private _startForce: number = 10
    private _startSpeed: number = 10 
    private _startIntelligence: number = 10 
    private _startCriticalStrike: number = 0.02

    public get name(): string {
        return this._name
    }
    public set name(value: string) {
        this._name = value
    }

    public get characterType(): CharacterType {
        return this._characterType
    }
    public set characterType(value: CharacterType) {
        this._characterType = value
    }

    public get startLife(): number {
        return this._startLife
    }
    public set startLife(value: number) {
        this._startLife = value
    }

    public get startLevel(): number {
        return this._startLevel
    }
    public set startLevel(value: number) {
        this._startLevel = value
    }

    public get startExperience(): number {
        return this._startExperience
    }
    public set startExperience(value: number) {
        this._startExperience = value
    }

    public get startMana(): number {
        return this._startMana
    }
    public set startMana(value: number) {
        this._startMana = value
    }

    public get startForce(): number {
        return this._startForce
    }
    public set startForce(value: number) {
        this._startForce = value
    }

    public get startSpeed(): number {
        return this._startSpeed
    }
    public set startSpeed(value: number) {
        this._startSpeed = value
    }
    public get startIntelligence(): number {
        return this._startIntelligence
    }
    public set startIntelligence(value: number) {
        this._startIntelligence = value
    }

    public get startCriticalStrike(): number {
        return this._startCriticalStrike
    }
    public set startCriticalStrike(value: number) {
        this._startCriticalStrike = value
    }

    public get life() {
        return this._startLife + this._characterType.extraLife
    }

    public get mana(){
        return this._startMana + this._characterType.extraMana
    }

    public get force(){
        return this._startForce + this._characterType.extraForce
    }

    public get speed() {
        return this._startSpeed + this._characterType.extraSpeed
    }

    public get intelligence() {
        return this._startIntelligence + this._characterType.extraIntelligence
    }

    public get CriticalStrike() {
        return this._startCriticalStrike + this._characterType.extraCriticalStrike
    }

    constructor(name : string, characterType : CharacterType, startLife = 50, startLevel = 0, startExperience = 0, startMana = 50, startForce = 10, startSpeed = 10, startIntelligence = 10, startCriticalStrike = 0.02){
        this._name = name
        this._characterType = characterType
        this._startLife = startLife
        this._startLevel = startLevel
        this._startExperience = startExperience
        this._startMana = startMana
        this._startForce = startForce
        this._startSpeed = startSpeed
        this._startIntelligence = startIntelligence
        this._startCriticalStrike = startCriticalStrike
    }
    
}