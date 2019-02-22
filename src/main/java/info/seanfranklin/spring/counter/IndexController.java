package info.seanfranklin.spring.counter;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class IndexController {
    @GetMapping({"/home", "/blog"})
    public String index() {
        return "index.html";
    }
}
