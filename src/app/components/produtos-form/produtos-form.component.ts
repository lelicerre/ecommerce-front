import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {CommonModule, NgForOf, NgIf} from '@angular/common';
import {Produto, ProdutoService} from '../service/produto.service';
import {Departamento, DepartamentoService} from '../service/departamento.service';

@Component({
  selector: 'app-produtos-form-form',
  imports: [
    ReactiveFormsModule,
    NgForOf,
    NgIf,
    CommonModule
  ],
  templateUrl: './produtos-form.component.html',
  styleUrl: './produtos-form.component.scss'
})
export class ProdutosFormComponent implements OnInit {
  produtoForm!: FormGroup;
  public departamentos: Departamento[] = [];
  public mensagem: string= 'Produto salvo com sucesso!';
  public salvo: boolean = false;
  constructor(private fb: FormBuilder,
              private produtoService: ProdutoService,
              private departamentoService: DepartamentoService) {
  }

  ngOnInit(): void {
    this.produtoForm = this.fb.group({
      code: ['', {validators: [Validators.required], nonNullable: true}],
      description: ['', {validators: [Validators.required], nonNullable: true}],
      department: ['', {validators: [Validators.required], nonNullable: true}],
      price: [null, {validators: [Validators.required], nonNullable: true}],
      status: this.fb.control(true, {nonNullable: true})

    });
    this.departamentoService.listar().subscribe(departamentos => {
      this.departamentos = departamentos;
    })
  }

  public onSubmit(): void {
    if (this.produtoForm.valid) {
      this.salvo = true;
      const produto: Produto = this.produtoForm.value;
      this.produtoService.salvar(produto).subscribe(produto => {
        setTimeout(() => this.salvo = false, 3000)
        this.produtoForm.reset();
      });
    } else {
      this.produtoForm.markAllAsTouched();
    }
  }
}
