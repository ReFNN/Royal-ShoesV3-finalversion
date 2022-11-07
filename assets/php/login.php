<?php
include('conexao.php');

if(empty($_POST['usuario']) || empty($_POST('senha')) {
  header('Location: mainpage.html');
  exit();
}