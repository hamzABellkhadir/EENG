package org.sid.services.interfaces;

import java.util.List;
import java.util.Optional;

import org.sid.entity.Demande_stage;
import org.sid.entity.Document;

public interface DemandeStageMetier {

	//list all DemandeStage
	public List<Document> getAllDemandeStage();
	//save DemandeDiplome
	public Document saveOneDemandeStage(Demande_stage ds);
	//upade One ConventionStage
	public Document UpdateOneDemandeStage(Long id,Demande_stage ds);
	//delete One ConventionStage
	public void deleteOneDemandeStage(Long id);
	//one One ConventionStage
	public Optional<Document> getOneDemandeStage(Long id);
}
