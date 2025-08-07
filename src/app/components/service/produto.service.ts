import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';

export interface Produto {
  id: string;
  code: string;
  description: string;
  department: string;
  status: boolean;
  price: number;
}

export interface Page<T> {
  content: T[];
  totalElements: number;
  totalPages: number;
  number: number;
  size: number;
  last: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {
  }

  public listar(page: number, size = 10): Observable<Page<Produto>> {
    const params = new HttpParams()
      .set('page', page)
      .set('size', size);
    return this.http.get<Page<Produto>>(`${this.apiUrl}/produtos`, {params});
  }

  public atualizar(produto: Produto): Observable<Produto> {
    return this.http.put<Produto>(`${this.apiUrl}/produtos/${produto.id}`, produto);
  }

  public deletar(id: string): Observable<Produto> {
    return this.http.delete<Produto>(`${this.apiUrl}/produtos/${id}`);
  }

  public salvar(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(`${this.apiUrl}/produtos`, produto);

  }
}
