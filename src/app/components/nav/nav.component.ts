import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenavModule, MatDrawer } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';  // importe o MatListModule
import { MatIconModule } from '@angular/material/icon'; // ✅ IMPORTAR ISSO
import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [MatSidenavModule,  MatListModule, MatIconModule, MatButtonModule, RouterModule],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  @ViewChild('drawer') drawer!: MatDrawer;

  constructor() { }

  ngOnInit(): void { }

  toggleDrawer() {
    this.drawer.toggle();
  }
}

