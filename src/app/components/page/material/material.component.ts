import { Component } from '@angular/core';
import axios from 'axios';
import {MatTableModule} from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogConfig, MatDialogModule } from '@angular/material/dialog';
import { FormCadastroMaterialComponent } from '../../form-cadastro-material/form-cadastro-material.component';
import { MatIconModule } from '@angular/material/icon';

export interface ListaMaterias {
  cod: number;
  cod_usuario: number;
  data_cadastro: string;
  link_img: string;
  nome: string;
  descricao: string;
  quantidade: number;
  valor: string;
}

const dadosTabelaMaterial: ListaMaterias[] = [];

@Component({
  selector: 'app-material',
  standalone: true,
  imports: [
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    FormCadastroMaterialComponent,
    MatIconModule
  ],
  templateUrl: './material.component.html',
  styleUrl: './material.component.css'
})
export class MaterialComponent {
  displayedColumns: string[] = ['nome', 'descricao', 'quantidade', 'valor'];
  dadosTabela = dadosTabelaMaterial;
  clickedRows = new Set<ListaMaterias>();

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    axios.get('https://project-check-build.vercel.app/api/v1/material/')
      .then((response) => {
        this.dadosTabela = response.data.data;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    this.dialog.open(FormCadastroMaterialComponent,dialogConfig);
  }

}
