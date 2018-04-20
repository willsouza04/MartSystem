package br.univel.api.controller;

import java.sql.Timestamp;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.univel.api.model.Sessao;
import br.univel.api.repository.SessaoRepository;

@RestController
public class SessaoController {
	
	@Autowired
	SessaoRepository sessaoRepository;
	
	// Url: api/sessao/save?id_login=1
	@CrossOrigin(origins = "*")
	@RequestMapping("api/sessao/save")
	public Sessao save(@RequestParam("id_login") Long id_login) {
		try {
			Sessao sessao  = new Sessao(id_login, null);						
			Sessao sessaoFinal = sessaoRepository.save(sessao);
			sessaoRepository.update(sessaoFinal.getId());
			return sessaoFinal;
		} catch (Exception error) {
			return null;
		}
	}
	
	// Url: api/sessao/update?id=1
	@CrossOrigin(origins = "*")
	@RequestMapping("api/sessao/update")
	public String update(@RequestParam("id") Long id) {
		try {
			sessaoRepository.update(id);
			return "Done";
		} catch (Exception error) {
			return "Error";
		}
	}

	// Url: api/sessao/deleteById?id=1
	@CrossOrigin(origins = "*")
	@RequestMapping("api/sessao/deleteById")
	public String deleteById(@RequestParam("id") Long id) {
		try {
			sessaoRepository.deleteById(id);
			return "Done";
		} catch (Exception error) {
			return "Error";
		}
	}
	
	// Url: api/sessao/findById?id=1
	@CrossOrigin(origins = "*")
	@RequestMapping("api/sessao/findById")
	public Sessao findById(@RequestParam("id") Long id) {
		try {
			return sessaoRepository.findOne(id);
		} catch (NullPointerException error) {
			return null;
		}
	}
	
	// Url: api/sessao/clearSessoes
	@SuppressWarnings("deprecation")
	@CrossOrigin(origins = "*")
	@RequestMapping("api/sessao/clearSessoes")
	public String clearSessoes() {
		try {
			int count = 0;
			List<Sessao> sessoes = (List<Sessao>) sessaoRepository.findAll();
			Timestamp now = new Timestamp(System.currentTimeMillis());
			now.setMinutes(now.getMinutes()-15);
			for(Sessao sessao : sessoes) {
				if(sessao.getLast_time().before(now)) {
					try {
						sessaoRepository.deleteById(sessao.getId());						
						count++;
					} catch (Exception error) {}
				}
			}
			return count + " sessoes finalizadas;";
		} catch (Exception error) {
			return "Error";
		}
	}
}
