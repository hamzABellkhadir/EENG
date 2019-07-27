package org.sid.services;

import java.util.List;
import java.util.Optional;

import org.sid.dao.DocumentRepository;
import org.sid.dao.EtudiantRepository;
import org.sid.entity.Document;
import org.sid.entity.Etudiant;
import org.sid.entity.Relve_notes;
import org.sid.services.interfaces.RelveNoteMetier;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class RelveNoteInpt implements RelveNoteMetier{

	@Autowired
	private DocumentRepository documentRepository;
	@Autowired
	private EtudiantRepository etudiantRepository;
	
	@Override
	public List<Document> getAllRelveNote() {
		// TODO Auto-generated method stub
		return documentRepository.chercherParTypeD("relve_notes");
	}

	@Override
	public Document saveOneRelveNote(Relve_notes ds) {
		Etudiant et =etudiantRepository.chercher(ds.getEtudiantid());
		ds.setEtudiant(et);
		return documentRepository.save(ds);
	}

	@Override
	public Document UpdateOneRelveNote(Long id, Relve_notes ds) {
		ds.setId_doc(id);
		Etudiant et =etudiantRepository.chercher(ds.getEtudiantid());
		ds.setEtudiant(et);
		return documentRepository.save(ds);
	}

	@Override
	public void deleteOneRelveNote(Long id) {
		// TODO Auto-generated method stub
		documentRepository.deleteById(id);
	}

	@Override
	public Optional<Document> getOneRelveNote(Long id) {
		// TODO Auto-generated method stub
		return documentRepository.findById(id);
	}

}
