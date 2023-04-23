package kim.archive.common.jpa;

import java.time.ZonedDateTime;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import lombok.*;

@Embeddable
@Builder
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PRIVATE)
public class Audit implements Entity<Void> {
	@Getter
	@Setter
	@ToString.Include
	@Column(name = "REGISTRANT", nullable = true, insertable = true, updatable = false)
	private String register;

	@Getter
	@Setter
	@ToString.Include
	@Column(name = "MODIFIER", nullable = true, insertable = true, updatable = true)
	private String modifier;

	@Getter
	@ToString.Include
	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "REGISTRATION_DATE", nullable = true, insertable = true, updatable = false)
	private Date createdDate;

	@Getter
	@ToString.Include
	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "MODIFICATION_DATE", nullable = true, insertable = true, updatable = true)
	private Date lastModifiedDate;

	@Override
	public Void getPk() {
		return null;
	}

	@ToString.Include(name = "hashCode")
	public final String hashCodeToHex() {
		return Integer.toHexString(hashCode());
	}
}
