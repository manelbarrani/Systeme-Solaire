import { NgFor, NgIf } from '@angular/common';
import { Component,OnInit } from '@angular/core';

interface Channel { 
  name: string;
  imageUrl: string;
  movies: string[];
  series: string[]; }
@Component({
  selector: 'app-tv',
  standalone: true,
  imports: [NgFor,NgIf],
  templateUrl: './tv.component.html',
  styleUrl: './tv.component.css'
})
export class TvComponent implements OnInit {
  channels: Channel[] =
  [ { 
  name: 'Channel 1:ATV',
  imageUrl: 'https://yt3.googleusercontent.com/3TMcmg4iyQB9t20BMakYgcQcqvwsCF8Uf0GGZQ6XntvJmDx_EdELPtlALCW7Eq1sNlR6QZ_X91U=s900-c-k-c0x00ffffff-no-rj',
  movies: ['Siccin', 'mihrez', 'the art of love'],
  series: ['ask laftan anlamaz', 'Maral', 'çukur'] 
  },
 { name: 'Channel 2: TRT1',
 imageUrl: 'https://yt3.googleusercontent.com/BYKdhf9rXyAicCvBapQiD2HFIpKRUmrB5ZsnFVVJmdloEgiyy2Os37r3-4lESixGBXn5YkRN=s900-c-k-c0x00ffffff-no-rj',
 movies: ['benim dunyam', 'Ataturk', 'mavi magara'],
 series: ['Teskilet', 'uzak sehir', 'Esaret','Ruzgarli Tepe'] },

 { name: 'Channel 3: SHOW TV',
 imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWqVb8YV0h646CAkxglsh8ogShVDtAqJXbOg&s',
 movies: ['savash', ' gunayden arkadashlar', 'shahani hayat'],
 series: ['siyah kalp', 'hududsuz sevda', 'Kardeshlerim','Yabani','Gusur ve guzel'] },

 { name: 'Channel 4: NOW TV',
  imageUrl: 'https://cdn6.aptoide.com/imgs/f/b/9/fb9e010a4a9f48d99ca21e05ce8588ce_icon.png',
  movies: ['10days of a curious man', 'Suz', '20min'],
  series: ['Meryam', 'Yalan', 'Esas oglan','alp arslan'] },

  { name: 'Channel 5: FOX TV',
    imageUrl: 'https://img.utdstc.com/icon/89d/1b5/89d1b5e08549ee0ca6fecfd8cbf7d0b5ce8b8068a48c5618646ad29f77a2682a:200',
    movies: ['marnali', 'guzel adam', 'kalp yanlilik'],
    series: ['Sahar', ' gizli masali', 'Karaagaç ','Yali capkin'] },

    { name: 'Channel 6: STAR',
      imageUrl: 'https://img-puhutv.mncdn.com/media/24-11/05/star-logo-1730808964.png',
      movies: ['yandaki oda', 'behlul', 'Layes ve nura'],
      series: ['kismetse olur', 'Leyla', 'Sorgu','kirli sepeti','sandik korkusu'] }

 ];
 selectedChannel: Channel | null = null;
 constructor() {}
 ngOnInit(): void {}
 showDetails(channel: Channel): void {
 this.selectedChannel = channel;
 } hideDetails(): void {
 this.selectedChannel =null;}

}

