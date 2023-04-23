package kim.archive;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class ArchiveApplication {

	public static void main(String[] args) {
		SpringApplication.run(ArchiveApplication.class, args);
	}

}
