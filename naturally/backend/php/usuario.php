<?php

/**
 * Created by PhpStorm.
 * User: anton
 * Date: 08/10/2017
 * Time: 17:02
 */
class Usuario
{
    private $dbHost = "localhost";
    private $dbNomeDeUsuario = "root";
    private $dbSenha = "";
    private $dbNome = "naturally";
    private $TabelaUsuario = 'usuario';

    function __construct()
    {
        if (!isset($this->db)) {
            /* conecta com o banco
            phpinfo(); */
            $conexao = new mysqli($this->dbHost, $this->dbNomeDeUsuario, $this->dbSenha, $this->dbNome);
            if ($conexao->connect_error) {
                die("Falha ao conectar com MySQL <br>" . $conexao->connect_error);
            } else {
                $this->db = $conexao;
            }
        }
    }

    function checkUser($dadosUsuario = array())
    {
        if (!empty($dadosUsuario)) {
            // concatena nome e sobrenome
            //$name = $dadosUsuario['first_name']. " " . $dadosUsuario['last_name'];
            $prevQuery = "SELECT * FROM " . $this->TabelaUsuario . " WHERE oauth_provider = '" . $dadosUsuario['oauth_provider'] . "' AND oauth_uid = '" . $dadosUsuario['oauth_uid'] . "'";
            $prevResult = $this->db->query($prevQuery);
            if ($prevResult->num_rows > 0) {
                // atualiza dados do usuário caso já exista no banco
                $query = "UPDATE " . $this->TabelaUsuario . " SET first_name = '" . $dadosUsuario['first_name'] . "', last_name = '" . $dadosUsuario['last_name'] . ", name ='" . $dadosUsuario['name'] . "', email = '" . $dadosUsuario['email'] . "', gender = '" . $dadosUsuario['gender'] . "', locale = '" . $dadosUsuario['locale'] . "', picture = '" . $dadosUsuario['picture'] . "', link = '" . $dadosUsuario['link'] . "', modified = '" . date("Y-m-d H:i:s") . "' WHERE oauth_provider = '" . $dadosUsuario['oauth_provider'] . "' AND oauth_uid = '" . $dadosUsuario['oauth_uid'] . "'";
                $update = $this->db->query($query);
            } else {
                // insere dados do usuário
                $query = "INSERT INTO " . $this->TabelaUsuario . " SET oauth_provider = '" . $dadosUsuario['oauth_provider'] . "', oauth_uid = '" . $dadosUsuario['oauth_uid'] . "', name = '" . $dadosUsuario['name'] . "', first_name = '" . $dadosUsuario['first_name'] . "', last_name = '" . $dadosUsuario['last_name'] . "', email = '" . $dadosUsuario['email'] . "', gender = '" . $dadosUsuario['gender'] . "', locale = '" . $dadosUsuario['locale'] . "', picture = '" . $dadosUsuario['picture'] . "', link = '" . $dadosUsuario['link'] . "', created = '" . date("Y-m-d H:i:s") . "', modified = '" . date("Y-m-d H:i:s") . "'";
                $insert = $this->db->query($query);
            }

            // pega dados do usuário no banco 
            $result = $this->db->query($prevQuery);
            $dadosUsuario = $result->fetch_assoc();
        }

        return $dadosUsuario;  // retorna dados do usuário
    }
}