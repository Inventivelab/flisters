import { Component, OnInit } from '@angular/core';
import { ListingsService } from '../listings.service';

@Component({
  selector: 'listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent implements OnInit {
  listings: any = [];

  constructor(private listingsService: ListingsService) { }

  ngOnInit() {
    this.listingsService.getListings()
      .subscribe(listings => {
        this.listings = listings;
      });
  }

}
