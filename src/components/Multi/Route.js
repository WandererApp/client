function Route(id, type) {

    var _id = id ? id : 'drawnRoute';
    var _type;
    var _source = new Source();

    Object.defineProperty(this, 'id', {
        get: function () { return _id; }
    });

    Object.defineProperty(this, 'type', {
        get: function () { return _type },
        set: function (type) {
            _type = type;
        }
    });

    Object.defineProperty(this, 'source', {
        get: function () { return _source }
    });

    this.layout = {
        "line-join": "round",
        "line-cap": "round"
    }

    this.paint = {
        "line-color": genRandomColor(),
        "line-width": 8
    }

    function genRandomColor() {
        return '#' + Math.floor(Math.random() * 16777215).toString(16);
    }
}

function Source() {

    var _type;
    var _data = new Data();

    Object.defineProperty(this, 'type', {
        get: function () { return _type },
        set: function (type) {
            _type = type;
        }
    })

    Object.defineProperty(this, 'data', {
        get: function () { return _data }
    })

}

function Data() {

    var _type, _properties
    var _geometry = new Geometry();

    Object.defineProperty(this, 'type', {
        get: function () { return _type },
        set: function (type) {
            _type = type;
        }
    });

    Object.defineProperty(this, 'properties', {
        get: function () { return _properties },
        set: function (properties) {
            _properties = properties;
        }
    });

    Object.defineProperty(this, 'geometry', {
        get: function () { return _geometry }
    });

}

function Geometry() {

    var _type, _coordinates;

    Object.defineProperty(this, 'type', {
        get: function () { return _type }
    });

    Object.defineProperty(this, 'coordinates', {
        get: function () { return _coordinates },
        set: function (coordinates) {
            if (Array.isArray(coordinates)) {
                _coordinates = coordinates
            }
            else {
                throw new Error('not a array nigger')
            }
        }
    });

    this.addWayPoint = function (longitude, latitude) {
        _coordinates.push([longitude, latitude]);
    }

    this.removeWayPoint = function (index) {
        _coordinates = _coordinates.splice(index, 1);
    }
}
