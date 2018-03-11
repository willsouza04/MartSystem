package br.univel.api.repository;

import org.springframework.data.repository.CrudRepository;

import br.univel.api.model.ListaProdutos;

public interface ListaProdutosRepository extends CrudRepository<ListaProdutos, Long> {

}
