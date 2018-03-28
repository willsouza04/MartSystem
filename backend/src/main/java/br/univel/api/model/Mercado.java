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
@Table(name = "Mercado")
public class Mercado implements Serializable {
	
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
	
	@Column(name = "cnpj")
	private String cnpj;
	
	@Column(name = "nome")
	private String nome;
	
	protected Mercado() {
		
	}

	public Mercado(Login id_login, Endereco id_endereco, String cnpj, String nome) {
		super();
		this.id_login = id_login;
		this.id_endereco = id_endereco;
		this.cnpj = cnpj;
		this.nome = nome;
	}

	public Long getId() {
		return id;
	}

	public Login getId_login() {
		return id_login;
	}

	public void setId_login(Login id_login) {
		this.id_login = id_login;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Endereco getId_endereco() {
		return id_endereco;
	}

	public void setId_endereco(Endereco id_endereco) {
		this.id_endereco = id_endereco;
	}

	public String getCnpj() {
		return cnpj;
	}

	public void setCnpj(String cnpj) {
		this.cnpj = cnpj;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}
}
