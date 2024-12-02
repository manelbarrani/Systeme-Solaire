import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acceuil',
  standalone: true,
  imports: [CommonModule,NgFor],
  templateUrl: './acceuil.component.html',
  styleUrl: './acceuil.component.css'
})
export class AcceuilComponent implements OnInit {
  series = [
    {
      title: 'Yabani',
      episode: 78,
      description: 'A story about family values and traditions.',
      image: 'https://img.dizi.la/uploads/191599/yabani-1080x1920-px.jpg',
    },
    {
      title: 'Deha',
      episode: 10,
      description: 'A thrilling journey of a genius mind.',
      image: 'https://upload.wikimedia.org/wikipedia/tr/8/8b/DehaDizi.jpg',
    },
    {
      title: 'Gizli Bahçe',
      episode: 6,
      description: 'A mysterious story set in a secret garden.',
      image: 'https://m.media-amazon.com/images/M/MV5BNDMyZWVhMWYtNWI1My00ODU2LWExMzktNDA4ZmVkODJjNjdjXkEyXkFqcGc@._V1_.jpg',
    },
    {
      title: 'Bir Gece Masali',
      episode: 13,
      description: 'A mysterious story set in a secret garden.',
      image: 'https://imgsrc.cineserie.com/2024/09/5417616.jpg?ver=1',
    },
    {
      title: 'Teskilat',
      episode: 121,
      description: 'A mysterious story set in a secret garden.',
      image: 'https://imgsrc.cineserie.com/2023/10/3103312.jpg?ver=1',
    },
    {
      title: 'Hudutsuz Sevda',
      episode: 43,
      description: 'A mysterious story set in a secret garden.',
      image: 'https://bancodeseries.com.br/images/posters/34671.jpg',
    },
    {
      title: 'Yali Capkini',
      episode: 85,
      description: 'A mysterious story set in a secret garden.',
      image: 'https://img-s3.onedio.com/id-63288953498a239604c8bc52/rev-0/w-600/h-835/f-jpg/s-833aff7c1499034868cdc5f8cb74d21de3a12ec9.jpg',
    },
    {
      title: 'Siyah Kalp',
      episode: 8,
      description: 'A mysterious story set in a secret garden.',
      image: 'https://img.dizi.la/uploads/179921/siyah-kalp.jpg',
    },
    {
      title: 'Kirli Sepeti',
      episode: 6,
      description: 'A mysterious story set in a secret garden.',
      image: 'https://imgsrc.cineserie.com/2024/10/5695887.jpg?ver=1',
    },
    {
      title: 'Leyla',
      episode: 10,
      description: 'A mysterious story set in a secret garden.',
      image: 'https://arabseed.show/wp-content/uploads/2024/09/wbsnc1D0gyROGp01yXidiBZ7jbp.jpg',
    },
    {
      title: 'Kalpazan',
      episode: 3,
      description: 'A mysterious story set in a secret garden.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG-MQ5ps-3FqKf6CfGSZIm9N58CuPiW-muGIxnk9dsPq4pQFQjP7tJA6hdBOTS4CtX-y4&usqp=CAU',
    },
    {
      title: 'Uzak Sehir',
      episode: 2,
      description: 'A mysterious story set in a secret garden.',
      image: 'https://m.media-amazon.com/images/M/MV5BZGQzZTFmMzEtNmRhYS00YWI3LTk2OTctZjhkMzc1YjVkYTA3XkEyXkFqcGc@._V1_.jpg',
    },
    {
      title: 'Yalan',
      episode: 26,
      description: 'A mysterious story set in a secret garden.',
      image: 'https://m.media-amazon.com/images/M/MV5BZDk3ZGE1ZjEtMTI0NC00NTUyLThiMmMtODY0NTI3NWM5OTAxXkEyXkFqcGc@._V1_.jpg',
    },
    {
      title: 'Marnali',
      episode: 29,
      description: 'A mysterious story set in a secret garden.',
      image: 'https://m.media-amazon.com/images/M/MV5BMjBlMzYxNzctYTI2ZS00M2U2LWEzZjctNWU4MzViNDNkYTMyXkEyXkFqcGc@._V1_.jpg',
    },
    {
      title: 'Sahipsizler',
      episode: 1,
      description: 'A mysterious story set in a secret garden.',
      image: 'https://img.dizi.la/uploads/198699/conversions/1350697-medium.jpg',
    },
    {
      title: 'Esas oglan',
      episode: 11,
      description: 'A mysterious story set in a secret garden.',
      image: 'https://m.media-amazon.com/images/M/MV5BMzg5NzJiYWItNTkzMS00YjUxLTg5YmMtNGMzY2VhMWE4YjZlXkEyXkFqcGc@._V1_.jpg',
    },
    {
      title: 'Esaret',
      episode: 145,
      description: 'A mysterious story set in a secret garden.',
      image: 'https://m.media-amazon.com/images/M/MV5BMWRiZTc1MDUtYjBmMC00MGNkLWFjZWItZGMwNzQ2MDI2ODY0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
    },
    {
      title: 'Inci Taneleri',
      episode: 51,
      description: 'A mysterious story set in a secret garden.',
      image: 'https://m.media-amazon.com/images/M/MV5BODk5ZmEzODItNjg1ZS00NzdiLWFiNTgtMGQ5NGQzYzRiYzM3XkEyXkFqcGc@._V1_.jpg',
    },
  ];

  selectedSerie: any = null;

  constructor() {}

  ngOnInit(): void {}

  showDetails(serie: any): void {
    this.selectedSerie = serie;
  }

 
 
  hideDetails(): void { this.selectedSerie = null; }
}
