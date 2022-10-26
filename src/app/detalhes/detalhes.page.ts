import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FilmesService } from '../services/filmes.service';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.page.html',
  styleUrls: ['./detalhes.page.scss'],
})
export class DetalhesPage implements OnInit {

  filme:any = [];
  destaque:any = [];

  constructor(private filmesService: FilmesService) {

   }
  ngOnInit() {
    
  }

  async carregarFilme(ID){
    this.filme  = await this.filmesService.getProductions();
    console.log("filmes carregados", this.filme)

    const [firstKey] = Object.keys(this.filme);
    this.destaque = this.filme[firstKey];

    this.filme.splice(firstKey, 1)
    console.log('firstKey',firstKey)
    console.log('destaque',this.destaque)
    console.log('filmes',this.filme)

  }

}
