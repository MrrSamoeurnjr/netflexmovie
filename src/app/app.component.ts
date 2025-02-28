import { Component , HostListener} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'netflixmovie';
  navbg: any;
  @HostListener('document:scroll') scrollover()
  {
    console.log(document.body.scrollTop , 'scrolllength#');
    if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0)
    {
      this.navbg = {
        'background-color':'#00000'
      }
    }
    else 
    {
      this.navbg = {}
    }
  }
}
