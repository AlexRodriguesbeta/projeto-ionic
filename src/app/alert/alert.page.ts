import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  constructor(private alertCtrl : AlertController) { }

  ngOnInit() {
  }

  async ExibeAlertSimples(){
    let alert = await this.alertCtrl.create({
      header : "Ooops",
      subHeader : "Algo deu errado...",
      message: "Erro ao executar o procedimento. Procure o <b>Administrador</b> da aplicação.",
      buttons : [
        "Voltar"
      ]
    });
    await alert.present(); 
  }

  async ExibeAlertBotoes(){
    let alert = await this.alertCtrl.create({
      header : "Confirmação",
      message: "Você confirma a sua escolha?",
      buttons : [
        "Sim",
        "Não",
        "Cancelar"
      ]
    });
    await alert.present(); 
  }

  async ExibeConfirmacao(){
    let alert = await this.alertCtrl.create({
      header : "Confirmação!",
      message: "Deseja cancelar a operação?",
      buttons : [
       {
         text : "Cancelar",
         cssClass : "secundary", 
         handler: ()=>{
           console.log("Pagamento cancelado!"); 
         } 
       },
       {
        text : "Confimar",
        cssClass : "secundary", 
        handler: ()=>{
          console.log("Pagamento confirmado!"); 
        } 
      }
      ]
    });
    await alert.present(); 
  }

  async ExibeAlertPrompt(){
    let alert = await this.alertCtrl.create({
      header : "Acesso restrito!",
      inputs : [
        {
          name : "login",
          type : "text",
          placeholder : "Informe seu usuário aqui..."
        },
        {
          name : "senha",
          type : "password",
          placeholder : "Informe sua senha aqui..."
        }
      ], 
      buttons : [
       {
         text : "Cancelar",
         cssClass : "secundary", 
         handler: ()=>{
           console.log("Aceso negado!"); 
         } 
       },
       {
        text : "Entrar",
        cssClass : "secundary", 
        handler: ()=>{
          console.log("Logado com sucesso!"); 
        } 
      },
      {
        text : "Cadastrar",
        cssClass : "secundary", 
        handler: (data)=>{
          console.log("Usuário cadastrado com sucesso!", data); 
        } 
      }
    ]
    });
    await alert.present(); 
  }

  async ExibeAlertRadio(){
    let alert = await this.alertCtrl.create({
      header : "Escolha o sexo...",
      message: "Escolha o sexo nas opções abaixo:",
      inputs: [
        {
          name : "sexoM",
          type : "radio",
          label: "Masculino",
          value: "valueMasculino", 
          checked: true
        },
        {
          name : "sexoF",
          type : "radio",
          label: "Feminino",
          value: "valueFeminino"
        }

      ],

      buttons : [
       {
         text : "Cancelar",
         cssClass : "secundary", 
         handler: ()=>{
           console.log("Cancelado"); 
         } 
       },
       {
        text : "Ok",
        cssClass : "secundary", 
        handler: (data)=>{
          console.log("Confirmado", data); 
        } 
      }
      ]
    });
    await alert.present(); 
  }

  async ExibeAlertCheckBox(){
    let alert = await this.alertCtrl.create({
      header : "Escolha uma opção:",
      inputs: [
        {
          name : "opcao1",
          type : "checkbox",
          label: "Opção 1",
          value: "value1", 
          checked: true
        },
        {
          name : "opcao2",
          type : "checkbox",
          label: "Opção 2",
          value: "value2"
        },
        {
          name : "opcao3",
          type : "checkbox",
          label: "Opção 3",
          value: "value3"
        }

      ],

      buttons : [
       {
         text : "Cancelar",
         cssClass : "secundary", 
         handler: ()=>{
           console.log("Cancelado"); 
         } 
       },
       {
        text : "Ok",
        cssClass : "secundary", 
        handler: (data)=>{
          console.log("Confirmado", data); 
        } 
      }
      ]
    });
    await alert.present(); 
  }


}

