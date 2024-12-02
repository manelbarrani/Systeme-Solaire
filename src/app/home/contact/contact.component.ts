import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Series } from './series';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NgFor,NgIf],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
  translatedSeries: Series[] = [
    {
      title: 'Kayip',
      imageUrl: 'https://m.media-amazon.com/images/M/MV5BMTE3ZDA5ZWQtYzA4OC00MzEzLWFkMTctMDYwYjY0MTY2YWE5XkEyXkFqcGc@._V1_.jpg',
      rating: 5,
      episodes: 20,
      showDetailsFlag: false
    },
    {
      title: 'Bambaşka Biri',
      imageUrl: 'https://es.web.img3.acsta.net/pictures/23/09/12/17/02/5561969.jpg',
      rating: 3,
      episodes: 62,
      showDetailsFlag: false
    },
    {
      title: 'Aile',
      imageUrl: 'https://skolko-serij.ru/wp-content/uploads/2023/04/image-181.png',
      rating: 4,
      episodes: 34,
      showDetailsFlag: false
    }, 
     {
      title: 'Aşk Laftan Anlamaz',
      imageUrl: 'https://th.bing.com/th/id/R.72f707ab8e75244fcbfa490e40351870?rik=%2fvSReXpotTrm0g&pid=ImgRaw&r=0',
      rating: 4,
      episodes: 59,
      showDetailsFlag: false
    },    {
      title: 'Çukur',
      imageUrl: 'https://th.bing.com/th/id/R.f55e0db8df4a8b43afbf648002a329a0?rik=I38mdQUcrzA43Q&riu=http%3a%2f%2ftr.web.img2.acsta.net%2fpictures%2f17%2f10%2f12%2f16%2f08%2f0027536.jpg&ehk=oMbV0MAeoUiMubWRH389sKIi9ZFNMZTLUOk1ydilUUc%3d&risl=&pid=ImgRaw&r=0',
      rating: 5,
      episodes: 61,
      showDetailsFlag: false
    },
    {
      title: 'Shahmeran',
      imageUrl: 'https://th.bing.com/th/id/OIP.whr3C0HVm0AUzuaR4v-UMQHaLH?rs=1&pid=ImgDetMain',
      rating: 3,
      episodes: 24,
      showDetailsFlag: false
    },
    {
      title: 'Ramo ',
      imageUrl: 'https://m.media-amazon.com/images/M/MV5BY2U5ODAwY2EtNjdlMC00MTUwLTlkOTgtZjRlZWY1YWY0Y2I0XkEyXkFqcGdeQXVyNDg4MjkzNDk@._V1_.jpg',
      rating: 5,
      episodes: 53,
      showDetailsFlag: false
    },
    {
      title: 'Maraşlı',
      imageUrl: 'https://th.bing.com/th/id/R.6988b766c16d93d080aac37adfcd0e80?rik=C6o00mfFKmK93A&pid=ImgRaw&r=0',
      rating: 3,
      episodes: 29,
      showDetailsFlag: false
    },
    {
      title: 'Zemheri',
      imageUrl: 'https://1.bp.blogspot.com/-Y9FR1n_JQRQ/YCBfiH1gfYI/AAAAAAAAAIc/kFQiUPqRcDg1N4ZqdiZfHjtDJRUtShpPgCLcBGAsYHQ/s0/d9fe60182fea91f45cee41e3659c6831.jpg',
      rating: 2,
      episodes: 18,
      showDetailsFlag: false
    },
    {
      title: 'Zeytin Ağacı',
      imageUrl: 'https://artworks.thetvdb.com/banners/v4/series/421634/posters/62dafc98a71d4.jpg',
      rating: 4,
      episodes: 21,
      showDetailsFlag: false
    },
    {
      title: 'Sakla Beni',
      imageUrl: 'https://th.bing.com/th/id/OIP.EH_4mkDu0IUyEjx-hEhw2wHaKX?rs=1&pid=ImgDetMain',
      rating: 3,
      episodes: 24,
      showDetailsFlag: false
    },
    {
      title: 'Şahane Hayatım',
      imageUrl: 'https://m.media-amazon.com/images/M/MV5BZmQ0NzVkZDUtNGU4My00ZmRkLWJjMTktMzc0ZmE2ZTBiYjIwXkEyXkFqcGdeQXVyMTI4NTc5ODc5._V1_.jpg',
      rating: 3,
      episodes: 74,
      showDetailsFlag: false
    },
    {
      title: 'Aldatmak',
      imageUrl: 'https://iaysr.tmgrup.com.tr/d719ed/0/0/0/0/0/0?u=https://iysr.tmgrup.com.tr/2023/12/01/atv-birincilige-devam-ediyor-1701421368949.jpg&mw=780',
      rating: 4,
      episodes: 44,
      showDetailsFlag: false
    },
    {
      title: 'Kendi Düşen Ağlamaz',
      imageUrl: 'https://tr.web.img3.acsta.net/pictures/23/06/20/00/09/1273668.jpg',
      rating: 3,
      episodes: 14,
      showDetailsFlag: false
    },
    {
      title: 'Safir ',
      imageUrl: 'https://th.bing.com/th/id/OIP.fREvwlO9yZVgdlmamGn4kAHaLH?rs=1&pid=ImgDetMain',
      rating: 4,
      episodes: 54,
      showDetailsFlag: false
    },
    {
      title: 'Kuruluş: Osman',
      imageUrl: 'https://i.pinimg.com/originals/05/59/56/05595635a16f513fd89d0adafb7be9d5.jpg',
      rating: 5,
      episodes: 88,
      showDetailsFlag: false
    },
    {
      title: 'Yargi',
      imageUrl: 'https://th.bing.com/th/id/OIP._Baj8O0-H455dldoqM8SBAHaKd?rs=1&pid=ImgDetMain',
      rating: 4,
      episodes: 96,
      showDetailsFlag: false
    },

    {
      title: 'Hercai',
      imageUrl: 'https://img-s2.onedio.com/id-61e6943baacf872c3a89ecc1/rev-0/w-600/h-856/f-jpg/s-d91fe4ce0ff8b346eea3b62d953cf27769d18be1.jpg',
      rating: 5,
      episodes: 73,
      showDetailsFlag: false
    }
  ];

  constructor() {}

  ngOnInit(): void {}

  showDetails(series: Series) {
    series.showDetailsFlag = true;
  }

  hideDetails(series: Series) {
    series.showDetailsFlag = false;
  }

  getStarsArray(rating: number): number[] {
    return new Array(rating);
  }
}
