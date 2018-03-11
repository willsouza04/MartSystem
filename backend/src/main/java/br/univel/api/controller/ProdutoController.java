package br.univel.api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.univel.api.model.Produto;
import br.univel.api.repository.ProdutoRepository;

@RestController
public class ProdutoController {

	@Autowired
	ProdutoRepository produtoRepository;
	
	// Url: api/produto/save?id_mercado=1&nome=UmNomeAi&valor=31.65&estoque=300
	@RequestMapping("api/produto/save")
	public String save(@RequestParam("id_mercado") Long id_mercado, @RequestParam("nome") String nome,
			@RequestParam("valor") double valor, @RequestParam("estoque") Long estoque) {
		try {
			produtoRepository.save(new Produto(id_mercado, nome, valor, estoque));
			return "Done";
		} catch (Exception error) {
			return "Error";
		}
	}
}
