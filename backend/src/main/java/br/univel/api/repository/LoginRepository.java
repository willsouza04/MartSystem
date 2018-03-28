package br.univel.api.repository;

import org.springframework.data.repository.CrudRepository;

import br.univel.api.model.Login;

public interface LoginRepository extends CrudRepository<Login, Long> {

}
