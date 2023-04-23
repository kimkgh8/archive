package kim.archive.user.dto;

import java.math.BigInteger;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.SuperBuilder;


@Getter
@Setter
@SuperBuilder
@NoArgsConstructor
public class UserDto {
	private BigInteger userId;

	private String id;

	private String password;

	private String name;

	private String email;

	private String phoneNumber;
}
