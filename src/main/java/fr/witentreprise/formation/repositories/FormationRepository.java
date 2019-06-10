package fr.witentreprise.formation.repositories;

import fr.witentreprise.formation.models.Formation;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FormationRepository extends MongoRepository<Formation, String> {
}
