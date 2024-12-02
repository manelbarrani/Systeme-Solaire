import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component,OnInit } from '@angular/core';
interface Movie { 
  title: string; imageUrl: string;
   rating: number; duration: string; 
   showDetailsFlag: boolean;}
@Component({
  selector: 'app-series',
  standalone: true,
  imports: [NgFor,NgIf],
  templateUrl: './series.component.html',
  styleUrl: './series.component.css'
})
export class SeriesComponent implements OnInit {
  movies: Movie[] = [
  { title: ' 2024 Mavi Magara ',
    imageUrl: 'https://3isk.biz/wp-content/uploads/2024/10/yT7VYxdyAH7SCBnCwPBY2NqGDQr.jpg',
    rating: 3,
    duration: '2h 30m',
    showDetailsFlag: false },
 {
   title: 'Ruyanda Gorursun 2023',
   imageUrl: 'https://m.media-amazon.com/images/M/MV5BNDhkMDlhMTMtNzA3ZC00YjQyLWJiOTktNDkwMDI5Yzk2YmFiXkEyXkFqcGc@._V1_.jpg',
   rating: 4, duration: '1h 45m',
   showDetailsFlag: false },

 {
   title: 'Obsesyon 2023 ',
   imageUrl: 'https://m.media-amazon.com/images/M/MV5BMWNiYTRlY2ItMWI3MS00YzdlLWIwNDQtZjY0ZWViZjEyNmJiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
   rating: 5,
   duration: '2h 15m',
   showDetailsFlag: false },
 {
   title: 'The Art of Love 2024',
   imageUrl: 'https://www.justwatch.com/images/poster/312596066/s718/the-art-of-love-2024.jpg',
   rating: 4, duration: '1h 51m',
   showDetailsFlag: false },
   {
    title: 'Benim Dunyam 2013',
    imageUrl: 'https://img05.imgsinemalar.com/images/afis_buyuk/b/benim-dunyam-1660923445.jpg',
    rating: 5, duration: '2h 25m',
    showDetailsFlag: false },
    {
      title: 'Siccin 6 2019',
      imageUrl: 'https://m.media-amazon.com/images/M/MV5BNGRiM2RjODktNzc5NS00MjY2LTgzYTQtZGNmZGJiMDI0N2I5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
      rating: 5, duration: '3h 05m',
      showDetailsFlag: false },
      {
        title: 'Uc Harfliler Adak 2019',
        imageUrl: 'https://m.media-amazon.com/images/M/MV5BYjk1MWY4YjAtMjM5Ni00MjAxLWFiMDQtNmMxMzE0NDdmYmJlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
        rating: 4, duration: '3h 45m',
        showDetailsFlag: false },
        {
          title: '2023 Bihter',
          imageUrl: 'https://m.media-amazon.com/images/M/MV5BMzM5YTE1NDQtMDg0My00MTlmLTgwMjMtOGQyYzVjYmM3ZWQ1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
          rating: 5, duration: '1h 45m',
          showDetailsFlag: false },
          {
            title: 'Kardes Takimi 2024',
            imageUrl: 'https://m.media-amazon.com/images/M/MV5BOTZiYjIzMzMtOWY2NC00OWMyLWFiNjktNjBjMTBhNjU4NjZjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
            rating: 3, duration: '1h 56m',
            showDetailsFlag: false },
            {
              title: ' 2: Var mi, Yok mu 2024',
              imageUrl: 'https://m.media-amazon.com/images/M/MV5BNWM3YmMyYWItYTBmYy00Y2RjLTlkYTQtMzI4ODcyZjEwYmEyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
              rating: 4, duration: '1h 56m',
              showDetailsFlag: false },
              {
                title: 'النداء الاخير الى اسطنبول 2023 ',
                imageUrl: 'https://3isk.biz/wp-content/uploads/2023/11/MV5BMzZlMTI1NzctYTg3OS00OTdkLThkODUtYzZjNzNiZDc5NWI3XkEyXkFqcGdeQXVyMTMzNzIyNDc1._V1_FMjpg_UX1000_.jpg',
                rating: 5, duration: '2h 56m',
                showDetailsFlag: false },
                {
                  title: 'اساليب الحب  2023',
                  imageUrl: 'https://cimalina.live/wp-content/uploads/2022/01/MV5BMWFhMzFjYjktMmJkNy00YTVmLWI1ZWUtYjI3MTgxZmYyNzZiXkEyXkFqcGdeQXVyMTEyMDQwNDQw._V1_FMjpg_UX1000_-.jpg_UY1200-.jpg',
                  rating: 3, duration: '1h 56m',
                 showDetailsFlag: false },
                 {
                  title: ' Siccin 5 2018',
                  imageUrl: 'https://m.media-amazon.com/images/M/MV5BNjk0NDliZWMtYjljOS00N2ZkLTlkNGEtNTcxNmFkYTViY2Y1XkEyXkFqcGc@._V1_.jpg',
                  rating: 5, duration: '2h 39m',
                 showDetailsFlag: false },
                 {
                  title: '  Mihrez 2 Cin Padisahı 2022',
                  imageUrl: 'https://m.media-amazon.com/images/M/MV5BYThlZDU2ODktZmYzMS00ZDU4LTgwNjktODkxNGFhZjJhZWM0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
                  rating: 5, duration: '2h 56m',
                 showDetailsFlag: false },
                 {
                  title: 'Siccin 4 2017',
                  imageUrl: 'https://play-lh.googleusercontent.com/GI_nO2AHgci6vsWEKz2HvEelojIAkfONZ63NggRgBsfw4v2wHib4Nsk3ULLZJKVlYHZBPNIC790SnueLeQ',
                  rating: 5, duration: '2h 56m',
                 showDetailsFlag: false },
                 {
                  title: 'Siccin 3 2016',
                  imageUrl: 'https://m.media-amazon.com/images/M/MV5BZTZlOGU5NmItNzY1Yy00M2MwLTkyNzgtODAzMzc4YjdhM2ExXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
                  rating: 5, duration: '3h 06m',
                 showDetailsFlag: false },

  ];
   selectedMovie: Movie | null = null;
   constructor() {} 
   ngOnInit(): void {}
   showDetails(movie: Movie): void { 
   this.selectedMovie = movie;
   }
   hideDetails(): void {
    this.selectedMovie = null; 
   }
   getStarsArray(rating: number): number[]{
   return new Array(rating);
  }

}
