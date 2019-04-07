package com.biblioteca.model;
/**********************
* Rodrigo  CavanhaMan *
*         IFTM        *
* Gibiteca do Cavanha *
***********************/
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Editora implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer codigo;
	private String nome;
	private String site;
	private String pais;
	
	@JsonIgnore
	@OneToMany(mappedBy="editora")
	private List<Gibi> gibis = new ArrayList<>();

	public Integer getCodigo() {return codigo;}
	public void setCodigo(int codigo) {this.codigo = codigo;}
	public String getNome() {return nome;}
	public void setNome(String nome) {this.nome = nome;}
	public String getSite() {return site;}
	public void setSite(String site) {this.site = site;}
	public String getPais() {return pais;}
	public void setPais(String pais) {this.pais = pais;}	
	
	public List<Gibi> getLivros() {return gibis;}
	public void setLivros(List<Gibi> gibis) {this.gibis = gibis;}
	
	public Editora(Integer codigo, String nome, String site, String pais, List<Gibi> gibis) {
		super();
		this.codigo = codigo;
		this.nome = nome;
		this.site = site;
		this.pais = pais;
		this.gibis = gibis;
	}
}
