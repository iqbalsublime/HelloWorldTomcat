package by.intexsoft.helloworldtomcat.repository;

import by.intexsoft.helloworldtomcat.model.Picture;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

/**
 * Interface for {@link JpaRepository}
 */
public interface PictureRepository extends JpaRepository<Picture, Integer> {

    /**
     * Custom method to find picture by name
     * @param name
     * @return {@link Picture}
     */
    Picture findByName(@Param("name") String name);
}