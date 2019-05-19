package com.biblioteca.repository;
/**********************
* Rodrigo  CavanhaMan *
*         IFTM        *
* Gibiteca do Cavanha *
***********************/
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.biblioteca.model.Editora;

@Repository
public interface EditoraRepository extends JpaRepository<Editora,Integer>{
	
}