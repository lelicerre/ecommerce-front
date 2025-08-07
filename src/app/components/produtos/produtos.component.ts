import {Component, OnInit} from '@angular/core';
import {Produto, ProdutoService} from '../service/produto.service';
import {CurrencyPipe, NgClass, NgForOf, NgIf} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-produtos-form',
  templateUrl: './produtos.component.html',
  standalone: true,
  imports: [NgClass, FormsModule, NgForOf, NgIf, CurrencyPipe]
})
export class ProdutosComponent implements OnInit {
  produtos: Produto[] = [];
  produtoEditando: Produto | null = null;

  paginaAtual = 0;
  totalPages = 0;
  lastPage: boolean = false;

  constructor(private departamentoService: ProdutoService) {
  }

  public ngOnInit(): void {
    this.list();
  }

  private list(page = 0) {
    this.departamentoService.listar(page).subscribe(data => {
      this.produtos = data.content;
      this.paginaAtual = data.number
      this.totalPages = data.totalPages
      this.lastPage = data.last
    });
  }

  public proximaPagina(): void {
    this.list(this.paginaAtual += 1);
  }

  public paginaAnterior(): void {
    this.list(this.paginaAtual -= 1);
  }

  public editar(d: Produto): void {
    this.produtoEditando = {...d}; // Clona o objeto
  }

  public salvarEdicao(): void {
    if (this.produtoEditando) {
      debugger
      this.departamentoService.atualizar(this.produtoEditando).subscribe(() => {
        this.produtoEditando = null;
        this.list(this.paginaAtual);
      });
    }
  }

  cancelarEdicao(): void {
    this.produtoEditando = null;
  }

  public deletar(id: string): void {
    this.departamentoService.deletar(id).subscribe(() => {
      this.list(this.paginaAtual);
    });
  }
}
