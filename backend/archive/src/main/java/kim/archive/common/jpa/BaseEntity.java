package kim.archive.common.jpa;

import javax.persistence.Embedded;
import javax.persistence.MappedSuperclass;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;

import lombok.*;

@ToString(onlyExplicitlyIncluded = true)
@MappedSuperclass
public abstract class BaseEntity<K> implements Entity<K> {
	@Getter
	@Setter
	@Embedded
	private Audit audit = new Audit();

	@ToString.Include(name = "hashCode")
	public final String hashCodeToHex() {
		return Integer.toHexString(hashCode());
	}
}
