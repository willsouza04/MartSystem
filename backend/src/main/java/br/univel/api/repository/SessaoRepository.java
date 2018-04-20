package br.univel.api.repository;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.transaction.annotation.Transactional;

import br.univel.api.model.Sessao;

public interface SessaoRepository extends CrudRepository<Sessao, Long>{
	
	@Modifying
	@Transactional
	@Query("update Sessao set last_time = now() where id = ?1")
	void update(Long id);
	
	@Modifying
	@Transactional
	@Query("delete from Sessao s where s.id = ?1")
	void deleteById(Long id);
}
