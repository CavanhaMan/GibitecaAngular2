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
public class Categoria implements Serializable {
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer codigo;
	private String nome;
	private String descricao;

	public Integer getCodigo() {return codigo;}
	public void setCodigo(Integer codigo) {this.codigo = codigo;}
	public String getNome() {return nome;}
	public void setNome(String nome) {this.nome = nome;}
	
	private int idCategoria;
	public int getIdCategoria() {return idCategoria;}
	public void setIdCategoria(int idCategoria) {this.idCategoria = idCategoria;}
	public String getDescricao() {return descricao;}
	public void setDescricao(String descricao) {this.descricao = descricao;}
	public List<Gibi> getGibis() {return gibis;}
	public void setGibis(List<Gibi> gibis) {this.gibis = gibis;}
	
	@JsonIgnore
	@OneToMany(mappedBy="categoria")
	private List<Gibi> gibis = new ArrayList<>();

	public Categoria(String descricao) {this.descricao = descricao;}

}
