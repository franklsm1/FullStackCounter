package info.seanfranklin.spring.counter;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CounterController {
    @GetMapping("/count")
    public Counter getInitialCountRequest() {
        return Counter.builder()
                .text("Text from Spring Backend")
                .value(7)
                .build();
    }
}