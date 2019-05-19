package com.biblioteca.resource;
/**********************
* Rodrigo  CavanhaMan *
*         IFTM        *
* Gibiteca do Cavanha *
***********************/
import java.net.URI;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.biblioteca.model.Gibi;
import com.biblioteca.repository.GibiRepository;

@RestController
@RequestMapping(value = "/gibis")
@CrossOrigin(origins = "http://localhost:4200")
public class GibiResource {

	@Autowired
	private GibiRepository service;

	@GetMapping
	public ResponseEntity<List<Gibi>> findAll() {
		List<Gibi> gibis = service.findAll();
		return ResponseEntity.ok().body(gibis);
	}

	@PostMapping
	public ResponseEntity<?> salvar(@Valid @RequestBody Gibi gibi) {
		gibi.getCategoria().setCodigo(gibi.getCategoria().getCodigo());
		gibi.getEditora().setCodigo(gibi.getEditora().getCodigo());
		service.save(gibi);
		URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(gibi.getCodigo()).toUri();
		return ResponseEntity.created(location).build();
	}

	@PutMapping
	public ResponseEntity<?> atualizar(@Valid @RequestBody Gibi gibi) {
		service.save(gibi);
		return ResponseEntity.noContent().build();
	}

	@DeleteMapping(value = "{codigo}")
	public ResponseEntity<?> excluir(@PathVariable Integer codigo) {
		try {
			service.deleteById(codigo);
			return ResponseEntity.ok(codigo);
		} catch (EmptyResultDataAccessException e) {return ResponseEntity.notFound().build();}
	}

}
