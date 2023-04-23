package kim.archive.user.repository;

import org.springframework.transaction.annotation.Transactional;

import kim.archive.common.jpa.BaseRepository;
import kim.archive.user.entity.UserEntity;

@Transactional
public interface UserRepository extends BaseRepository<UserEntity, Long> {

}
