<?php
define('HOST', 'us-cdbr-east-06.cleardb.net');
define('USUARIO', 'be4d18b120edd7');
define('SENHA', '93e9678e');
define('DB', 'heroku_7f18a21482299d8');

$conexao = mysqli_connect(HOST, USUARIO, SENHA, DB) or die ('Não foi possível conectar');