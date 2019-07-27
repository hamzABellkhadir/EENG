package org.sid.services.interfaces;

import java.util.List;
import java.util.Optional;

import org.sid.entity.Attestation_scolarite;
import org.sid.entity.Document;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface DocumentMetier {

	//list all DOcuments
	public List<Document> getAlldocument();
	//list all DOcuments
	public List<Document> getAllAttestaionScolariter();
	//save Attestation Scolariter
	public Document saveOneAttestaionScolariter(Attestation_scolarite atsco);
	//upade One Attesctaion Scolariter
	public Document UpdateOneAttestaionScolariter(Long id,Attestation_scolarite atsco);
	//delete One Attesctaion Scolariter
	public void deleteOneAttestaionScolariter(Long id);
	//one One Attesctaion Scolariter
	public Optional<Document> getOneAttestaionScolariter(Long id);
	Page<Document> chercherDocuserandtype(String mc, String user,Pageable pageable);
	
	
	
	
}
