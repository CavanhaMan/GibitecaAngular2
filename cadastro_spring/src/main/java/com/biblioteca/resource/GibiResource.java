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
@CrossOrigin(origins = "http://localhost")
public class GibiResource {

	@Autowired
	private GibiRepository repository;

	@PostMapping
	public ResponseEntity<?> salvar(@Valid @RequestBody Gibi livro) {
		livro.getCategoria().setIdCategoria(livro.getCategoria().getIdCategoria());
		livro.getEditora().setCodigo(livro.getEditora().getCodigo());
		repository.save(livro);
		URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(livro.getIsbn()).toUri();
		return ResponseEntity.created(location).build();
	}

	@PutMapping
	public ResponseEntity<?> atualizar(@Valid @RequestBody Gibi livro) {
		repository.save(livro);
		return ResponseEntity.noContent().build();
	}

	@DeleteMapping(value = "{codigo}")
	public ResponseEntity<?> excluir(@PathVariable Integer codigo) {
		try {
			repository.deleteById(codigo);
			return ResponseEntity.ok(codigo);
		} catch (EmptyResultDataAccessException e) {
			return ResponseEntity.notFound().build();
		}
	}

	@GetMapping
	public ResponseEntity<List<Gibi>> findAll() {
		List<Gibi> gibis = repository.findAll();
		return ResponseEntity.ok().body(gibis);
	}

}
