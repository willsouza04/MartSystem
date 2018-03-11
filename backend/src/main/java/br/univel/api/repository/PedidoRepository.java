package br.univel.api.repository;

import org.springframework.data.repository.CrudRepository;

import br.univel.api.model.Pedido;

public interface PedidoRepository extends CrudRepository<Pedido, Long> {

}
