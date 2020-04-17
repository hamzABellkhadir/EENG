package org.sid;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Collection;

import org.sid.dao.AdministrationRepository;
import org.sid.dao.DocumentRepository;
import org.sid.dao.EtudiantRepository;
import org.sid.entity.Administration;
import org.sid.entity.Attestation_scolarite;
import org.sid.entity.Convention_stage;
import org.sid.entity.Demande_diplome;
import org.sid.entity.Demande_stage;
import org.sid.entity.Document;
import org.sid.entity.Etudiant;
import org.sid.entity.Relve_notes;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class PfeApplication implements CommandLineRunner{

	@Autowired
    private DocumentRepository documentRepository;
	
	@Autowired
    private AdministrationRepository administrationRepository;
	
	@Autowired
    private EtudiantRepository etudiantRepository;
	public static void main(String[] args) {
		SpringApplication.run(PfeApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		DateFormat df = new SimpleDateFormat("dd/MM/yyyy");
		
		Administration adm1 = administrationRepository.save(new Administration("admin1", "admin1",
				"root", "ahmed", "ouriaghi", "hay najah 40 Oujda", "ABCDEFG@gmail.com", "0612345678", "default.png", "FB123456"));
		
       Etudiant ut2 = etudiantRepository.save(new Etudiant("user1", "user","Belkhadir", "Hamza", "hay chohadae Taourirt",
				"hamzabk351@gmail.com","062545", "user1.jpg", "SX14173" , "user1",
				"h144010778", "Informatique", "dai", "2018"));
		Etudiant ut3 = etudiantRepository.save(new Etudiant("user2", "user","ZBAIRI", "Mohammed", "Lot Elmassira 07 Taourirt",
				"mohammedzbairi@gmail.com","062545", "user2.png", "SX14173" , "user2",
				"h144010778", "Informatique", "dai", "2018"));
		Administration adm4 = administrationRepository.save(new Administration("admin2", "admin2", "root", "belkhadir", "hamza", "hay najah 40 Oujda"
				,"hamzabk351@gmail.com", "0612345678", "default.png" , "FB123456"));
		 
	}

}
