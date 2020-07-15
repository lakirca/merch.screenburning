import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Intercom } from 'ng-intercom';

@Component({
  selector: 'my-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  public dateNow: Date = new Date();
  public instagram: string = 'https://www.instagram.com/arenamerchandising/';
  public facebook: string = 'https://www.facebook.com/arenamerchandising/';
  public google: string = 'https://goo.gl/maps/KpJ25XSrKoL2';

  public showManuf: boolean = false;
  public showAbout: boolean = false;

  constructor(private router: Router, public intercom: Intercom) {}

  public open(url) {
    window.open(`${url}`, '_blank');
  }

  navigate(path: string, prepath?: string) {
    if (prepath) {
      this.router.navigate([`/${prepath}/${path}`]);
    } else {
      this.router.navigate([`/${path}`]);
    }
  }

  openChat(chat) {
    chat.intercom.show();
  }

  toggle(nav: string) {
    switch (nav) {
      case 'about':
        if (this.showManuf) {
          this.showManuf = false;
        }
        this.showAbout = !this.showAbout;
        break;
      case 'manuf':
        if (this.showAbout) {
          this.showAbout = false;
        }

        this.showManuf = !this.showManuf;
        break;
    }
  }
}
