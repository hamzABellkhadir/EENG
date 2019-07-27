package org.sid.services;

import java.util.List;
import java.util.Optional;

import org.sid.dao.AdministrationRepository;
import org.sid.dao.EtudiantRepository;

import org.sid.entity.Administration;
import org.sid.entity.Etudiant;
import org.sid.services.interfaces.UtilisateurMetier;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
@Service
@Transactional
public class UtilisateurInpt implements UtilisateurMetier {
	
	
	@Autowired
	private AdministrationRepository administrationRepository;
	
	@Autowired
	private EtudiantRepository etudiantRepository;
	


	@Override
	public List<Administration> getAllAdm() {
		// TODO Auto-generated method stub
		return administrationRepository.findAll();
	}

	@Override
	public List<Etudiant> getAllEtudiant() {
		// TODO Auto-generated method stub
		return etudiantRepository.findAll();
	}

	@Override
	public Optional<Administration> getOneAdm(String id) {
		// TODO Auto-generated method stub
		return administrationRepository.findById(id);
	}

	@Override
	public Optional<Etudiant> getOneEtudiant(String id) {
		// TODO Auto-generated method stub
		return etudiantRepository.findById(id);
	}

	@Override
	public Administration SaveOneAdm(Administration adm) {
		// TODO Auto-generated method stub
		return administrationRepository.save(adm);
	}

	@Override
	public Etudiant SaveOneEtudiant(Etudiant etudiant) {
		// TODO Auto-generated method stub
		return etudiantRepository.save(etudiant);
	}

	@Override
	public void deleteOneAdm(String id) {
		// TODO Auto-generated method stub
		administrationRepository.deleteById(id);
	}

	@Override
	public void deleteOneEtudiant(String id) {
		// TODO Auto-generated method stub
		etudiantRepository.deleteById(id);
	}

	@Override
	public Administration UpdateOneAdm(String id, Administration adm) {
		// TODO Auto-generated method stub
		adm.setN_responsable(id);
		return administrationRepository.save(adm);
	}

	@Override
	public Etudiant UpdateOneEtudiant(String id, Etudiant etudiant) {
		// TODO Auto-generated method stub
		etudiant.setN_apogee(id);
		return etudiantRepository.save(etudiant);
	}

    //-------------------------------------------
	
	public Etudiant chercherEtudiant(String login, String mdp) {
		// TODO Auto-generated method stub
		return etudiantRepository.chercherET(login, mdp);
	}
	
	public Administration chercherAdm(String login, String mdp) {
		// TODO Auto-generated method stub
		return administrationRepository.chercherAD(login, mdp) ;
	}
}
