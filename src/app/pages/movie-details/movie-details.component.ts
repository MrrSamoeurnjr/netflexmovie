import { Component , OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieApiServiceService } from '../../service/movie-api-service.service';
@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent implements OnInit{
constructor(private service:MovieApiServiceService , private router:ActivatedRoute){}
getMovieDetailResult:any;
getMovieVideosResult:any;
getMovieCastResult:any;
trailerLink: string | undefined
ngOnInit(): void {
    let getParamId = this.router.snapshot.paramMap.get('id');
    console.log(getParamId , 'getparamid#')
    this.getMovie(getParamId);
    this.getVideo(getParamId);
    this.getMovieCast(getParamId);
}
getMovie(id:any)
{
  this.service.getMovieDetails(id).subscribe((result) => {
    console.log(result , 'getmoviedetail#');
    this.getMovieDetailResult = result;
  })
}
// getVideo(id:any)
// {
//   this.service.getMovieVideos(id).subscribe((result) => {
//     console.log(result , 'getMovieVideos#')
//     result.results.forEach((element: any) => {
//         if(element.type == 'Trailer'){
//           this.getMovieCastResult = element.key;
//         }
//     });
//     this.getMovieVideosResult = result;
//   })
// }
getVideo(id: any) {
  this.service.getMovieVideos(id).subscribe((result) => {
    const trailer = result.results.find((video: any) => video.type === 'Trailer');
    if (trailer) {
      this.trailerLink = `https://www.youtube.com/watch?v=${trailer.key}`;
    }
  });
}
getMovieCast(id:any)
{
  this.service.getMovieCast(id).subscribe((result) => {
    console.log(result , 'getMovieCast#');
    this.getMovieCastResult = result.cast;
  })
}
}
