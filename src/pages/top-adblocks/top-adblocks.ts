import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Oimport { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';


@IonicPage()
@Component({
  selector: 'page-top-adblocks',
  templateUrl: 'top-adblocks.html',
  
})
export class TopAdblocksPage {
  ADblocks: Observable<Adblocks[]>; 
 // Records: Observable<Records[]>;
  r;

  constructor(public navCtrl: NavController, public navParams: NavParams,public afDB:AngularFireDatabase) 
  {  
      this.r=this.afDB.list('Records',ref => ref.orderByChild('progressRate').limitToLast(10)).valueChanges();
     // console.log("retrive record of Records : "+this.r[0].progressRate);
    
      var x=0;
      //use for each loop for get all 'blockID' from r object
      this.r.forEach(item => {
     // console.log('blockID from record table:', item[0].blockId);
      
      console.log("blockID = "+item);
      console.log(item);
      
    
     this.ADblocks= this.afDB.list('Ad-blocks', ref => ref.orderByChild('blockId').equalTo(item[x].blockId)).valueChanges();
  
     // console.log(this.ADblocks[0].blockId);
      ++x;
    

   });
   
   //this.afDB.list('Ad-blocks', ref => ref.orderByChild('blockId').equalTo('53553c6ba7d23973497fa2c792a1fded')).valueChanges();
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TopAdblocksPage');
  }

}

export interface Adblocks {
  basePrice : number,
  blockId : string|number,
  blockName : string,
  duration : string,
  height : number,
  ownerSetRisk : number,
  siteName : string,
  siteURL : string,
  starts : string,
  width : number
    
}
export interface Records{
  active: boolean,
  availablePx : number,
  blockId: string|number,
  marginPricePx : number,
  pricePerPx : number,
  progressRate : number,
  recordCount : number,
  timeStamp : string
}
bservable';


@IonicPage()
@Component({
  selector: 'page-top-adblocks',
  templateUrl: 'top-adblocks.html',
  
})
export class TopAdblocksPage {
  ADblocks: Observable<Adblocks[]>; 

  constructor(public navCtrl: NavController, public navParams: NavParams,afDB:AngularFireDatabase) 
  {
    this.ADblocks = afDB.list('Ad-blocks', ref => ref.orderByChild('progressRate')
          .limitToLast(10)).valueChanges();
    //this.ADblocks = afDB.list('Ad-blocks').valueChanges();  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TopAdblocksPage');
  }

}

export interface Adblocks {
  availablePx:number,
  basePrice: number,
  blockId: string|number,
  blockName: string,
  currentPrice: number,
  duration: number,
  expectPrice : number,
  numberOfPx: number,
  ownerSetRisk: string,
  progressRate:number,
  siteName: string,
  starts: string
    
}
