import { Injectable} from '@angular/core';
import { Player } from '../model/Player';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class player
{
      playerList : Player [] = new Array<Player>();
      http:HttpClient;
      baseUrl:string = 'https://localhost:44357';
      constructor(_http:HttpClient)
      {
           this.http = _http;
      }
      getData()
      {
             this.http.get(this.baseUrl+'/api/Players').subscribe( data => {
                this.playerList.length = 0;               
                var  jsonData =  JSON.parse(JSON.stringify(data));
                for(var i = 0 ; i < jsonData.length ; i++)
                {
                    this.playerList.push(new Player(
                        jsonData[i].playerId ,
                        jsonData[i].playerName ,
                        jsonData[i].image ,
                        jsonData[i].isAvailable ,
                        jsonData[i].birthDay ,
                        jsonData[i].teamId ,
                        jsonData[i].teamName ,

                        ));
                }
                console.log('this.teamList');
                console.log(this.playerList);

                localStorage.setItem('data', JSON.stringify(this.playerList));


             });

             
             
      }


      insertData(pi: Player )
      {
             this.http.post(this.baseUrl+'/api/Players',pi).subscribe( data => {             
                var  jsonData =  JSON.parse(JSON.stringify(data));
             });
             
      }
     
      updateData(pi: Player )
      {
             this.http.put(this.baseUrl+'/api/Players/'+pi.PlayerId,pi).subscribe( data => {              
                var  jsonData =  JSON.parse(JSON.stringify(data));
             });
             
      }

      deleteData(pi: Player )
      {
             this.http.delete(this.baseUrl+'/api/Players/'+pi.PlayerId).subscribe( data => {              
                var  jsonData =  JSON.parse(JSON.stringify(data));
             });
             
      }
}