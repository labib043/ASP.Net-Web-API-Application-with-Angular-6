export class Player{

    PlayerId? : number;
    PlayerName? : string ;
    Image? : string ;
    IsAvailable? : boolean;
    BirthDay : Date;
    TeamId? : number;
    TeamName? : string;
    constructor(
    _PlayerId? : number,
    _PlayerName? : string ,
    _Image? : string ,
    _IsAvailable? : boolean,
    _BirthDay?:Date ,
    _TeamId? : number,
    _TeamName? : string
    ){

       this.PlayerId = _PlayerId;
       this.PlayerName = _PlayerName;
       this.Image =_Image;
       this.IsAvailable =_IsAvailable;
       this.BirthDay = _BirthDay;
       this.TeamId = _TeamId;
       this.TeamName = _TeamName;

          
    }

   
}