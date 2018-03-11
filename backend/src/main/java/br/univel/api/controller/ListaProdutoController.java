package br.univel.api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.univel.api.model.ListaProdutos;
import br.univel.api.repository.ListaProdutosRepository;

@RestController
public class ListaProdutoController {

	@Autowired
	ListaProdutosRepository listaProdutoRepository;
	
	// Url: api/listaProduto/save?id_pedido=1&id_produto=1&quantidade=3
	@RequestMapping("api/listaProduto/save")
	public String save(@RequestParam("id_pedido") Long id_pedido, @RequestParam("id_produto") Long id_produto, 
			@RequestParam("quantidade") Long quantidade) {
		try {
			listaProdutoRepository.save(new ListaProdutos(id_produto, id_pedido, quantidade));
			return "Done";
		} catch (Exception error) {
			return "Error";
		}
	}
}
