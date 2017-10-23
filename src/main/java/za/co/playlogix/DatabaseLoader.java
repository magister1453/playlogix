package za.co.playlogix;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {

    private final WatchRepository repository;

    @Autowired
    public DatabaseLoader(WatchRepository repository) {
        this.repository = repository;
    }

    @Override
    public void run(String... strings) throws Exception {
        this.repository.save(new Watch("Swatch classic", 500.00F, 1));
        this.repository.save(new Watch("Swatch Sport", 1500.00F, 3));
        this.repository.save(new Watch("Rolex Gold",10000.00F, 3));
    }
}
