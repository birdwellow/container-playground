package net.fvogel;

import net.fvogel.model.ServiceInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
public class BaseController {

    @RequestMapping()
    ServiceInfo index() {
        ServiceInfo serviceInfo = new ServiceInfo();
        return serviceInfo;
    }

}
