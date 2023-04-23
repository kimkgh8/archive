package kim.archive.common.jpa;

import java.io.Serializable;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;
import org.springframework.data.repository.NoRepositoryBean;

@NoRepositoryBean
public interface BaseRepository<E extends Serializable, K> extends JpaRepository<E, K>, QuerydslPredicateExecutor<E>  {
}
