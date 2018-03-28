package br.univel.api.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "Usuario")
public class Usuario implements Serializable {
	
	private static final long serialVersionUID = -3009157732242241606L;
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	@ManyToOne
	@JoinColumn(name = "id_login")
	private Login id_login;
	
	@ManyToOne
	@JoinColumn(name = "id_endereco")
	private Endereco id_endereco;
	
	@Column(name = "nome")
	private String nome;
	
	@Column(name = "cpf")
	private String cpf;
	
	@Column(name = "idade")
	private Long idade;
	
	protected Usuario() {
		
	}

	public Usuario(Login id_login, Endereco id_endereco, String nome, String cpf, Long idade) {
		super();
		this.id_login = id_login;
		this.id_endereco = id_endereco;
		this.nome = nome;
		this.cpf = cpf;
		this.idade = idade;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Login getId_login() {
		return id_login;
	}

	public void setId_login(Login id_login) {
		this.id_login = id_login;
	}

	public Endereco getId_endereco() {
		return id_endereco;
	}

	public void setId_endereco(Endereco id_endereco) {
		this.id_endereco = id_endereco;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}

	public Long getIdade() {
		return idade;
	}

	public void setIdade(Long idade) {
		this.idade = idade;
	}
}
