package org.sid.dao;


import java.util.Optional;

import org.sid.entity.Etudiant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface EtudiantRepository extends JpaRepository<Etudiant, String>{
	@Query("select c from Etudiant c where c.n_apogee like :x") 
	public Etudiant chercher(@Param(value="x")String mc);
	
	@Query("select c from Etudiant c where c.n_apogee like :x and c.motpass like :mdp") 
	public Etudiant chercherET(@Param(value="x")String login,@Param(value="mdp")String mdp);
	
}
