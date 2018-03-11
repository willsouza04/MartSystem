package br.univel.api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.univel.api.model.Mercado;
import br.univel.api.repository.MercadoRepository;

@RestController
public class MercadoController {
	
	@Autowired
	MercadoRepository mercadoRepository;
	
	// Url: api/mercado/save?id_endereco=1&cnpj=3165165&nome=UmNomeAi
	@RequestMapping("api/mercado/save")
	public String save(@RequestParam("id_endereco") Long id_endereco, @RequestParam("cnpj") String cnpj,
			@RequestParam("nome") String nome) {
		try {
			mercadoRepository.save(new Mercado(id_endereco, cnpj, nome));
			return "Done";
		} catch (Exception error) {
			return "Error";
		}
	}
}
