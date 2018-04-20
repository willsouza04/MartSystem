package br.univel.api.model;

import java.io.Serializable;
import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Sessao")
public class Sessao implements Serializable {
	
	private static final long serialVersionUID = -3009157732242241606L;
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	@Column(name = "id_login")
	private Long id_login;
	
	@Column(name = "last_time")
	private Timestamp last_time;
	
	protected Sessao() {
		
	}

	public Sessao(Long id_login, Timestamp last_time) {
		super();
		this.id_login = id_login;
		this.last_time = last_time;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getId_login() {
		return id_login;
	}

	public void setId_login(Long id_login) {
		this.id_login = id_login;
	}

	public Timestamp getLast_time() {
		return last_time;
	}

	public void setLast_time(Timestamp last_time) {
		this.last_time = last_time;
	}
}
