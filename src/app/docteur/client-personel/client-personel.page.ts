import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Client } from 'src/app/models/client.model';  // Import from shared location


@Component({
  selector: 'app-client-personel',
  templateUrl: './client-personel.page.html',
  styleUrls: ['./client-personel.page.scss'],
  standalone:false
})
export class ClientPersonelPage implements OnInit {
  client: Client | null = null;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.client = history.state.client;  // Get the passed client object
    console.log('Received client:', this.client);
  }

}
