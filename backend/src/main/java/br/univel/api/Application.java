package br.univel.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import br.univel.api.repository.EnderecoRepository;
import br.univel.api.repository.ListaProdutosRepository;
import br.univel.api.repository.MercadoRepository;
import br.univel.api.repository.PedidoRepository;
import br.univel.api.repository.ProdutoRepository;
import br.univel.api.repository.SessaoRepository;
import br.univel.api.repository.UsuarioRepositoy;

@SpringBootApplication
public class Application implements CommandLineRunner{
	
	@Autowired
	EnderecoRepository enderecoRepository;
	@Autowired
	ListaProdutosRepository listaProdutoRepository;
	@Autowired
	MercadoRepository mercadoRepository;
	@Autowired
	PedidoRepository pedidoRepository;
	@Autowired
	ProdutoRepository produtoRepository;
	@Autowired
	UsuarioRepositoy usuarioRepositoy;
	@Autowired
	SessaoRepository sessaoRepository;

	public static void main(String[] args){
		SpringApplication.run(Application.class, args);
	}
	
	public void run(String... arg0) throws Exception {
		// TODO Auto-generated method stub		
	}
}
