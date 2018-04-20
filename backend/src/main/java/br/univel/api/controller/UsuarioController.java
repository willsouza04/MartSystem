package br.univel.api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.univel.api.model.Usuario;
import br.univel.api.repository.UsuarioRepositoy;

@RestController
public class UsuarioController {

	@Autowired
	UsuarioRepositoy usuarioRepository;
	
	// Url: api/usuario/save?id_login=2&id_endereco=2&nome=UmNomeAi&cpf=3165165&idade=20
	@RequestMapping("api/usuario/save")
	public String save(@RequestParam("id_login") Long id_login, @RequestParam("id_endereco") Long id_endereco, 
			@RequestParam("nome") String nome, @RequestParam("cpf") String cpf, 
			@RequestParam("idade") Long idade) {
		try {
			Usuario usuario = new Usuario(id_login, id_endereco, nome, cpf, idade);
			usuarioRepository.save(usuario);
			return "Done";
		} catch (Exception error) {
			return "Error";
		}
	}
	
	// Url: api/usuario/findByIdLogin?id_login=1
	@CrossOrigin(origins = "*")
	@RequestMapping("api/usuario/findByIdLogin")
	public Usuario findByIdLogin(@RequestParam("id_login") Long id_login) {
		try {
			return usuarioRepository.findByIdLogin(id_login).get(0);
		} catch (NullPointerException error) {
			return null;
		}
	}
}
