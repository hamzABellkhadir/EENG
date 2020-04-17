package org.sid.dao;

import java.util.List;

import org.sid.entity.Document;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface DocumentRepository extends JpaRepository<Document, Long>{
	@Query("select c from Document c where c.typedoc like :x and c.status like :status") 
	public List<Document>  chercherParTypeDstatus(@Param(value="x")String mc,@Param(value="status")String status);
	
	@Query("select c from Document c where c.typedoc like :x ") 
	public List<Document>  chercherParTypeD(@Param(value="x")String mc);
	
	@Query("select c from Document c where c.typedoc like :x and c.etudiantid like :user") 
	public Page<Document>  chercherParTypeDanduser(@Param(value="x")String mc,@Param(value="user")String user, Pageable pageable );
	
	@Query("select c from Document c where  c.etudiantid like :u") 
	public List<Document>  chercherParTypeDandUser(@Param(value="u")String user);
}
