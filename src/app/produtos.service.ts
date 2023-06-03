import { Injectable } from '@angular/core';
import { IProduto, produtos } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  /** Atributo */
  produtos: IProduto [] = produtos;

  constructor() { }

  /** Métodos */
  getAll() {
    return this.produtos;
  }

  getOne(produtoId: number) {
    return this.produtos.find(produto => produto.id  == produtoId);

  }
}
