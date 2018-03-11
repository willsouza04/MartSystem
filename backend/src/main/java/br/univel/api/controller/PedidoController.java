package br.univel.api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.univel.api.model.Pedido;
import br.univel.api.repository.PedidoRepository;

@RestController
public class PedidoController {

	@Autowired
	PedidoRepository pedidoRepository;
	
	// Url: api/pedido/save?id_mercado=1&id_usuario=1&valor_frete=2.50&valor_total=10.00
	@RequestMapping("api/pedido/save")
	public String save(@RequestParam("id_mercado") Long id_mercado, @RequestParam("id_usuario") Long id_usuario,
			@RequestParam("valor_frete") double valor_frete, @RequestParam("valor_total") double valor_total) {
		try {
			pedidoRepository.save(new Pedido(id_mercado, id_usuario, valor_frete, valor_total));
			return "Done";
		} catch (Exception error) {
			return "Error";
		}
	}
}
