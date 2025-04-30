<?php

namespace Core;

use PDO;

class Database
{
    private $connection;
    private $statement;

    public function __construct()
    {
        $config = [
            'host' => $_ENV['MYSQL_HOST'],
            'port' => $_ENV['MYSQL_PORT'],
            'dbname' => $_ENV['MYSQL_DATABASE_NAME'],
            'charset' => $_ENV['MYSQL_CHARSET']
        ];

        $dsn = 'mysql:' . http_build_query($config, '', ';');

        $this->connection = new PDO($dsn, $_ENV['MYSQL_USERNAME'], $_ENV['MYSQL_PASSWORD'], [
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
        ]);
    }

    public function query($query, $params = [])
    {
        $this->statement = $this->connection->prepare($query);

        $this->statement->execute($params);

        return $this;
    }

    public function get()
    {
        return $this->statement->fetchAll();
    }

    public function find()
    {
        return $this->statement->fetch();
    }

    public function findOrFail()
    {
        $result = $this->find();

        if (! $result) {
            abort();
        }

        return $result;
    }
}
