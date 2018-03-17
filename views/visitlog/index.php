<html>
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        
		<link rel="shortcut icon" href="../../img/icon.png"/>
		
        <!-- Styles -->
        <link href="../../css/app-admin.css" rel="stylesheet">
		
        <title>Visit Log - Mpho Kgosisejo</title>
        
        <!-- Scripts -->
        <script type="text/javascript" src="../../js/app.js"></script>
		<script type="text/javascript" src="../../js/wow.min.js"></script>
    </head>
    
    <body lang="en">
	
		<div class="container">
			<?php

				include_once('../../includes/init.php');
				
				DataHandler::getVisitLogs();
				
			?>
		</div>
		
		<!-- Scripts -->
		<script type="text/javascript" src="../../js/request-handler.js"></script>
		
    </body>
</html>