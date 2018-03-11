package br.univel.api.repository;

import org.springframework.data.repository.CrudRepository;

import br.univel.api.model.Produto;

public interface ProdutoRepository extends CrudRepository<Produto, Long> {

}
