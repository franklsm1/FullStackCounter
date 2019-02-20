package info.seanfranklin.spring.counter;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
class Counter {
    private int value;
    private String text;
}