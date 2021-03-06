package com.biblioteca.resource;
/**********************
* Rodrigo  CavanhaMan *
*        IFTM         *
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

import com.biblioteca.model.Categoria;
import com.biblioteca.repository.CategoriaRepository;

@RestController
@RequestMapping(value = "/categorias")
@CrossOrigin(origins = "http://localhost:4200")
public class CategoriaResource {

	@Autowired
	private CategoriaRepository service;

	@GetMapping
	public ResponseEntity<List<Categoria>> findAll() {
		List<Categoria> categorias = service.findAll();
		return ResponseEntity.ok().body(categorias);
	}

	@PostMapping
	public ResponseEntity<?> salvar(@Valid @RequestBody Categoria categoria) {
		service.save(categoria);
		URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(categoria.getCodigo()).toUri();
		return ResponseEntity.created(location).build();
	}

	@PutMapping
	public ResponseEntity<?> atualizar(@Valid @RequestBody Categoria categoria) {
		service.save(categoria);
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
