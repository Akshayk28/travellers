import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  cars = [
    { id: '1', name: 'Toyota Innova Crysta', img: '../../assets/img/Toyota Innova Crysta.jpg', seats: '6' },
    { id: '2', name: 'Toyota Innova', img: '../../assets/img/Toyota Innova.jpg', seats: '6' },
    { id: '3', name: 'Etios', img: '../../assets/img/Etios.jpg', seats: '5' },
    { id: '4', name: 'Dzire', img: '../../assets/img/Dzire.jpg', seats: '5' },
    { id: '5', name: 'Baleno', img: '../../assets/img/Baleno.jpg', seats: '5' },
    { id: '6', name: 'Ertiga', img: '../../assets/img/Ertiga.jpg', seats: '5' },
    { id: '7', name: 'Tempo Travelar', img: '../../assets/img/Tempo Travelar.jpg', seats: '17' },
    { id: '8', name: 'Exetra', img: '../../assets/img/Exetra.jpg', seats: '5' },
    // { name: 'Shirdi', img: '../../assets/img/Shirdi.jpg' },
  ]

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient) { }

  ngOnInit() {

  }

  openPleaces() {
    this.router.navigate(['places']);
  }

  BookInquiry(carname: any) {
    this.http.get('http://web.whatsapp.com/send', {
      params: {
        phone: '8378889449',
        text: 'Hello *We Need ' + carname + '*'
      }
    }).subscribe(data => {
      console.log(data);

    })
    // window.location.href = 'whatsapp://send?text=Hello *We Need ' + carname + '*!&phone=+918378889449';
  }

}
