import { Component, Output, EventEmitter, OnInit, AfterViewInit } from '@angular/core';
declare global {
  interface Window {
    google: any;
  }
}
@Component({
  selector: 'app-google-signin',
  templateUrl: './google-signin.component.html',
  styleUrls: ['./google-signin.component.scss']
})

export class GoogleSigninComponent implements OnInit, AfterViewInit {
  ngAfterViewInit(): void {

    window['google']['accounts'].id.initialize({
      client_id: '695994817616-sqqne30m6itvklpuc2r5cchkfjmma2sd.apps.googleusercontent.com',
      callback: this.handleCredentialResponse,
    });

    window['google']['accounts'].id.renderButton(document.getElementById('buttonDiv'), {
      theme: 'outline',
      size: 'large',
    });

    window['google']['accounts'].id.prompt();
  }
  handleCredentialResponse(response: any) {
    console.log('Encoded JWT ID token: ' + response.credential);
    // Add your logic to handle the credential response
  }
  ngOnInit(): void {
    
  }
  
}
