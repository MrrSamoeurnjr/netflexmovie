import { Component , OnInit} from '@angular/core';
import { MovieApiServiceService } from '../../service/movie-api-service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponents implements OnInit{
  constructor(private service: MovieApiServiceService){};
  bannerResult:any = []
  trendingResult:any = []
  actionMovieResult:any=[]
  adventureMovieResult:any=[]
  animationMovieResult:any=[]
  comedyMovieResult:any=[]
  documenttaryMovieResult:any=[]
  sciencefictionMovieResult:any=[]
  thrillerMovieResult:any=[]
  ngOnInit(): void {
    this.bannerData();
    this.trendingData();
    this.actionMovie();
    this.adventureMovie();
    this.animationMovie();
    this.comedyMovie();
    this.documentarryMovie();
    this.sciencefictionMovie();
    this.thrillerMovie();
  }
  bannerData()
  {
    this.service.bannerApiData().subscribe((result) => {
      console.log(result,'bannerresult#');
      this.bannerResult = result.results;
    })
  }
  trendingData()
  {
    this.service.trendingMovieApiData().subscribe((result) => {
      console.log(result,'trendingresult#');
      this.trendingResult = result.results;
    })
  }
  actionMovie()
  {
    this.service.fetchActionMovies().subscribe((result) => {
      console.log(result , "actionmovieresult#")
      this.actionMovieResult = result.results;
    })
  }
  adventureMovie()
  {
    this.service.fetchAdventureMovies().subscribe((result) => {
      console.log(result , "adventuremovieresult#")
      this.adventureMovieResult= result.results;
    })
  }
  animationMovie()
  {
    this.service.fetchAnimationMovies().subscribe((result) => {
      console.log(result , "animationmovieresult#")
      this.animationMovieResult = result.results;
    })
  }
  comedyMovie()
  {
    this.service.fetchComedyMovies().subscribe((result) => {
      console.log(result , "comedymovieresult#")
      this.comedyMovieResult = result.results;
    })
  }
  documentarryMovie()
  {
    this.service.fetchDocumentaryMovies().subscribe((result) => {
      console.log(result , "documenttarrymovieresult#")
      this.documenttaryMovieResult = result.results;
    })
  }
  sciencefictionMovie()
  {
    this.service.fetchScienceFictionMovies().subscribe((result) => {
      console.log(result , "sciencefictionmovieresult#")
      this.sciencefictionMovieResult = result.results;
    })
  }
  thrillerMovie()
  {
    this.service.fetchThrillerMovies().subscribe((result) => {
      console.log(result , "thrillermovieresult#")
      this.thrillerMovieResult = result.results;
    })
  }
}

