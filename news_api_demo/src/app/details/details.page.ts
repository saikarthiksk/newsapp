import { LoadingController } from '@ionic/angular';
import { Article } from './../article';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  article:Article;
  constructor(
    private router:Router
  ) { }

  ngOnInit() {
    
    if( this.router.getCurrentNavigation().extras.state){
      this.article = this.router.getCurrentNavigation().extras.state.article;
    }
    else{
      this.router.navigate(["/home"]);

    }
    

  }

}
