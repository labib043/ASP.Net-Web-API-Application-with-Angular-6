import { Component, OnInit } from '@angular/core';
import { Team } from '../model/Team';
import { teamSvc } from '../service/teamServices';

@Component({
  selector: 'app-team-component',
  templateUrl: './team-component.component.html',
  styleUrls: ['./team-component.component.css']
})
export class TeamComponentComponent implements OnInit {
  teamList : Team [] = new Array<Team>();
  tSvc :teamSvc;
  teamForm : Team = new Team(); 

  actionType : number ;

  constructor(_tSvc :teamSvc) { 
    this.tSvc = _tSvc;
    this.teamForm.Id=0;
  }

  ngOnInit() 
  {
    this.loadData();
  }
  loadData()
   {
           this.teamList.length = 0;
           localStorage.setItem('data_team', null);
           this.tSvc.getData();
           this.waitForResult();
   }

    waitForResult()
    {      
         var jData =  JSON.parse(localStorage.getItem('data_team'));
         console.log('jData');
         console.log(jData);
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
              this.waitForResult();
             }, 1500);
         }
         
    }

   showInfo() : Team []
   {
    console.log('this.teamList');
    console.log(this.teamList);
      return this.teamList;
   }

   submitInfo(teamFrom : Team , actionType : Number)
   {

    console.log("submit info");
        console.log(teamFrom);
        console.log(actionType);
      if(actionType == 1)
      {
        teamFrom.Id =0 ;
        this.tSvc.insertData(teamFrom);
      }else if(actionType == 2)
      {
         console.log('update');
        this.tSvc.updateData(teamFrom);
      }
      else{
      
        this.tSvc.deleteData(teamFrom);
      }
     

      setTimeout(() => {

        this.loadData();
        
      }, 1000);
      
   }

   

   updateEntity(item : Team)
   {
    
    this.teamForm.Id = item.Id;
    this.teamForm.TeamName = item.TeamName;
 
 
    this.actionType = 2;
    
    
   }

   deleteEntity(item : Team)
   {
    this.teamForm.Id = item.Id;
    this.teamForm.TeamName = item.TeamName;
    

    this.actionType = 3;
    
   }
   

}
