package kim.archive.user;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import kim.archive.user.dto.UserDto;
import kim.archive.user.entity.UserEntity;
import kim.archive.user.repository.UserRepository;
import kim.archive.user.service.UserService;

@SpringBootTest
@Disabled
class LoginTest {
	@Autowired
	private UserService userService;
	@Autowired
	private UserRepository userRepository;

	@Test
	void login() {


		UserEntity userEntity =UserEntity.builder()
				.userId(1L)
				.id("Test")
				.password("password")
				.build();
		userRepository.save(userEntity);

		UserDto dto = new UserDto();
		dto.setId("Test");
		dto.setPassword("password");

		boolean result = userService.login(dto);
		assertEquals(true, result);
	}
}
