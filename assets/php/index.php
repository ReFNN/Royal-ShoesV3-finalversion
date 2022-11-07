<?php

class Usuario
{
    private $pdo;
    public funtion conectar($nome, $host, $usuario, $senha)
    {
     global $pdo;
        try
        {
      pdo= new PDO("mysql:dbname=".$nome.";host=".$host,$usuario,$senha);
     } catch(PDOException $e){
          $msgERRO = $e)->getMessage();
            
      }
   }
  public funtion cadastrar($nome, $sobrenome, $usuario, $senha)
     {
    global $pdo;
    //veificar se ja existe o email cadastrado
    $slq = $pdo->prepare("SELECT id_usuario FROM usuarios Where email = :e");
    $sql->bindValue (":e",$email);
    $sql->execute();
    if($sql->rowCount() > 0 )
    {
      return false; //ja esta cadastrado
    }
    else{
      //caso nao, Cadastrar 
      $sql = $pdo->prepare("INSERT INTO usuarios (nome,sobrenome,email,senha) VALUES(:n :sn :e :s")";
      $sql->bindvalue(":n",$nome);
      $sql->bindvalue(":sn",$sobrenome);
      $sql->bindvalue(":e",$email);
      $sql->bindvalue(":s",$senha);
      $sql->execute();
       return true;

    
      }
  
  public funtion logar($email $senha)
{  
  global $pdo;
 


}
}



      
  
  

