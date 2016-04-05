// import the stylesheet. this is necessary so that webpack will compile all the sass into css and then build it into our style.css file
import './../styles/main.scss';

import Backbone from 'backbone';
import $ from 'jquery';


const basicView = Backbone.View.extend({     //backbone comes with views and models. views is setting us up to create html, extend adds the html functionality
		initialize: function(url,linkName){
			this.url = url;
			this.linkName = linkName;

		},

		template: function(){
			return `<a href="${this.url}">$(this.linkName)</a>`
		},
		tagName: 'section',
		render: function(){
			this.el.innerHTML = this.template();
			$('body').append(this.el)
		}
	});


//var viewInPage = new basicView('http://google.com');

var googleLink = new basicView('http://google.com', 'google');
var tiyLink = new basicView('http://tiy.com', 'tiy');

googleLink.render();
tiyLink.render();


console.log(new basicView()); //backbone view is a div 