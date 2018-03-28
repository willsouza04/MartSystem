package br.univel.api.controller;

import org.springframework.beans.factory.annotation.Autowired;
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
}
