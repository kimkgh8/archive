package kim.archive.user.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import kim.archive.user.dto.UserDto;
import kim.archive.user.service.UserService;

@RestController
@RequestMapping("/rest")
public class UserRestController {

	private UserService userService;

	public UserRestController(UserService userService) {
		this.userService = userService;
	}

	@PostMapping("/login")
    public Boolean login(UserDto userDto) {
        return userService.login(userDto);
    }
}
