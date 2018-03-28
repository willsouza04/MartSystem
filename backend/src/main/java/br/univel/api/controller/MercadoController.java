package br.univel.api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.univel.api.model.Endereco;
import br.univel.api.model.Login;
import br.univel.api.model.Mercado;
import br.univel.api.repository.EnderecoRepository;
import br.univel.api.repository.LoginRepository;
import br.univel.api.repository.MercadoRepository;

@RestController
public class MercadoController {
	
	@Autowired
	MercadoRepository mercadoRepository;
	@Autowired
	LoginRepository loginRepository;
	@Autowired
	EnderecoRepository enderecoRepository;
	
	
	// Url: api/mercado/save?id_login=1&id_endereco=1&cnpj=3165165&nome=UmNomeAi
	@RequestMapping("api/mercado/save")
	public String save(@RequestParam("id_login") Long id_login, @RequestParam("id_endereco") Long id_endereco, 
			@RequestParam("cnpj") String cnpj, @RequestParam("nome") String nome) {
		try {
			Login login = loginRepository.findOne(id_login);
			Endereco endereco = enderecoRepository.findOne(id_endereco);
			Mercado mercado = new Mercado(login, endereco, cnpj, nome);
			mercadoRepository.save(mercado);
			return "Done";
		} catch (Exception error) {
			return "Error";
		}
	}
}
