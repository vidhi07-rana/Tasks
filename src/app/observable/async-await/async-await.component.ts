import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-async-await',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './async-await.component.html',
  styleUrl: './async-await.component.css'
})
export class AsyncAwaitComponent {
  data: string | null = null;
  error: string | null = null;

private fetchDataFromServer(): Promise<string>{
  return new Promise((resolve, reject)=>{
    setTimeout(()=>
      {
        const success = Math.random() > 0.5;
        if(success)
          {
            resolve("Promise resolve successfully ")
          }else
          {
            reject('Promise Rejected')
          }
      },2000)
  })
}


 async  fetchData()
 {
   this.data = null;       
    this.error = null

 try{
      this.data= await this.fetchDataFromServer();
    }catch (err: any) {
      this.error = err;
    }
  }

}
