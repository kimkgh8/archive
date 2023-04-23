package kim.archive.user.entity;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import kim.archive.common.jpa.BaseEntity;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@ToString(onlyExplicitlyIncluded = true, callSuper = true)
@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name = "USER")
public class UserEntity extends BaseEntity<Long> {

	@Id
	@Column(name = "USER_ID")
	private Long userId;

	@Column(name = "ID")
	private String id;

	@Column(name = "PASSWORD")
	private String password;

	@Column(name = "NAME")
	private String name;

	@Column(name = "EMAIL")
	private String email;

	@Column(name = "PHONE_NUMBER")
	private String phoneNumber;

	@Override
	public Long getPk() {
		// TODO Auto-generated method stub
		throw new UnsupportedOperationException("Unimplemented method 'getPk'");
	}
}
