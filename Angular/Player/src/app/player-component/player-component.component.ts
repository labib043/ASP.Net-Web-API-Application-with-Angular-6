import { Component, OnInit } from '@angular/core';
import { Player } from '../model/Player';
import { player } from '../service/playerSevices';
import { Team } from '../model/Team';
import { teamSvc } from '../service/teamServices';
@Component({
  selector: 'app-player-component',
  templateUrl: './player-component.component.html',
  styleUrls: ['./player-component.component.css']
})
export class PlayerComponentComponent implements OnInit {
  playerList : Player [] = new Array<Player>();
  playeringe :player;
  playerSve : teamSvc;
  playerForm : Player = new Player();
  teamList : Team [] = new Array<Team>();
  editDate : Date = new Date();
  

  actionType : number ;

  constructor( _player :player , _playerSve : teamSvc ) { 
     this.playeringe = _player;
     this.playerSve = _playerSve;
     this.playerForm.PlayerId = 0;
     this.loadDataTeam();
     

  }

  ngOnInit() {
   
    this.loadData();
    this.editDate = new Date();

  }

  loadDataTeam()
  {
    this.teamList.length = 0;
    localStorage.setItem('data_team', null);
    this.playerSve.getData();
    this.waitForteamResult();
  }

  
   getTeamList():Team[]
   {
      return this.teamList;
   }

   waitForteamResult()
   {      
        var jData =  JSON.parse(localStorage.getItem('data_team'));
        if(!Object.is(jData,null))
        {  
             for(var v =0 ; v < jData.length ; v++ )
             {
                   this.teamList.push(new Team(
                     Number(jData[v].Id) ,  jData[v].TeamName  
                   )); 
             }
             
        }else
        {
            setTimeout(() => {
             this.waitForteamResult();
            }, 1500);
        }
        
   }


   

   loadData()
   {
           this.playerList.length = 0;
           localStorage.setItem('data', null);
           this.playeringe.getData();
           this.waitForResult();
   }
    waitForResult()
    {      
         var jData =  JSON.parse(localStorage.getItem('data'));
         console.log('wait for result...................................');
         console.log(jData);
         if(!Object.is(jData,null))
         {  
              for(var v =0 ; v < jData.length ; v++ )
              {
                    var cDate = new Date(jData[v].BirthDay.toString());
                    console.log('cDate ' + cDate);
                    this.playerList.push(new Player(
                      Number(jData[v].PlayerId) ,
                        jData[v].PlayerName , 
                        jData[v].Image ,
                         jData[v].IsAvailable ,
                          cDate ,
                          jData[v].TeamId , 
                          jData[v].TeamName
                    )); 
              }
              
         }else
         {
             setTimeout(() => {
              this.waitForResult();
             }, 1000);
         }

         console.log('result for the wait');
         console.log(this.playerList);
         
    }

   showInfo() : Player []
   {

    console.log(this.playerList);
      return this.playerList;
   }

   submitInfo(playerForm : Player , actionType : Number)
   {

    console.log('*******************');
     playerForm.BirthDay = this.editDate;
     console.log(playerForm.BirthDay);
     console.log('*******************  adsa****');
     console.log('prodIngredForm');
     console.log(playerForm);
     console.log(actionType);
      if(actionType == 1)
      {
        playerForm.PlayerId = 0;
        this.playeringe.insertData(playerForm);
      }else if(actionType == 2)
      {
         console.log('update');
        this.playeringe.updateData(playerForm);
      }
      else{
      
        this.playeringe.deleteData(playerForm);
      }
     

      setTimeout(() => {

        this.loadData();
        
      }, 1500);
      
   }

   upload(event)
   {
        var file = event.target.files[0];
        var filereader = new FileReader();
        filereader.onload = function()
        {
            var image64string = filereader.result.toString();
            console.log(image64string);
            localStorage.setItem("Image",image64string);        
        }
        filereader.readAsDataURL(file);
        this.playerForm.Image =  localStorage.getItem("Image");  
   }

   updateEntity(item : Player)
   {
    
    this.playerForm.PlayerId = item.PlayerId;
    this.playerForm.PlayerName = item.PlayerName;
    this.playerForm.Image = item.Image;
    this.playerForm.IsAvailable = item.IsAvailable;
    this.editDate =  item.BirthDay ;
    this.playerForm.BirthDay =   item.BirthDay;
    this.playerForm.TeamId = item.TeamId;
    this.actionType = 2;
    
    
   }

   deleteEntity(item : Player)
   {
    this.playerForm.PlayerId = item.PlayerId;
    this.playerForm.PlayerName = item.PlayerName;
    this.playerForm.Image = item.Image;
    this.playerForm.IsAvailable = item.IsAvailable;
    this.editDate =  item.BirthDay ;
    this.playerForm.BirthDay =   item.BirthDay;
    this.playerForm.TeamId = item.TeamId;
    this.actionType = 3;
    
   }
   

}


