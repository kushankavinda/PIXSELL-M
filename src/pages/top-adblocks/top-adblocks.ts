import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';


@IonicPage()
@Component({
  selector: 'page-top-adblocks',
  templateUrl: 'top-adblocks.html',
  
})import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';


@IonicPage()
@Component({
  selector: 'page-top-adblocks',
  templateUrl: 'top-adblocks.html',
  
})
export class TopAdblocksPage {
  //ADblocks: Observable<Adblocks[]>; 
 // Records: Observable<Records[]>;
  r;
  ADblocks;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,public afDB:AngularFireDatabase) 
  {  
    /*  this.r=this.afDB.list('Records',ref => ref.orderByChild('progressRate').limitToLast(10)).valueChanges();
      console.log("size of r object : "+Object.keys(this.r).length);
      //use for each loop for get all 'blockID' from r object
     
     this.r.forEach(item => {
      
     for(var i=0;i<10;i++){
        console.log('blockID from record table:', item[i].blockId);
        this.ADblocks= this.afDB.list('Ad-blocks', ref => ref.orderByChild('blockId').equalTo(item[i].blockId)).valueChanges();
        
      } 
   }); */
  //new code
   this.afDB.list('Records', ref => ref.orderByChild('progressRate').limitToLast(9))
   .valueChanges()
   .subscribe(reco => {
     this.r =reco;
     console.log("Records : ", this.r);       
     for (var index = 0; index <reco.length; index++) {
      //  this.getADblocksDetails(this.r[index]['blockId']);
      this.ADblocks= this.afDB.list('Ad-blocks', ref => ref.orderByChild('blockId').equalTo(this.r[index].blockId)).valueChanges();
     }
     console.log(Object.keys(this.r).length);
     console.log(Object.keys(this.ADblocks).length);
     console.log("ablock retrive : ",this.ADblocks);
 });
    
}  
/*getADblocksDetails(id: string) {    
  this.afDB.list('/Ad-blocks', ref => ref.orderByChild('blockId').equalTo(id).limitToLast(1))
    .valueChanges()
    .subscribe(Add => {
      this.ADblocks = Add;
    console.log("records : ", this.ADblocks);
  }); 
 // this.ADblocks= this.afDB.list('Ad-blocks', ref => ref.orderByChild('blockId').equalTo(this.r[id].blockId)).valueChanges();
  
} */

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
