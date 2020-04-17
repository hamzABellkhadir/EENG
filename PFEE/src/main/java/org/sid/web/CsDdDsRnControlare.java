package org.sid.web;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

import org.sid.entity.Attestation_scolarite;
import org.sid.entity.Convention_stage;
import org.sid.entity.Demande_diplome;
import org.sid.entity.Demande_stage;
import org.sid.entity.Document;
import org.sid.entity.Relve_notes;
import org.sid.services.ConventionStageInpt;
import org.sid.services.DemandeDiplomeInpt;
import org.sid.services.DemandeStageInpt;
import org.sid.services.RelveNoteInpt;
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
public class CsDdDsRnControlare {

	@Autowired
	private ConventionStageInpt conventionStageInpt;
	
	@Autowired
	private DemandeDiplomeInpt demandeDiplomeInpt;
	
	@Autowired
	private DemandeStageInpt demandeStageInpt;
	
	@Autowired
	private RelveNoteInpt relveNoteInpt;

	//----------------------------------------------------------------- ConventionStage
	@RequestMapping(value="/getdocbytypeandstatus",method=RequestMethod.GET)
	public Collection<Document> getAllConventionStage(@RequestParam("typedoc") String typedoc,
				@RequestParam("status") String status){
		return conventionStageInpt.getAllConventionStage(typedoc,status);
	}
	
	@RequestMapping(value="/getAllcv",method=RequestMethod.GET)
	public List<Document> getAllcv() {
		// TODO Auto-generated method stub
		return conventionStageInpt.getAllcv();
	}
	
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
	
	@RequestMapping(value="/CDS/{apogee}",method=RequestMethod.GET)
	public Collection<Document> chercher(@PathVariable String apogee){
		return conventionStageInpt.getALLParTypeDandUser(apogee);
	}
	
	//------------------------------------------------------- DemandeDiplome
	
	@RequestMapping(value="/DemandeDiplome",method=RequestMethod.GET)
	public Collection<Document> getAllDemandeDiplome(){
		return demandeDiplomeInpt.getAllDemandeDiplome();
	}
	
	@RequestMapping(value="/DemandeDiplome/{id}",method=RequestMethod.GET)
	public Optional<Document> getOneDemandeDiplome(@PathVariable Long id){
		return demandeDiplomeInpt.getOneDemandeDiplome(id);
	}
	
	@RequestMapping(value="/DemandeDiplome/{id}",method=RequestMethod.PUT)
	public Document UpdateOneDemandeDiplome(@PathVariable Long id, @RequestBody Demande_diplome dmd){
		return demandeDiplomeInpt.UpdateOneDemandeDiplome(id, dmd);
	}
	
	
	@RequestMapping(value="/DemandeDiplome",method=RequestMethod.POST)
	public Document saveOneDemandeDiplome(@RequestBody Demande_diplome dmd){
		return demandeDiplomeInpt.saveOneDemandeDiplome(dmd);
	}
	
	@RequestMapping(value="/DemandeDiplome/{id}",method=RequestMethod.DELETE)
	public boolean deleteOneDemandeDiplome(@PathVariable Long id){
		demandeDiplomeInpt.deleteOneDemandeDiplome(id);
		 return true;
	}
	
	
	//------------------------------------------------------- demandeStage
	
	@RequestMapping(value="/demandeStage",method=RequestMethod.GET)
	public Collection<Document> getAlldemandeStage(){
		return demandeStageInpt.getAllDemandeStage();
	}
	
	@RequestMapping(value="/demandeStage/{id}",method=RequestMethod.GET)
	public Optional<Document> getOnedemandeStage(@PathVariable Long id){
		return demandeStageInpt.getOneDemandeStage(id);
	}
	
	@RequestMapping(value="/demandeStage/{id}",method=RequestMethod.PUT)
	public Document UpdateOnedemandeStage(@PathVariable Long id, @RequestBody Demande_stage ds){
		return demandeStageInpt.UpdateOneDemandeStage(id, ds);
	}
	
	
	@RequestMapping(value="/demandeStage",method=RequestMethod.POST)
	public Document saveOnedemandeStage(@RequestBody Demande_stage ds){
		return demandeStageInpt.saveOneDemandeStage(ds);
	}
	
	@RequestMapping(value="/demandeStage/{id}",method=RequestMethod.DELETE)
	public boolean deleteOnedemandeStage(@PathVariable Long id){
		demandeStageInpt.deleteOneDemandeStage(id);
		 return true;
	}
	
	//------------------------------------------------------- relveNote
	
	@RequestMapping(value="/relveNote",method=RequestMethod.GET)
	public Collection<Document> getAllrelveNote(){
		return relveNoteInpt.getAllRelveNote();
	}
	
	@RequestMapping(value="/relveNote/{id}",method=RequestMethod.GET)
	public Optional<Document> getOnerelveNote(@PathVariable Long id){
		return relveNoteInpt.getOneRelveNote(id);
	}
	
	@RequestMapping(value="/relveNote/{id}",method=RequestMethod.PUT)
	public Document UpdateOnerelveNote(@PathVariable Long id, @RequestBody Relve_notes ds){
		return relveNoteInpt.UpdateOneRelveNote(id, ds);
	}
	
	
	@RequestMapping(value="/relveNote",method=RequestMethod.POST)
	public Document saveOnerelveNote(@RequestBody Relve_notes ds){
		return relveNoteInpt.saveOneRelveNote(ds);
	}
	
	@RequestMapping(value="/relveNote/{id}",method=RequestMethod.DELETE)
	public boolean deleteOnerelveNote(@PathVariable Long id){
		relveNoteInpt.deleteOneRelveNote(id);
		 return true;
	}
}
