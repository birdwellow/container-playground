package net.fvogel.model;

import lombok.Data;

@Data
public class WikipediaChange {

    private boolean bot;
    private String comment;
    private Long id;
    private String log_action;
    private String log_action_comment;
    private String log_id;

//            "log_params": {
//        "duration": "45 days",
//                "flags": "nocreate,noemail"
//    },
    private String log_type;
//            "meta": {
//        "domain": "ru.wikipedia.org",
//                "dt": "2018-03-16T13:45:50+00:00",
//                "id": "57057fec-2920-11e8-9ff8-141877613762",
//                "request_id": "d7cdbba3-59c5-40f0-afc4-4b9ae38caf23",
//                "schema_uri": "mediawiki/recentchange/1",
//                "topic": "eqiad.mediawiki.recentchange",
//                "uri": "https://ru.wikipedia.org/wiki/%D0%A3%D1%87%D0%B0%D1%81%D1%82%D0%BD%D0%B8%D0%BA:99.195.115.235",
//                "partition": 0,
//                "offset": 776867581
//    },
private String namespace;
    private String parsedcomment;
    private String server_name;
    private String server_script_path;
    private String server_url;
    private Long timestamp;
    private String title;
    private String type;
    private String user;
    private String wiki;
}
