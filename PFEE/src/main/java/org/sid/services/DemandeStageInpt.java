package org.sid.services;

import java.util.List;
import java.util.Optional;

import org.sid.dao.DocumentRepository;
import org.sid.dao.EtudiantRepository;
import org.sid.entity.Demande_stage;
import org.sid.entity.Document;
import org.sid.entity.Etudiant;
import org.sid.services.interfaces.DemandeStageMetier;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class DemandeStageInpt implements DemandeStageMetier{

	@Autowired
	private DocumentRepository documentRepository;
	@Autowired
	private EtudiantRepository etudiantRepository;
	
	@Override
	public List<Document> getAllDemandeStage() {
		// TODO Auto-generated method stub
		return documentRepository.chercherParTypeD("Demande_stage");
	}

	@Override
	public Document saveOneDemandeStage(Demande_stage ds) {
		Etudiant et =etudiantRepository.chercher(ds.getEtudiantid());
		ds.setEtudiant(et);
		return documentRepository.save(ds);
	}

	@Override
	public Document UpdateOneDemandeStage(Long id, Demande_stage ds) {
		ds.setId_doc(id);
		Etudiant et =etudiantRepository.chercher(ds.getEtudiantid());
		ds.setEtudiant(et);
		return documentRepository.save(ds);
	}

	@Override
	public void deleteOneDemandeStage(Long id) {
		// TODO Auto-generated method stub
		documentRepository.deleteById(id);
	}

	@Override
	public Optional<Document> getOneDemandeStage(Long id) {
		// TODO Auto-generated method stub
		return documentRepository.findById(id);
	}

}
