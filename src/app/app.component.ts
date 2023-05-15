import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  array=[1,2,3,4,5,6,7,8]
  teste:string= 'testeConteudo';

}
