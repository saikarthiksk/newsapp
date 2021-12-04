import { ApiService } from './../api.service';
import { Component, ViewChild } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { IonContent, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
@ViewChild('pageTop') pageTop: IonContent;
  private loading;
  isShown=true;
  public topic:any;
  date = new Date().toISOString().slice(0, 10)
  public newsData:any;
  constructor(public api:ApiService,
    private router:Router,
    private loadingCtrl:LoadingController) {}


    function(event) {
      const bottomPosition = event.target.clientHeight + event.detail.scrollTop;
        const screenSize = event.target.clientHeight;
        this.isShown = screenSize - bottomPosition >= -10;
     }

     scrollToTop() {
      this.pageTop.scrollToTop(400);
    }

  search(){
    this.loadingCtrl.create({message:'Please Wait!'}).then((overlay)=>{
      this.loading=overlay;
      this.loading.present();
    });
    setTimeout(()=>{
      this.loading.dismiss();

    },1500);
    this.api.getNews(this.topic,this.date).subscribe(result=>{
      console.log(result);
      this.newsData=result['articles'];
    });
  }
  nextPage(item){
    this.loadingCtrl.create({message:'Please Wait!'}).then((overlay)=>{
      this.loading=overlay;
      this.loading.present();
    });
    setTimeout(()=>{
    this.loading.dismiss();
    this.router.navigate(["/details"],objToSend);
    },400);
    let objToSend: NavigationExtras = {
      state: {  article:item}
  };
  }


}
