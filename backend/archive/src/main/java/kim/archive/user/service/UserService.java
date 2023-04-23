package kim.archive.user.service;

import org.springframework.stereotype.Service;

import kim.archive.user.dto.UserDto;
import kim.archive.user.entity.QUserEntity;
import kim.archive.user.entity.UserEntity;
import kim.archive.user.repository.UserRepository;

@Service
public class UserService {

	private UserRepository userRepository;

	public UserService(UserRepository userRepository) {
		this.userRepository = userRepository;
	}

	public boolean login(UserDto userDto) {
		UserEntity userEntity = userRepository.findOne(QUserEntity.userEntity.id.eq(userDto.getId())).orElse(null);
		return userEntity != null;
	}
}
