for (var i = 0; i < blogs.length; i++) {

	let img 	= blogs[i]['image'];
	let tag 	= blogs[i]['tag'];
	let name 	= blogs[i]['name'];
	

	create 		= `
					<li class="blog-items" data-que = '` + i + `' data-tag="` + tag + `">				
						<h4>` + name + `</h4>
					
						<img src="` + img + `">				
					</li>
				  `;
	$(create).appendTo(".blogs");

}