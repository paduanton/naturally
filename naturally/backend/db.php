<?php
/**
 * Created by PhpStorm.
 * User: anton
 * Date: 24/09/2017
 * Time: 16:32
 */

$host = 'localhost';
$usuario = 'root';
$senha = '';
$banco = 'naturally'
;
$dsn = "mysql:host={$host};port=3306;dbname={$banco}";

try {
    $pdo = new PDO($dsn, $usuario, $senha);
    echo 'Conectado';
} catch (PDOException $e) {
    // Se ocorrer algum erro na conexão
    die($e->getMessage());
}
 // rita
