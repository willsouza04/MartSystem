package br.univel.api.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.transaction.annotation.Transactional;

import br.univel.api.model.Login;

public interface LoginRepository extends CrudRepository<Login, Long> {
	
	@Modifying
	@Transactional
	@Query("select l.tipo from Login l where l.username = ?1 and l.senha = ?2")
	List<String> findTipoByLogin(String username, String senha);

}
