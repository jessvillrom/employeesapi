
CREATE DATABASE IF NOT EXISTS companydb;

CREATE TABLE IF NOT EXISTS employee (
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    salary INT(11) DEFAULT NULL,
    CONSTRAINT pk_employee PRIMARY KEY(id)
 )ENGINE=InnoDB; 



