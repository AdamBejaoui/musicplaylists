-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema playlist
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema playlist
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `playlist` DEFAULT CHARACTER SET utf8 ;
USE `playlist` ;

-- -----------------------------------------------------
-- Table `playlist`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `playlist`.`users` (
  `userId` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`userId`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `playlist`.`songs`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `playlist`.`songs` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(45) NOT NULL,
  `desc` VARCHAR(225) NOT NULL,
  `cover` VARCHAR(500) NULL,
  `users_userId` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_songs_users_idx` (`users_userId` ASC) VISIBLE,
  CONSTRAINT `fk_songs_users`
    FOREIGN KEY (`users_userId`)
    REFERENCES `playlist`.`users` (`userId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
