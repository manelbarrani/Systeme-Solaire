import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-actor',
  standalone: true,
  imports: [NgFor,NgIf],
  templateUrl: './actor.component.html',
  styleUrl: './actor.component.css'
})
export class ActorComponent {
  actors = [
    {
      name: 'Aras Bulut İynemli:',
      age:34,
      image: 'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/c6ec441b-da71-41fb-9994-76c13d60f49a/width=450/2795715.jpeg',
      series: ['çukur,', 'Deha,','Içerde,','Kogustaki mucize,','Maral'],
    },

    {
      name: 'Burak Özçivit:',
      age:42,
      image: 'https://cdn.sbisiali.com/news/images/747cc861-a550-4f62-8fe8-84fde4c92e10.jpeg',
      series: ['Kurulus Osman ,', 'çalikusu,','Kuçuk sirlar'],
    },
    {
      name: 'Çağatay Ulusoy:',
      age:37,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Cagatay_ulusoy.jpg/800px-Cagatay_ulusoy.jpg',
      series: ['Adini Feriha Koydum ,', 'Gaddar,','Içerde,','Le tailleur,','A true Gentelmen'],
    },
    {
      name: 'Hande Erçel:',
      age:27,
      image: 'https://media.gettyimages.com/id/2153265494/es/foto/cannes-france-hande-er%C3%A7el-attends-the-megalopolis-red-carpet-at-the-77th-annual-cannes-film.jpg?s=612x612&w=gi&k=20&c=vC_dZYjHmOEZBv5Xn7PD5oRWCLtGXLTscFwDlfLNZC0=',
      series: ['Sen çal kapimi,', 'Ask laftzn anlamaz,','Bambaska diri,','Gunesin kizlari,'],
    },
    {
      name: 'Burcu ozberk:',
      age:29,
      image: 'https://image.kanald.com.tr/i/kanald/100/0x0/6412bcc03ab16635cc0fd1c6.jpg',
      series: ['Ask mantik intikam,', 'love trap,','Gunesin kizlari ,','Ruhun duymaz,'],
    },
    {
      name: 'Tuba Büyüküstün:',
      age:35,
      image: 'https://media.gettyimages.com/id/886960398/photo/dubai-united-arab-emirates-tuba-buyukustun-attends-the-opening-night-gala-of-the-14th-annual.jpg?s=612x612&w=gi&k=20&c=rOGWKDLbc50efBmQsw6oSESEqhcWQnGWZGZMjfewDDs=',
      series: ['Cesur ve Guzel,', 'Gonulçelen,','Asi,','The ambassaddor kiz,',],
    },   
    {
      name: 'Engin Altan Düzyatan:',
      age:44,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAAJSj6kj_8yk8zJ19M9pYqmUCbK11QxFYKQ&s',
      series: [' Ertuğrul ,', 'Barbaroslar'],
    }, 

    {
      name: 'Ayca Aysin Turan:',
      age:29,
      image: 'https://m.media-amazon.com/images/M/MV5BY2UxNmU3YTYtNGVjZi00ZjBlLTk2NjMtNmJhMjBkMzYxNmRiXkEyXkFqcGc@._V1_.jpg',
      series: ['Ada Masali,', 'Meryem,','Zemheri,','Karagul,','protecter'],
    },
    {
      name: 'Barış Arduç:',
      age:36,
      image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQBRZy_szj16n1f24a-60ujlCTvMXV0B2sEjliW5eU1aPT6xSA2hlD8P_zoDnoL90rJb2TTo8urDGhcX2-DHD-l-Q',
      series: ['Kiralik Ask ,', 'Kuzgun,','Alpaslan,','çukur,',],
    },
    {
      name: 'fahriye evcen:',
      age:33,
      image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQeOeOp5_4zsuW5t8VvPyWz2YCdyWdcHB3y0z6p9vA1DJjrydLVzRm50dWAfw_vNAXpNG9eozV3qrrd9oWzeNAEUw',
      series: ['yaprak Dokumu ,', 'àalikusu,','Alparslan,']
    },
    {
      name: 'Elçin Sangu:',
      age:31,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1Sb2POUckSWJfecMuknr-dDq_RdAX_kXSI6Ssv55KwUXQpKpeuFO2ALME4StKMOsgWYM0tPfleRR5E8Uj44C4dQ',
      series: ['Kiralik ask,', 'Bros,','çarpisma,','le vampire d istanbul'],
    },

    {
      name: 'Kivanç Tatlituğ:',
      age:37,
      image: 'https://th.bing.com/th/id/OIP.KIujfNTyF21tP6qVAqGKrAHaLH?rs=1&pid=ImgDetMain',
      series: ['Ask memnu ,', 'Aile,','Gesur ve guzel,','kurt seyit ve sure,','çarpisma'],
    },

    {
      name: 'hazal kaya:',
      age:33,
      image: 'https://resizing.flixster.com/Tubx_8NUEFh-Prjjwr7fc0AQOds=/fit-in/352x330/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/660275_v9_aa.jpg',
      series: ['Adini Feriha Koydum ,', 'Maral,','Ask memnu,','Bizim hikaye,'],
    },
    {
      name: 'Kerem Bürsin:',
      age:37,
      image: 'https://i.pinimg.com/236x/e3/4d/41/e34d416664bde32f9df747d306d07e0e.jpg',
      series: ['Sen çal kapimi ,', 'If you love,','Gunesi Beklerken,','la grotte bleue,'],
    },
    {
      name: 'Serenay Sarıkaya:',
      age:32,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlv72o6wR_uwYRtQYWP1lk_0vGl9MzWec4E8B_JZoWXIeGdKRCXvGcLh5a8PhUWbw0Qu7UxyxoxeCJFZ7EQPKJsA',
      series: ['Ayle,', 'Medcezir,','shahmeran,','Lale Devri,'],
    },
    {
      name: 'Burak Deniz:',
      age:35,
      image: 'https://i.pinimg.com/236x/02/67/9c/02679cb6a4efd392c57807efc98a7a97.jpg',
      series: ['Bir gece masali ,', 'ask laftan anlamaz,','bambaska biri,','Marasli,','bizim hikaye'],
    },
    {
      name: 'Alp Navruz:',
      age:33,
      image: 'https://i.pinimg.com/236x/bc/5c/78/bc5c781c5fc63e0167753292a4f2aa06.jpg',
      series: ['Ada masali,', 'Elimi birakma,','fazilet ve kizlari,','yurek çcikmazi,'],
    },
    {
      name: 'Su Burcu:',
      age:21,
      image: 'https://icdn.ensonhaber.com/crop/1200x0/resimler/diger/kok/2024/09/17/66e969469723d425__w1200xh1515.jpg',
      series: ['Kardeslerim,', 'bizim hikaye,','ask yeniden,'],
    },

  ];

  hoveredActor: any = null;
}
