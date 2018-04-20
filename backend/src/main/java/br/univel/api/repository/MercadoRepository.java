package br.univel.api.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.transaction.annotation.Transactional;

import br.univel.api.model.Mercado;

public interface MercadoRepository extends CrudRepository<Mercado, Long> {
	
	@Modifying
	@Transactional
	@Query("select m from Mercado m where id_login = ?1")
	List<Mercado> findByIdLogin(Long id_login);

}
