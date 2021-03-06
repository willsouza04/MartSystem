package br.univel.api.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.transaction.annotation.Transactional;

import br.univel.api.model.Usuario;

public interface UsuarioRepositoy extends CrudRepository<Usuario, Long> {

	@Modifying
	@Transactional
	@Query("select u from Usuario u where id_login = ?1")
	List<Usuario> findByIdLogin(Long id_login);
}
