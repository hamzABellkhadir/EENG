package org.sid.services;

import java.util.List;
import java.util.Optional;

import org.sid.dao.DocumentRepository;
import org.sid.dao.EtudiantRepository;
import org.sid.entity.Convention_stage;
import org.sid.entity.Document;
import org.sid.entity.Etudiant;
import org.sid.services.interfaces.ConventionStageMetier;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class ConventionStageInpt implements ConventionStageMetier{

	@Autowired
	private DocumentRepository documentRepository;
	@Autowired
	private EtudiantRepository etudiantRepository;
	

	@Override
	public List<Document> getAllConventionStage(String mc,String status) {
		// TODO Auto-generated method stub
		return documentRepository.chercherParTypeDstatus(mc,status);
	}

	@Override
	public Document saveOneConventionStage(Convention_stage cnvs) {
		Etudiant et =etudiantRepository.chercher(cnvs.getEtudiantid());
		cnvs.setEtudiant(et);
		return documentRepository.save(cnvs);
	}

	@Override
	public Document UpdateOneConventionStage(Long id, Convention_stage cnvs) {
		cnvs.setId_doc(id);
		Etudiant et =etudiantRepository.chercher( cnvs.getEtudiantid() );
		cnvs.setEtudiant( et );
		return documentRepository.save( cnvs );
	}

	@Override
	public void deleteOneConventionStager(Long id) {
		// TODO Auto-generated method stub
		documentRepository.deleteById(id);
	}

	@Override
	public Optional<Document> getOneConventionStage(Long id) {
		// TODO Auto-generated method stub
		return documentRepository.findById(id);
	}
	
	@Override
	public List<Document> getALLParTypeDandUser( String user) {
		// TODO Auto-generated method stub
		
		return documentRepository.chercherParTypeDandUser(user);
	}

	@Override
	public List<Document> getAllcv() {
		// TODO Auto-generated method stub
		return documentRepository.chercherParTypeD("convention_stage");
	}

}
