package kim.archive.common.jpa;

import java.io.Serializable;

public interface Entity<K> extends Serializable {
	public K getPk();
	public String hashCodeToHex();
}
