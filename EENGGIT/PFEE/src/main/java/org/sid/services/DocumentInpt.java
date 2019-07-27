package org.sid.services;

import java.util.List;
import java.util.Optional;

import org.sid.dao.DocumentRepository;
import org.sid.dao.EtudiantRepository;
import org.sid.entity.Attestation_scolarite;
import org.sid.entity.Document;
import org.sid.entity.Etudiant;
import org.sid.services.interfaces.DocumentMetier;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
@Service
@Transactional
public class DocumentInpt implements DocumentMetier{
	@Autowired
	private DocumentRepository documentRepository;
	
	@Autowired
	private EtudiantRepository etudiantRepository;
	
	@Override
	public List<Document> getAlldocument() {
		// TODO Auto-generated method stub
		return documentRepository.findAll();
	}
	
	@Override
	public List<Document> getAllAttestaionScolariter() {
		// TODO Auto-generated method stub
		return documentRepository.chercherParTypeD("Attestation_scolarite");
	}

	@Override
	public Document saveOneAttestaionScolariter(Attestation_scolarite atsco) {
		// TODO Auto-generated method stub
		Etudiant et =etudiantRepository.chercher(atsco.getEtudiantid());
		atsco.setEtudiant(et);
		return documentRepository.save(atsco);
	}

	@Override
	public Document UpdateOneAttestaionScolariter(Long id, Attestation_scolarite atsco) {
		atsco.setId_doc(id);
		Etudiant et =etudiantRepository.chercher( atsco.getEtudiantid() );
		atsco.setEtudiant( et );
		return documentRepository.save( atsco );
	}

	@Override
	public void deleteOneAttestaionScolariter(Long id) {
		// TODO Auto-generated method stub
		documentRepository.deleteById(id);
	}

	@Override
	public Optional<Document> getOneAttestaionScolariter(Long id) {
		// TODO Auto-generated method stub
		return documentRepository.findById(id);
	}
	
	//---------------------------------------- chercher par type de document et l'etudiant
	
	@Override
	public Page<Document> chercherDocuserandtype(String mc,String user,Pageable pageable) {
		// TODO Auto-generated method stub
		return documentRepository.chercherParTypeDanduser(mc, user, pageable);
	}

}
