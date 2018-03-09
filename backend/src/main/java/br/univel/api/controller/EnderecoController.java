package br.univel.api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.univel.api.model.Endereco;
import br.univel.api.repository.EnderecoRepository;

@RestController
public class EnderecoController {

	@Autowired
	EnderecoRepository enderecoRepository;
	
	// Url: api/endereco/save?cep=123456789&numero=3&rua=titto&cidade=cascavel&estado=pr&pais=brasil
	@RequestMapping("api/endereco/save")
	public String save(@RequestParam("cep") String cep, @RequestParam("numero") Long numero,
			@RequestParam("rua") String rua, @RequestParam("cidade") String cidade,
			@RequestParam("estado") String estado, @RequestParam("pais") String pais) {
		try {
			enderecoRepository.save(new Endereco(cep, numero, rua, cidade, estado, pais));
			return "Done";
		} catch (Exception error) {
			return "Error";
		}
	}
}
