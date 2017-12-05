<?php
/**
 * Created by PhpStorm.
 * User: 100me
 * Date: 05/12/2017
 * Time: 19:31
 */
require 'conexao.php';

$connect = connect();

// Get the data
$people = array();
$sql = "SELECT id, nome, primeiro_nome, email, genero FROM usuario";

if($result = mysqli_query($connect,$sql))
{
    $count = mysqli_num_rows($result);

    $cr = 0;
    while($row = mysqli_fetch_assoc($result))
    {
        $people[$cr]['id']    = $row['id'];
        $people[$cr]['nome']  = $row['nome'];
        $people[$cr]['primeiro_nome'] = $row['primeiro_nome'];
        $people[$cr]['email'] = $row['email'];
        $people[$cr]['genero'] = $row['genero'];

        $cr++;
    }
}

$json = json_encode($people);
echo $json;
exit;

