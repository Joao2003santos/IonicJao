import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FilmesService } from '../services/filmes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.page.html',
  styleUrls: ['./detalhes.page.scss'],
})
export class DetalhesPage implements OnInit {

  filme:any = [];

  constructor(private filmesService: FilmesService,
    private router: ActivatedRoute,
    private rota: Router ) {

   }
  async ngOnInit() {
    this.router.params.subscribe (params => (this.carregarFilme(params['id'])))
  }

  async carregarFilme(id){
    this.filme  = await this.filmesService.getPegarFilme(id);
    const [firstKey] = Object.keys(this.filme);

  }

}
