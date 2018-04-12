package br.univel.api.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.transaction.annotation.Transactional;

import br.univel.api.model.Endereco;

public interface EnderecoRepository extends CrudRepository<Endereco, Long> {
	
	@Modifying
	@Transactional
	@Query("select e from Endereco e where e.cep = ?1 and e.numero = ?2")
	List<Endereco> findEnderecoByCepAndNumero(String cep, Long numero);
	
	@Modifying
	@Transactional
	@Query("delete from Endereco e where e.id = ?1")
	void deleteById(Long id);

}
