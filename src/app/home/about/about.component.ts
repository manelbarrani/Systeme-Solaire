import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Series } from './series';
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgFor,NgIf],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
  translatedSeries: Series[] = [
    {
      title: 'بنات الشمس مدبلج',
      imageUrl: 'https://3isk.biz/wp-content/uploads/2024/11/vbnh.jpg',
      rating: 5,
      episodes: 147,
      showDetailsFlag: false
    },
    {
      title: 'موسم الكرز مدبلج',
      imageUrl: 'https://th.bing.com/th/id/R.09425523030d525f14bbf1308e578060?rik=T8SYPJVFKGec5g&riu=http%3a%2f%2fresimci.org%2fimages%2f2014%2f10%2f19%2f28393669a5af10b6cf129109398048d6.png&ehk=pppuYgN2oH7dfBLvM%2f%2fdwG6p8lajbWXFG%2bJQPAzMqGk%3d&risl=&pid=ImgRaw&r=0',
      rating: 4,
      episodes: 162,
      showDetailsFlag: false
    },
    {
      title: 'حكاية بودروم مدبلج',
      imageUrl: 'https://4.bp.blogspot.com/-KNYxlbDuFFc/V8P99kS1oXI/AAAAAAAAByg/qzsVxE-vrosv_iICMpJFDKG377PzoOePgCLcB/s1600/0_001.png',
      rating: 3,
      episodes: 94,
      showDetailsFlag: false
    },
    {
      title: 'الطبقة المخملية مدبلج',
      imageUrl: 'https://x.3seq.com/wp-content/uploads/2022/07/14764176116015835.jpg',
      rating: 3,
      episodes: 73,
      showDetailsFlag: false
    },
    {
      title: 'مد وجزر مدبلج',
      imageUrl: 'https://www.3isktv.com/wp-content/uploads/2024/08/Medcezir.jpg',
      rating: 3,
      episodes: 94,
      showDetailsFlag: false
    },
    {
      title: ' الدخيل مدبلج',
      imageUrl: 'https://3isk.biz/wp-content/uploads/2020/08/6-23.jpg',
      rating: 5,
      episodes: 84,
      showDetailsFlag: false
    },
    {
      title: ' الفناء مدبلج',
      imageUrl: 'https://3isk.biz/wp-content/uploads/2020/06/5IMRB3qgLawUOboRtMWozHpuxd0.jpg',
      rating:4,
      episodes:124,
      showDetailsFlag: false
    },
    {
      title: ' حلو ومر مدبلج',
      imageUrl: 'https://3isk.biz/wp-content/uploads/2020/06/2-2.jpg',
      rating: 5,
      episodes: 54,
      showDetailsFlag: false
    },
    {
      title: '   الانتقام مدبلج',
      imageUrl: 'https://3isk.biz/wp-content/uploads/2020/08/3-41.jpg',
      rating: 3,
      episodes: 63,
      showDetailsFlag: false
    },
    {
      title: '   العهد مدبلج',
      imageUrl: 'https://3isk.biz/wp-content/uploads/2021/01/unnamed.jpg',
      rating: 5,
      episodes:99,
      showDetailsFlag: false
    },
    {
      title: '   اخوتي مدبلج',
      imageUrl: 'https://3isk.biz/wp-content/uploads/2021/09/050-1823.jpg',
      rating: 4,
      episodes: 91,
      showDetailsFlag: false
    },
    {
      title: 'الغراب مدبلج  ',
      imageUrl: 'https://3isk.biz/wp-content/uploads/2020/08/ghorab.jpg',
      rating: 3,
      episodes: 94,
      showDetailsFlag: false
    },
    {
      title: 'ثلاثة قروش مدبلج  ',
      imageUrl: 'https://3isk.biz/wp-content/uploads/2022/01/AM001391_PTT113224673-scaled-1.jpg',
      rating:4,
      episodes:109,
      showDetailsFlag: false
    },
    {
      title: ' عشق منطق انتقام مدبلج',
      imageUrl: 'https://3isk.biz/wp-content/uploads/2021/08/98742.jpg',
      rating: 3,
      episodes: 94,
      showDetailsFlag: false
    },
    
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
