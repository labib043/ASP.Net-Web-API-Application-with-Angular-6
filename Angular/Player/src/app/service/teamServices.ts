import { Injectable} from '@angular/core';
import { Team } from '../model/Team';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class teamSvc
{

    teamList : Team [] = new Array<Team>();
    http:HttpClient;
    baseUrl:string = 'https://localhost:44357';
    constructor(_http:HttpClient)
    {
         this.http = _http;
    }
    getData()
    {
           this.http.get(this.baseUrl+'/api/Teams').subscribe( data => {
              this.teamList.length = 0;               
              var  jsonData =  JSON.parse(JSON.stringify(data));
              for(var i = 0 ; i < jsonData.length ; i++)
              {
               
                  this.teamList.push(new Team(
                      jsonData[i].id ,
                      jsonData[i].teamName 
                      
                      ));
              }
              console.log('this.playerList');
              console.log(this.teamList);

              localStorage.setItem('data_team', JSON.stringify(this.teamList));


           });

           
           
    }


    insertData(p: Team )
    {       console.log('p vak');

           var url=this.baseUrl+'/api/Teams';
           console.log('url');
           console.log(url);
           console.log(p);
           this.http.post(this.baseUrl+'/api/Teams',p).subscribe( data => {             
              var  jsonData =  JSON.parse(JSON.stringify(data));
           });
           
    }
   
    updateData(p: Team )
    {
           this.http.put(this.baseUrl+'/api/Teams/'+p.Id,p).subscribe( data => {              
              var  jsonData =  JSON.parse(JSON.stringify(data));
           });
           
    }

    deleteData(p: Team )
    {
           this.http.delete(this.baseUrl+'/api/Teams/'+p.Id).subscribe( data => {              
              var  jsonData =  JSON.parse(JSON.stringify(data));
           });
           
    }
      


}