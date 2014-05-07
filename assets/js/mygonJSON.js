var data = {
    "customizations": [
        {"id": 1,
            "slot_icons": [
            {
                "id": 1,
                "name": "backpack",
                "weight": 1
            },
            {
                "id": 2,
                "name": "scuba",
                "weight": 2
            },
            {
                "id": 3,
                "name": "surf",
                "weight": 2
            },
            {
                "id": 4,
                "name": "mountaineer",
                "weight": 2
            },
            {
                "id": 5,
                "name": "explorer",
                "weight": 1
            }
            ]
        }
    ]
};


function where(obj, key, val) {
    var objects = [];
    for (var i in obj) {
        if (!obj.hasOwnProperty(i)) continue;
        if (typeof obj[i] == 'object') {
            objects = objects.concat(where(obj[i], key, val));
        } else if (i == key && obj[key] == val) {
            objects.push(obj);
        }
    }
    return objects;
}