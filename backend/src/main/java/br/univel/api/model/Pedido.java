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
@Table(name = "Pedido")
public class Pedido implements Serializable {
	
	private static final long serialVersionUID = -3009157732242241606L;
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	@ManyToOne
	@JoinColumn(name = "id_mercado")
	private Mercado id_mercado;
	
	@ManyToOne
	@JoinColumn(name = "id_usuario")
	private Usuario id_usuario;
	
	@Column(name = "valor_frete")
	private double valor_frete;
	
	@Column(name = "valor_total")
	private double valor_total;
	
	protected Pedido() {
		
	}

	public Pedido(Mercado id_mercado, Usuario id_usuario, double valor_frete, double valor_total) {
		super();
		this.id_mercado = id_mercado;
		this.id_usuario = id_usuario;
		this.valor_frete = valor_frete;
		this.valor_total = valor_total;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Mercado getId_mercado() {
		return id_mercado;
	}

	public void setId_mercado(Mercado id_mercado) {
		this.id_mercado = id_mercado;
	}

	public Usuario getId_usuario() {
		return id_usuario;
	}

	public void setId_usuario(Usuario id_usuario) {
		this.id_usuario = id_usuario;
	}

	public double getValor_frete() {
		return valor_frete;
	}

	public void setValor_frete(double valor_frete) {
		this.valor_frete = valor_frete;
	}

	public double getValor_total() {
		return valor_total;
	}

	public void setValor_total(double valor_total) {
		this.valor_total = valor_total;
	}
}
