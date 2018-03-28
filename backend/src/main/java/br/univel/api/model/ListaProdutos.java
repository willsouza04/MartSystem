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
@Table(name = "ListaProdutos")
public class ListaProdutos implements Serializable {
	
	private static final long serialVersionUID = -3009157732242241606L;
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	@ManyToOne
	@JoinColumn(name = "id_pedido")
	private Pedido id_pedido;

	@ManyToOne 
	@JoinColumn(name = "id_produto")
	private Produto id_produto;
	
	@Column(name = "quantidade")
	private Long quantidades;
	
	protected ListaProdutos() {
		
	}

	public ListaProdutos(Produto id_produto, Pedido id_pedido, Long quantidades) {
		super();
		this.id_produto = id_produto;
		this.id_pedido = id_pedido;
		this.quantidades = quantidades;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Pedido getId_pedido() {
		return id_pedido;
	}

	public void setId_pedido(Pedido id_pedido) {
		this.id_pedido = id_pedido;
	}

	public Produto getId_produto() {
		return id_produto;
	}

	public void setId_produto(Produto id_produto) {
		this.id_produto = id_produto;
	}

	public Long getQuantidades() {
		return quantidades;
	}

	public void setQuantidades(Long quantidades) {
		this.quantidades = quantidades;
	}	
}
