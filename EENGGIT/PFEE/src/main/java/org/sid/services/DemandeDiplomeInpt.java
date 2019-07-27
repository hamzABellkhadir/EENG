package org.sid.services;

import java.util.List;
import java.util.Optional;

import org.sid.dao.DocumentRepository;
import org.sid.dao.EtudiantRepository;
import org.sid.entity.Demande_diplome;
import org.sid.entity.Document;
import org.sid.entity.Etudiant;
import org.sid.services.interfaces.DemandeDiplomeMetier;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
@Service
@Transactional
public class DemandeDiplomeInpt implements DemandeDiplomeMetier{

	
	@Autowired
	private DocumentRepository documentRepository;
	@Autowired
	private EtudiantRepository etudiantRepository;
	
	@Override
	public List<Document> getAllDemandeDiplome() {
		// TODO Auto-generated method stub
		return documentRepository.chercherParTypeD("Demande_diplome");
	}

	@Override
	public Document saveOneDemandeDiplome(Demande_diplome dmd) {
		Etudiant et =etudiantRepository.chercher(dmd.getEtudiantid());
		dmd.setEtudiant(et);
		return documentRepository.save(dmd);
	}

	@Override
	public Document UpdateOneDemandeDiplome(Long id, Demande_diplome dmd) {
		dmd.setId_doc(id);
		Etudiant et =etudiantRepository.chercher(dmd.getEtudiantid());
		dmd.setEtudiant(et);
		return documentRepository.save(dmd);
	}

	@Override
	public void deleteOneDemandeDiplome(Long id) {
		// TODO Auto-generated method stub
		documentRepository.deleteById(id);
	}

	@Override
	public Optional<Document> getOneDemandeDiplome(Long id) {
		// TODO Auto-generated method stub
		return documentRepository.findById(id);
	}

}
