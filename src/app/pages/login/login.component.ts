import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  dataForm = {
    login: '',
    senha: '',
    operacao: '008',
    chaveSistema: '356a192b7913b04c54574d18c28d46e6395428ab',
  };

  error_list;
  showError: Boolean = false;

  constructor(private _formBuilder: FormBuilder, private _http: Http, private _router: Router) { }

  ngOnInit() {

    this.form = this._formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required]
    });
  }

  onSubmit() {
    console.log(this.form);

    if (this.form.valid) {

      this.dataForm.login = this.form.get('email').value;
      this.dataForm.senha = this.form.get('password').value;

      this._http
        .post('http://plurieducacional.com.br/homologacao/pluriidapi/webservice.php', JSON.stringify(this.dataForm))
        .map(res => res.json())
        .subscribe(
          rtn => {
            console.log(rtn);
            if (rtn.sucesso) {

              localStorage.setItem('isLoggedin', rtn.informacoesUsuario.token);

              this._router.navigate(['/lesson']);

            } else {

              this.error_list = rtn.erros;
              this.showError = true;

            }
          },
          (error: any) => alert('erro')
        );
    }
  }
}
