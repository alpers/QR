package linqr;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class LinkController {

    @GetMapping("/test")
    public String greeting(@RequestParam(name="name", required=false, defaultValue="Linqr") String name, Model model) {
        model.addAttribute("name", name);
        return "test";
    }

}
