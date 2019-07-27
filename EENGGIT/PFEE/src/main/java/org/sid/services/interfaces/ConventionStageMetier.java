package org.sid.services.interfaces;

import java.util.List;
import java.util.Optional;
import org.sid.entity.Convention_stage;
import org.sid.entity.Document;

public interface ConventionStageMetier {
	

	//list all ConventionStage
	public List<Document> getAllConventionStage(String mc,String status);
	//list all DemandeDiplome
	public List<Document> getAllcv();
	//save ConventionStage
	public Document saveOneConventionStage(Convention_stage cnvs);
	//upade One ConventionStage
	public Document UpdateOneConventionStage(Long id,Convention_stage cnvs);
	//delete One ConventionStage
	public void deleteOneConventionStager(Long id);
	//one One ConventionStage
	public Optional<Document> getOneConventionStage(Long id);
	List<Document> getALLParTypeDandUser(String user);
}
