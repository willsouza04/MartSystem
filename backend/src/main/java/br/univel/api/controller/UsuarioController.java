package br.univel.api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.univel.api.model.Usuario;
import br.univel.api.repository.UsuarioRepositoy;

@RestController
public class UsuarioController {

	@Autowired
	UsuarioRepositoy usuarioRepositoy;
	
	// Url: api/usuario/save?id_endereco=1&nome=UmNomeAi&cpf=3165165&idade=20
	@RequestMapping("api/usuario/save")
	public String save(@RequestParam("id_endereco") Long id_endereco, @RequestParam("nome") String nome, 
			@RequestParam("cpf") String cpf, @RequestParam("idade") Long idade) {
		try {
			usuarioRepositoy.save(new Usuario(id_endereco, nome, cpf, idade));
			return "Done";
		} catch (Exception error) {
			return "Error";
		}
	}
}
