package org.sid.services.interfaces;

import java.util.List;
import java.util.Optional;


import org.sid.entity.Demande_diplome;
import org.sid.entity.Document;

public interface DemandeDiplomeMetier {

	//list all DemandeDiplome
	public List<Document> getAllDemandeDiplome();
	//save DemandeDiplome
	public Document saveOneDemandeDiplome(Demande_diplome dmd);
	//upade One ConventionStage
	public Document UpdateOneDemandeDiplome(Long id,Demande_diplome dmd);
	//delete One ConventionStage
	public void deleteOneDemandeDiplome(Long id);
	//one One ConventionStage
	public Optional<Document> getOneDemandeDiplome(Long id);
}
