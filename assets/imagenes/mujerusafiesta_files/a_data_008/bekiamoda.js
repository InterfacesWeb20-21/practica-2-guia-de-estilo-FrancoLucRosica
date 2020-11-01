SMC.Config.process({
    "configType": "default",
    "domain": null,
    "actions": [{
        "regex": [".*"],
        "actions": {
            "Exelate": {
            },
            "GPTConfig": {
                "log": true,
                "logProbability":8/*,
                "slots":{},
                "sizes":{
                    "300x250":{reload:15000,relocate:5000},
                    "300x600":{reload:15000,relocate:5000}
                }*/
            }
            /*'ImageLoader':[{
                'url':'https://stats.smartclip-services.com:8889/generic.php?type=counter',
                'throttle':5
                

            }]*/
        }
    }]
});
