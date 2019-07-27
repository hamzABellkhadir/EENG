package org.sid.services.interfaces;

import java.util.Collection;
import java.util.List;
import java.util.Optional;


import org.sid.entity.Document;
import org.sid.entity.Relve_notes;

public interface RelveNoteMetier {

	//list all RelveNote
	public Collection<Document> getAllRelveNote();
	//save DemandeDiplome
	public Document saveOneRelveNote(Relve_notes ds);
	//upade One ConventionStage
	public Document UpdateOneRelveNote(Long id,Relve_notes ds);
	//delete One ConventionStage
	public void deleteOneRelveNote(Long id);
	//one One ConventionStage
	public Optional<Document> getOneRelveNote(Long id);
}
