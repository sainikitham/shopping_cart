import { Component, OnInit } from '@angular/core';
import { StorageServiceService } from '../shared/storage-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private _StorageServiceService: StorageServiceService) { }

  ngOnInit() {
  }
  onsave() {
    this._StorageServiceService.onsavedata().subscribe(
      (data) => {
       console.log(data);
      }
    );
  }
  onfetch() {
    this._StorageServiceService.onfetchdata();
  }
}
