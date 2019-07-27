package org.sid.services.interfaces;

import java.util.List;
import java.util.Optional;

import org.sid.entity.Administration;
import org.sid.entity.Etudiant;


public interface UtilisateurMetier {
	
	// list
	public List<Administration> getAllAdm();
	public List<Etudiant> getAllEtudiant();
	// one
	public Optional<Administration> getOneAdm(String id);
	public Optional<Etudiant> getOneEtudiant(String id);
	
	//save
	public Administration SaveOneAdm(Administration adm);
	public Etudiant SaveOneEtudiant(Etudiant etudiant);	
	
	// delete
	public void deleteOneAdm(String id);
	public void deleteOneEtudiant(String id);
	
	//update
	public Administration UpdateOneAdm(String id,Administration adm);
	public Etudiant UpdateOneEtudiant(String id,Etudiant etudiant);
	
	
	
}
