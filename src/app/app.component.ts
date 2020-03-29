// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'forms';
//   rdoEvent={color:'Green'};
//   tval=true;
//   changeVal(){
//     this.tval=false;
//   }

// }




import { Component ,HostListener} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
})
export class AppComponent {
   data:string="";
  
  public txtVal=true;
 

  mouseMove() {
    this.txtVal = false;
    
  }
}
