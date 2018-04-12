package br.univel.api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
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
	@CrossOrigin(origins = "*")
	@RequestMapping("api/endereco/save")
	public Endereco save(@RequestParam("cep") String cep, @RequestParam("numero") Long numero,
			@RequestParam("rua") String rua, @RequestParam("cidade") String cidade,
			@RequestParam("estado") String estado, @RequestParam("pais") String pais) {
		try {
			enderecoRepository.save(new Endereco(cep, numero, rua, cidade, estado, pais));
			List<Endereco> endereco = enderecoRepository.findEnderecoByCepAndNumero(cep, numero);
			return endereco.get(0);
		} catch (Exception error) {
			return null;
		}
	}
	
	// Url: api/endereco/findEnderecoByCepAndNumero?cep=123456789&numero=3
	@CrossOrigin(origins = "*")
	@RequestMapping("api/endereco/findEnderecoByCepAndNumero")
	public Endereco findEnderecoByCepAndNumero(@RequestParam("cep") String cep,
			@RequestParam("numero") Long numero){
		try {
			List<Endereco> endereco = enderecoRepository.findEnderecoByCepAndNumero(cep, numero);
			return endereco.get(0);
		} catch (Exception error) {
			return null;
		}
	}
	
	// Url: api/endereco/deleteById?id=1
	@CrossOrigin(origins = "*")
	@RequestMapping("api/endereco/deleteById")
	public String deleteById(@RequestParam("id") Long id) {
		try {
			enderecoRepository.deleteById(id);
			return "Done";
		} catch (Exception error) {
			return "Error";
		}
	}
}
