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
	
	// Url: api/login/save?username=wfdsouza&senha=35795128&tipo=usuario
	@CrossOrigin(origins = "*")
	@RequestMapping("api/login/save")
	public Login save(@RequestParam("username") String username, @RequestParam("senha") String senha,
			@RequestParam("tipo") String tipo) {
		try {
			loginRepository.save(new Login(username, senha, tipo));
			List<Login> login = loginRepository.findLoginByUsernameAndPassword(username, senha);
			return login.get(0);
		} catch (Exception error) {
			return null;
		}
	}
	
	// Url: api/login/findById?id=1
	@CrossOrigin(origins = "*")
	@RequestMapping("api/login/findById")
	public Login findById(@RequestParam("id") Long id) {
		try {
			return loginRepository.findOne(id);
		} catch (NullPointerException error) {
			return null;
		}
	}
	
	// Url: api/login/findAll
	@CrossOrigin(origins = "*")
	@RequestMapping("api/login/findAll")
	public List<Login> findAll() {
		try {
			return (List<Login>) loginRepository.findAll();
		} catch (Exception error) {
			return null;
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
	
	// Url: api/login/deleteById?id=1
	@CrossOrigin(origins = "*")
	@RequestMapping("api/login/deleteById")
	public String deleteById(@RequestParam("id") Long id) {
		try {
			loginRepository.deleteById(id);
			return "Done";
		} catch (Exception error) {
			return "Error";
		}
	}
}
