package net.fvogel.integration;

import java.util.Map;

public abstract class RestServiceClient {

    protected String appendQueryParams(String url, Map<String, Object> queryParams) {
        if (!url.contains("?")) {
            url += "?";
        }
        for (String key : queryParams.keySet()) {
            url += "&" + key + "=" + queryParams.get(key);
        }
        return url;
    }


}
