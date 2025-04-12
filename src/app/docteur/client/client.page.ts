import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/models/client.model';  // Import from shared location



@Component({
  selector: 'app-client',
  templateUrl: './client.page.html',
  styleUrls: ['./client.page.scss'],
  standalone:false
})
export class ClientPage implements OnInit {
  clients: Client[] = [
    { 
      id: 1, 
      name: 'John Doe', 
      phone: '1234567',
      image: 'assets/images/docter.png' 
    },
    { 
      id: 2, 
      name: 'Jane Smith', 
      phone: ' 9876543',
      image: 'assets/images/docter.png'
    },
    // Add more clients...
  ];
  
  filteredClients: Client[] = [];

  constructor(private router:Router) { }

  ngOnInit() {
    this.initializeClients();
  }

  initializeClients() {
    this.filteredClients = [...this.clients];
  }

  handleSearch(event: any) {
    const term = event.target.value.toLowerCase().trim();
    
    if (!term) {
      this.initializeClients();
      return;
    }

    this.filteredClients = this.clients.filter(client => 
      client.name.toLowerCase().includes(term)
    );
  }

  viewClientDetails(client: Client) {
    this.router.navigate(['/client-personel', client.id], {
      state: { client: client }  // Pass the entire client object
    });
    console.log('Viewing details for:', client.name);
  }
}