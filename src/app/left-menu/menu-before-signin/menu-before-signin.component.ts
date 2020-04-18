import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-menu-before-signin',
  templateUrl: './menu-before-signin.component.html',
  styleUrls: ['./menu-before-signin.component.scss'],
})
export class MenuBeforeSigninComponent implements OnInit {

  constructor(private router: Router,private menu: MenuController) { }

  ngOnInit() {}
  login() {
    this.router.navigate(['/login']);
    this.menu.close();
  }
}
