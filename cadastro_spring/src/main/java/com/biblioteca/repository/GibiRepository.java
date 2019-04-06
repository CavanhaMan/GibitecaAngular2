package com.biblioteca.repository;
/**********************
* Rodrigo  CavanhaMan *
*        IFTM         *
* Gibiteca do Cavanha *
***********************/
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.biblioteca.model.Gibi;

@Repository
public interface GibiRepository extends JpaRepository<Gibi,Integer>{
	
}