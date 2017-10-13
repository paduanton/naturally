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
            // Conecta com o banco
            $conn = new mysqli($this->dbHost, $this->dbNomeDeUsuario, $this->dbSenha, $this->dbNome);
            if ($conn->connect_error) {
                die("Falha ao conectar com MySQL <br>" . $conn->connect_error);
            } else {
                $this->db = $conn;
            }
        }
    }

    function checkUser($userData = array())
    {
        if (!empty($userData)) {
            // checa se já existe dados do usuário  no banco
            $prevQuery = "SELECT * FROM " . $this->TabelaUsuario . " WHERE oauth_provider = '" . $userData['oauth_provider'] . "' AND oauth_uid = '" . $userData['oauth_uid'] . "'";
            $prevResult = $this->db->query($prevQuery);
            if ($prevResult->num_rows > 0) {
                // update dados do usuário caso já exista
                $query = "UPDATE " . $this->TabelaUsuario . " SET first_name = '" . $userData['first_name'] . "', last_name = '" . $userData['last_name'] . "', email = '" . $userData['email'] . "', gender = '" . $userData['gender'] . "', locale = '" . $userData['locale'] . "', picture = '" . $userData['picture'] . "', link = '" . $userData['link'] . "', modified = '" . date("Y-m-d H:i:s") . "' WHERE oauth_provider = '" . $userData['oauth_provider'] . "' AND oauth_uid = '" . $userData['oauth_uid'] . "'";
                $update = $this->db->query($query);
            } else {
                // insere dados do usuário
                $query = "INSERT INTO " . $this->TabelaUsuario . " SET oauth_provider = '" . $userData['oauth_provider'] . "', oauth_uid = '" . $userData['oauth_uid'] . "', first_name = '" . $userData['first_name'] . "', last_name = '" . $userData['last_name'] . "', email = '" . $userData['email'] . "', gender = '" . $userData['gender'] . "', locale = '" . $userData['locale'] . "', picture = '" . $userData['picture'] . "', link = '" . $userData['link'] . "', created = '" . date("Y-m-d H:i:s") . "', modified = '" . date("Y-m-d H:i:s") . "'";
                $insert = $this->db->query($query);
            }

            // pega dados do usuário no banco 
            $result = $this->db->query($prevQuery);
            $userData = $result->fetch_assoc();
        }

        // retorna dados do usuário
        return $userData;
    }
}

?>