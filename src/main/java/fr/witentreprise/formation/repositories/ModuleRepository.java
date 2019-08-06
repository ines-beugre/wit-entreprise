package fr.witentreprise.formation.repositories;

import fr.witentreprise.formation.models.Module;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ModuleRepository extends MongoRepository<Module, String> {
}
