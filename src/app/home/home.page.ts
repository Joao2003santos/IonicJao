import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FilmesService } from '../services/filmes.service';
///import { DetalhesPage } from '../detalhes/detalhes.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  filmes:any = [];
  destaque:any [];

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
// console.log("det",this.destaque);
    this.filmes.splice(firstKey, 1)
    console.log('firstKey',firstKey)
    console.log('destaque',this.destaque)
    console.log('filmes',this.filmes)

  }

  detalhesFilme(id){
    console.log("passou "+id); 
    this.router.navigate(['/detalhes', {id:id}])
    //this.Detalhes.carregarFilme(paramID);
  }
  
  pageDetails() {
    this.router.navigate(['/detalhes'])
  }

  pageHome() {
    this.router.navigate(['/home'])
  }


}