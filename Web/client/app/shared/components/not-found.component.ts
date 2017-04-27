import { Component } from '@angular/core'

@Component({
    template: `
		<h1 class="errorMessage">Magic 8 Ball Says<br>'404 Not Found' </h1>
	`,
    styles: [
		`.errorMessage { 
		  margin-top:150px; 
		  font-size: 100px;
		  text-align: center; 
		}`
    ]
})
export class NotFoundComponent { }