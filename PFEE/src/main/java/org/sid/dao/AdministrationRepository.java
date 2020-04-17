package org.sid.dao;

import org.sid.entity.Administration;
import org.sid.entity.Etudiant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface AdministrationRepository extends JpaRepository<Administration, String>{

	@Query("select c from Administration c where c.n_responsable like :x and c.motpass like :mdp") 
	public Administration chercherAD(@Param(value="x")String login,@Param(value="mdp")String mdp);
}
