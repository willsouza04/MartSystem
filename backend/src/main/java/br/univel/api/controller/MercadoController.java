package br.univel.api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.univel.api.model.Mercado;
import br.univel.api.repository.MercadoRepository;

@RestController
public class MercadoController {
	
	@Autowired
	MercadoRepository mercadoRepository;	
	
	// Url: api/mercado/save?id_login=1&id_endereco=1&cnpj=3165165&nome=UmNomeAi
	@CrossOrigin(origins = "*")
	@RequestMapping("api/mercado/save")
	public String save(@RequestParam("id_login") Long id_login, @RequestParam("id_endereco") Long id_endereco, 
			@RequestParam("cnpj") String cnpj, @RequestParam("nome") String nome) {
		try {
			Mercado mercado = new Mercado(id_login, id_endereco, cnpj, nome);
			mercadoRepository.save(mercado);
			return "Done";
		} catch (Exception error) {
			return "Error";
		}
	}
	
	// Url: api/mercado/findByIdLogin?id_login=1
	@CrossOrigin(origins = "*")
	@RequestMapping("api/mercado/findByIdLogin")
	public Mercado findByIdLogin(@RequestParam("id_login") Long id_login) {
		try {
			return mercadoRepository.findByIdLogin(id_login).get(0);
		} catch (NullPointerException error) {
			return null;
		}
	}
}
