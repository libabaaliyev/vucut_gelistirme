
function import_topbar()
{
	let create = `
					<div class="fixed-top header header-menu">
					  <nav class="navbar navbar-dark bg-dark">
					  	<div class="menu-icon">
					  		<i class="fas fa-bars text-light pt-2 pb-2 lead"></i>
					  	</div>
					  	<div class="float-left back-tab" style="display: none;">
					  		<i class="fas fa-arrow-left text-light pt-2 pb-2 lead"></i>
					  	</div>
					  	<div class="head--title">
					  		<span class="lead pt-2 pb-2 m-0 text-light head-title"></span>
					  	</div>
					  	<div class="helper-icon">
					  		<i class="fas fa-lightbulb pt-2 pb-2 yellow"></i>
					  	</div>

					  	<div class="d-none close-tab">
					  		<i class="fas fa-times-circle yellow"></i>
					  	</div>

					  </nav>
					</div>
				`

	$(create).appendTo("body");

}

function import_menu()
{
	let create = `
					<div class="menu-collapse bg-dark animated">
						<ul id="menu-collapse">
							
						</ul>
					</div>
					<div class="menu-darkness"></div>
				`

	$(create).appendTo("body");

}

function import_helper()
{
	let create = `
					<div class="help desk">
						<div class="desk-body animated">
							<div class="desk-title">
								<h2 class="title-txt lead help-title"></h2>
							</div>
							<div class="desk-info">
								<p class="info-txt lead help-txt"></p>
							</div>

							<div class="desk-footer">				
								<div class="d-block float-left back">
									<i class="fas fa-angle-double-left"></i>
								</div>
								<div class="d-block float-right next">
									<i class="fas fa-angle-double-right"></i>
								</div>
							</div>
						</div>
					</div>
				`

	$(create).appendTo("body");

}