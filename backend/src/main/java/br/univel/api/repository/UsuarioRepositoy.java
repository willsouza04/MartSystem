package br.univel.api.repository;

import org.springframework.data.repository.CrudRepository;

import br.univel.api.model.Usuario;

public interface UsuarioRepositoy extends CrudRepository<Usuario, Long> {

}
