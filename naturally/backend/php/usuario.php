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
            // concatena nome e sobrenome                                                 oauth_uid
            $nome = $dadosUsuario['primeiro_nome'] . " " . $dadosUsuario['ultimo_nome'];
            $prevQuery = "SELECT * FROM " . $this->TabelaUsuario . " WHERE oauth_provider = '" . $dadosUsuario['oauth_provider'] . "' AND facebook_id = '" . $dadosUsuario['facebook_id'] . "'";
            $prevResult = $this->db->query($prevQuery);

            /*if ($dadosUsuario['primeiro_nome'] == $dadosUsuario['ultimo_nome']) {
                $dadosUsuario['ultimo_nome'] = "";
            }*/

            if ($prevResult->num_rows > 0) {
                // atualiza dados do usuário caso já exista no banco
                $query = "UPDATE " . $this->TabelaUsuario . " SET  nome = '" . $nome . "', primeiro_nome = '" . $dadosUsuario['primeiro_nome'] . "', ultimo_nome = '" . $dadosUsuario['ultimo_nome'] . ", nome_completo ='" . $dadosUsuario['nome_completo'] . "', email = '" . $dadosUsuario['email'] . "', genero = '" . $dadosUsuario['genero'] . "', localizacao = '" . $dadosUsuario['localizacao'] . "', foto_perfil = '" . $dadosUsuario['foto_perfil'] . "', link_perfil = '" . $dadosUsuario['link_perfil'] . "', modificado = now() WHERE oauth_provider = '" . $dadosUsuario['oauth_provider'] . "' AND facebook_id = '" . $dadosUsuario['facebook_id'] . "'";
                $update = $this->db->query($query);
            } else {
                // insere dados do usuário
                $query = "INSERT INTO " . $this->TabelaUsuario . " SET oauth_provider = '" . $dadosUsuario['oauth_provider'] . "', facebook_id = '" . $dadosUsuario['facebook_id'] . "', nome = '" . $nome . "', nome_completo = '" . $dadosUsuario['nome_completo'] . "', primeiro_nome = '" . $dadosUsuario['primeiro_nome'] . "', ultimo_nome = '" . $dadosUsuario['ultimo_nome'] . "', email = '" . $dadosUsuario['email'] . "', genero = '" . $dadosUsuario['genero'] . "', localizacao = '" . $dadosUsuario['localizacao'] . "', foto_perfil = '" . $dadosUsuario['foto_perfil'] . "', link_perfil = '" . $dadosUsuario['link_perfil'] . "', criado = now(), modificado = now()";
                $insert = $this->db->query($query);
            }

            // pega dados do usuário no banco 
            $result = $this->db->query($prevQuery);
            $dadosUsuario = $result->fetch_assoc();
        }

        return $dadosUsuario;  // retorna dados do usuário
    }
}