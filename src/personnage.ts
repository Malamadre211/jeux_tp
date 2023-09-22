import { CharacterType } from "./characterType"

export class Personnage{
    private _name: string
    private _characterType: CharacterType
    private _life: number
    private _startLife: number 
    private _level: number
    private _startLevel: number
    private _experience: number
    private _startExperience: number 
    private _mana: number
    private _startMana: number 
    private _force: number
    private _startForce: number 
    private _speed: number
    private _startSpeed: number 
    private _intelligence: number
    private _startIntelligence: number 
    private _criticalStrike: number 
    private _startCriticalStrike: number 

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
    public get life(): number {
        return this._life
    }
    public set life(value: number) {
        this._life = value
    }

    public get startLife(): number {
        return this._startLife
    }
    public set startLife(value: number) {
        this._startLife = value
    }

    public get level(): number {
        return this._level
    }
    public set level(value: number) {
        this._level = value
    }

    public get startLevel(): number {
        return this._startLevel
    }
    public set startLevel(value: number) {
        this._startLevel = value
    }

    public get experience(): number {
        return this._experience
    }
    public set experience(value: number) {
        this._experience = value
    }

    public get startExperience(): number {
        return this._startExperience
    }
    public set startExperience(value: number) {
        this._startExperience = value
    }

    public get mana(): number {
        return this._mana
    }
    public set mana(value: number) {
        this._mana = value
    }

    public get startMana(): number {
        return this._startMana
    }
    public set startMana(value: number) {
        this._startMana = value
    }

    public get force(): number {
        return this._force
    }
    public set force(value: number) {
        this._force = value
    }

    public get startForce(): number {
        return this._startForce
    }
    public set startForce(value: number) {
        this._startForce = value
    }

    public get speed(): number {
        return this._speed
    }
    public set speed(value: number) {
        this._speed = value
    }

    public get startSpeed(): number {
        return this._startSpeed
    }
    public set startSpeed(value: number) {
        this._startSpeed = value
    }

    public get intelligence(): number {
        return this._intelligence
    }
    public set intelligence(value: number) {
        this._intelligence = value
    }

    public get startIntelligence(): number {
        return this._startIntelligence
    }
    public set startIntelligence(value: number) {
        this._startIntelligence = value
    }

    public get criticalStrike(): number {
        return this._criticalStrike
    }
    public set criticalStrike(value: number) {
        this._criticalStrike = value
    }

    public get startCriticalStrike(): number {
        return this._startCriticalStrike
    }
    public set startCriticalStrike(value: number) {
        this._startCriticalStrike = value
    }

    constructor(
        _name: string,
        _characterType: CharacterType,
        _life: number,
        _startLife: number = 50,
        _level: number,
        _startLevel: number = 1,
        _experience: number,
        _startExperience: number = 0,
        _mana: number,
        _startMana: number = 50,
        _force: number,
        _startForce: number = 10,
        _speed: number,
        _startSpeed: number = 10,
        _intelligence: number,
        _startIntelligence: number = 10,
        _criticalStrike: number,
        _startCriticalStrike: number = 0.02
    ){
        this._name = _name
        this._characterType = _characterType
        this._life = _life
        this._startLife = _startLife
        this._level = _level
        this._startLevel = _startLevel
        this._experience = _experience
        this._startExperience = _startExperience
        this._mana = _mana
        this._startMana = _startMana
        this._force = _force
        this._startForce = _startForce
        this._speed = _speed
        this._startSpeed = _startSpeed
        this._intelligence = _intelligence
        this._startIntelligence = _startIntelligence
        this._criticalStrike = _criticalStrike
        this._startCriticalStrike = _startCriticalStrike
    }
    
}