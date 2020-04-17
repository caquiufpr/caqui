<!doctype html> <!-- Página criada por Vicente Parmigiani em 26/12/2019 às 11h-->
<html lang="pt">
	<head>
		<?php echo "<title>$pagename</title>";?>
		<link rel="icon" type="image/webp" href="files/img/CAQUI.webp" />
		<link rel="stylesheet" type="text/css" href="bin/style.css">
		<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
		<link href="https://fonts.googleapis.com/css?family=Muli:400,700&display=swap&subset=latin-ext" rel="stylesheet">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta name="description" content="Centro Acadêmico de Química da UFPR.">
		<?php echo "<link rel='stylesheet' type='text/css' href='$style'>";?>
	</head>
	<body>
		<nav>
			<i id="sandwich" class="menuIcons material-icons" onclick="openMenu()" md-24 md-light style="vertical-align: middle;padding: 10px; cursor:pointer;">menu</i>
			<img src="files/img/CAQUI.webp"/ class="headerImage" alt="Logo do CAQuí">
			<text id="logo">CAQuí UFPR</text>
			<div id="menuHolder">
				<div id="menu">
					<a class="menu menuSelected" href="./index.html"><i class="menuIcons material-icons" md-24 md-light style="vertical-align: middle;padding: 10px;">home</i>Início</a>
					<a class="menu" href="./updates.html"><i class="menuIcons material-icons" md-24 md-light style="vertical-align: middle;padding: 10px;">people</i>Equipes</a>
					<a class="menu" href="./send.html"><i class="menuIcons material-icons" md-24 md-light style="vertical-align: middle;padding: 10px;">input</i>Enviar Atividade</a>
					<a class="menu" href="./schedule.html"><i class="menuIcons material-icons" md-24 md-light style="vertical-align: middle;padding: 10px;">calendar_today</i>Programação</a>
					<a class="menu" href="./about.html"><i class="menuIcons material-icons" md-24 md-light style="vertical-align: middle;padding: 10px;">info</i>Sobre</a>
				</div>
			</div>
		</nav>
	</body>