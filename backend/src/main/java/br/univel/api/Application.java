package br.univel.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import br.univel.api.repository.EnderecoRepository;

@SpringBootApplication
public class Application implements CommandLineRunner{
	
	@Autowired
	EnderecoRepository enderecoRepository;

	public static void main(String[] args){
		SpringApplication.run(Application.class, args);
	}
	
	public void run(String... arg0) throws Exception {
		// TODO Auto-generated method stub
		
	}
}
