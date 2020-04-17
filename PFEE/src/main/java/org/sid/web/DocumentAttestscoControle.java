package org.sid.web;

import java.util.Collection;
import java.util.Optional;

import org.sid.entity.Attestation_scolarite;
import org.sid.entity.Document;
import org.sid.entity.Etudiant;
import org.sid.services.DocumentInpt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")
public class DocumentAttestscoControle {
	
	@Autowired
	private DocumentInpt documentInpt;
	
	@RequestMapping(value="/document",method=RequestMethod.GET)
	public Collection<Document> getAllDocument(){
		return documentInpt.getAlldocument();
	}
	
	@RequestMapping(value="/AttestationScolariter",method=RequestMethod.GET)
	public Collection<Document> getAllDocumentsAtt(){
		return documentInpt.getAllAttestaionScolariter();
	}
	
	@RequestMapping(value="/AttestationScolariter/{id}",method=RequestMethod.GET)
	public Optional<Document> getOneDocument(@PathVariable Long id){
		return documentInpt.getOneAttestaionScolariter(id);
	}
	
	@RequestMapping(value="/AttestationScolariter/{id}",method=RequestMethod.PUT)
	public Document UpdateOneDocument(@PathVariable Long id, @RequestBody Attestation_scolarite atsco){
		return documentInpt.UpdateOneAttestaionScolariter(id, atsco);
	}
	
	
	@RequestMapping(value="/AttestationScolariter",method=RequestMethod.POST)
	public Document SaveOneDocumentatt(@RequestBody Attestation_scolarite atsco){
		return documentInpt.saveOneAttestaionScolariter(atsco);
	}
	
	@RequestMapping(value="/AttestationScolariter/{id}",method=RequestMethod.DELETE)
	public boolean deleteOneDocument(@PathVariable Long id){
		 documentInpt.deleteOneAttestaionScolariter(id);
		 return true;
	}
	
	//     chercher un typedoc and user---------------------------------
	
 	@SuppressWarnings("deprecation")
	@RequestMapping(value="/chercherDocuserandtypedoc",method=RequestMethod.GET )
	public Page<Document> chercherEtud(@RequestParam("typedoc") String typedoc, @RequestParam("user") String user) {
		// TODO Auto-generated method stub
 		
 		if(documentInpt.chercherDocuserandtype(typedoc, user, new PageRequest(0, 5)).isEmpty()) {
 			return null;
 		}else {
 			return documentInpt.chercherDocuserandtype(typedoc, user, new PageRequest(0, 5));
 		}
	}
}
