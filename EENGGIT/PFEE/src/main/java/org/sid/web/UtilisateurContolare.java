package org.sid.web;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

import org.sid.dao.AdministrationRepository;
import org.sid.dao.DocumentRepository;
import org.sid.dao.EtudiantRepository;
import org.sid.entity.Administration;
import org.sid.entity.Convention_stage;
import org.sid.entity.Document;
import org.sid.entity.Etudiant;

import org.sid.services.DocumentInpt;

import org.sid.services.UtilisateurInpt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")
public class UtilisateurContolare {
	@Autowired
	private UtilisateurInpt utilisateurInpt;
	

	
	
	@RequestMapping(value="/etudiant",method=RequestMethod.GET)
	public Collection<Etudiant> getall(){
		return utilisateurInpt.getAllEtudiant();
	}
	@RequestMapping(value = "/administration",method=RequestMethod.GET)
	public Collection<Administration> getallA(){
		return utilisateurInpt.getAllAdm();
	}
	
	@RequestMapping(value="/administration/{id}",method=RequestMethod.GET )
	public Optional<Administration> getOneAdm(@PathVariable String id){
	return utilisateurInpt.getOneAdm(id);
	}
	@RequestMapping(value="/etudiant/{id}",method=RequestMethod.GET )
	public Optional<Etudiant> getOneEtudiant(@PathVariable String id){
	return utilisateurInpt.getOneEtudiant(id);
	}
	
 	@RequestMapping(value="/administration",method=RequestMethod.POST )
		public Administration SaveOneAdm(@RequestBody Administration adm) {
		return utilisateurInpt.SaveOneAdm(adm);
	}
 	@RequestMapping(value="/etudiant",method=RequestMethod.POST )
		public Etudiant SaveOneEtudiant(@RequestBody Etudiant etudiant) {
		return utilisateurInpt.SaveOneEtudiant(etudiant);
	}
 	
 	@RequestMapping(value="/administration/{id}",method=RequestMethod.DELETE )
 		public boolean deleteOneAdm(@PathVariable String id) {
 		utilisateurInpt.deleteOneAdm(id);
 		return true;
 	}
 	@RequestMapping(value="/etudiant/{id}",method=RequestMethod.DELETE )
		public boolean deleteOneEtudiant(@PathVariable String id) {
		utilisateurInpt.deleteOneEtudiant(id);
		return true;
	}
 	
 	@RequestMapping(value="/administration/{id}",method=RequestMethod.PUT )
 	public Administration UpdateOneAdm(@PathVariable String id,@RequestBody Administration adm) {
 		return utilisateurInpt.UpdateOneAdm(id, adm);
 	}
 	
 	
 	@RequestMapping(value="/etudiant/{id}",method=RequestMethod.PUT )
 	public Etudiant UpdateOneEtudiant(@PathVariable String id,@RequestBody Etudiant etudiant) {
 		return utilisateurInpt.UpdateOneEtudiant(id, etudiant);
 	}
 	

 	//------------------------------chercher etudaint admine
 	@RequestMapping(value="/chercheretudiant",method=RequestMethod.GET )
	public Etudiant chercherEtud(@RequestParam("login") String login, @RequestParam("mdp") String mdp) {
		// TODO Auto-generated method stub
		return utilisateurInpt.chercherEtudiant(login, mdp);
	}
 	
 	
 	@RequestMapping(value="/chercheradmine",method=RequestMethod.GET )
	public Administration chercheradm(@RequestParam("login") String login, @RequestParam("mdp") String mdp) {
		// TODO Auto-generated method stub
		return utilisateurInpt.chercherAdm(login, mdp);
	}
 	
 	//--------------------------------reclamation
 	
 	/*
	@RequestMapping(value="/ConventionStage/{id}",method=RequestMethod.GET)
	public Optional<Document> getOneConventionStage(@PathVariable Long id){
		return conventionStageInpt.getOneConventionStage(id);
	}
	
	@RequestMapping(value="/ConventionStage/{id}",method=RequestMethod.PUT)
	public Document UpdateOneConventionStage(@PathVariable Long id, @RequestBody Convention_stage cnvs){
		return conventionStageInpt.UpdateOneConventionStage(id, cnvs);
	}
	
	@RequestMapping(value="/ConventionStage",method=RequestMethod.POST)
	public Document saveOneConventionStage(@RequestBody Convention_stage cnvs){
		return conventionStageInpt.saveOneConventionStage(cnvs);
	}
	
	@RequestMapping(value="/ConventionStage/{id}",method=RequestMethod.DELETE)
	public boolean deleteOneDocument(@PathVariable Long id){
		conventionStageInpt.deleteOneConventionStager(id);
		 return true;
	}
 	 */
 	
}
