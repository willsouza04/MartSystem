package br.univel.api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.univel.api.model.Login;
import br.univel.api.repository.LoginRepository;

@RestController
public class LoginController {

	@Autowired
	LoginRepository loginRepository;
	
	// Url: api/login/save?usuario=wfdsouza&senha=35795128&tipo=usuario
	@CrossOrigin(origins = "*")
	@RequestMapping("api/login/save")
	public String save(@RequestParam("usuario") String usuario, @RequestParam("senha") String senha,
			@RequestParam("tipo") String tipo) {
		try {
			loginRepository.save(new Login(usuario, senha, tipo));
			return "Done";
		} catch (Exception error) {
			return "Error";
		}
	}
	
	// Url: api/login/findLoginByUsernameAndPassword?username=wfdsouza&senha=35795128
	@CrossOrigin(origins = "*")
	@RequestMapping("api/login/findLoginByUsernameAndPassword")
	public Login findLoginByUsernameAndPassword(@RequestParam("username") String username,
			@RequestParam("senha") String senha){
		try {
			List<Login> login = loginRepository.findLoginByUsernameAndPassword(username, senha);
			return login.get(0);
		} catch (Exception error) {
			return null;
		}
	}
}
