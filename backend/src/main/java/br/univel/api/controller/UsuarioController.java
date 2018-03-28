package br.univel.api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.univel.api.model.Endereco;
import br.univel.api.model.Login;
import br.univel.api.model.Usuario;
import br.univel.api.repository.EnderecoRepository;
import br.univel.api.repository.LoginRepository;
import br.univel.api.repository.UsuarioRepositoy;

@RestController
public class UsuarioController {

	@Autowired
	UsuarioRepositoy usuarioRepositoy;
	@Autowired
	LoginRepository loginRepository;
	@Autowired
	EnderecoRepository enderecoRepository;
	
	// Url: api/usuario/save?id_login=2&id_endereco=2&nome=UmNomeAi&cpf=3165165&idade=20
	@RequestMapping("api/usuario/save")
	public String save(@RequestParam("id_login") Long id_login, @RequestParam("id_endereco") Long id_endereco, 
			@RequestParam("nome") String nome, @RequestParam("cpf") String cpf, 
			@RequestParam("idade") Long idade) {
		try {
			Login login = loginRepository.findOne(id_login);
			Endereco endereco = enderecoRepository.findOne(id_endereco);
			Usuario usuario = new Usuario(login, endereco, nome, cpf, idade);
			usuarioRepositoy.save(usuario);
			return "Done";
		} catch (Exception error) {
			return "Error";
		}
	}
}
