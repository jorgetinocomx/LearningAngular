import { Component } from '@angular/core';

@Component({
	selector : 'my-component',
	template : `<h1> Hello World, this is my first component </h1>
	           <p> An this is title {{title}}`
})

export class MyComponent{

	public title : string;
	public comment : string;
	public year : number;

	constructor() {
		this.title = "Hello word TITLE from my  component";
		this.comment = "This is a comment in my component";
		this.year = 2020;
		console.log("My component was loaded");
		console.log("This is the title ", this.title );
	}
}