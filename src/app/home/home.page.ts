import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FilmesService } from '../services/filmes.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router,
    private filmesService: FilmesService){

  }

  async ngOnInit(){
    console.log('passou no home');
     this.carregarFilmes();      
  }

  async carregarFilmes(){
    this.filmes  = await this.filmesService.getProductions();
    console.log("filmes carregados", this.filmes)

    const [firstKey] = Object.keys(this.filmes);
    this.destaque = this.filmes[firstKey];

    this.filmes.splice(firstKey, 1)
    console.log('firstKey',firstKey)
    console.log('destaque',this.destaque)
    console.log('filmes',this.filmes)

  }

  pageDetails() {
    this.router.navigate(['/detalhes'])
  }

  pageHome() {
    this.router.navigate(['/home'])
  }


}