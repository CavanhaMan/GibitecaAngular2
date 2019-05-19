package com.biblioteca;
/**********************
* Rodrigo  CavanhaMan *
*         IFTM        *
* Gibiteca do Cavanha *
***********************/
import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.biblioteca.model.Categoria;
import com.biblioteca.model.Editora;
import com.biblioteca.repository.CategoriaRepository;
import com.biblioteca.repository.EditoraRepository;

@SpringBootApplication
public class SistemaEcommerceServerApplication implements CommandLineRunner {


	public static void main(String[] args) {
		SpringApplication.run(SistemaEcommerceServerApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {

/*		Gibi gib1 = new Gibi("Iracema - José de Alencar");
		Categoria cat2 = new Categoria("O Guarani - José de Alencar");
		this.repoCategoria.saveAll(Arrays.asList(cat1,cat2,cat3,cat4,cat5,cat6,cat7,cat8,cat9,cat10,cat11,cat12,cat13,
				cat14,cat15,cat16,cat17,cat18,cat19,cat20,cat21,cat22,cat23,cat24,cat25,cat26,cat27,cat28,cat29));

		Editora edit1 = new Editora("EBAL‎");
		Editora edit2 = new Editora("Editora Bloch‎");
		Editora edit3 = new Editora("Editora Confiança‎");
		Editora edit4 = new Editora("Editora Europa‎");
		Editora edit5 = new Editora("Editora Globo‎");
		Editora edit6 = new Editora("Editora Positivo‎");
		Editora edit7 = new Editora("Editoras anarquistas do Brasil‎");
		Editora edit8 = new Editora("Editoras de banda desenhada do Brasil‎");
		Editora edit9 = new Editora("Editoras de RPG do Brasil‎");
		Editora edit10 = new Editora("Editoras do Rio de Janeiro‎");
		Editora edit11 = new Editora("Geração Editorial‎");
		Editora edit12 = new Editora("Grupo Editorial Record‎");
		Editora edit13 = new Editora("Grupo Escala de Publicações‎");
		this.repoEditora.saveAll(Arrays.asList(edit1,edit2,edit3,edit4,edit5,edit6,edit7,edit8,edit9,edit10,edit11,edit12,edit13));
*/
	}

}
