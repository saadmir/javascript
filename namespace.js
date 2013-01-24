
(function(app){
  if (typeof app != 'string' || !app.length) return;

  namespace = function(ns){
    var _root, _parent, _parts;

    if (typeof window == 'object' && window){ 
      _root = window;
    } else if (typeof GLOBAL == 'object' && GLOBAL){ 
      _root = GLOBAL;
    } else {
      return false;
    }
    
    if (!(app in _root) || (typeof _root[app] != 'object')){
      _root[app] = {};       
    }

    _parent = _root[app];       
    if (typeof ns == 'string' && ns.length) {                                                                                                             
      _parts = ns.split('.');                                                                                                        
      if (_parts && _parts[0] == app) _parts.shift();                                                                                                                  
                                                                                                      
      for (var _i = 0; _i < _parts.length; _i++) {                                                                                          
        if (typeof _parent[_parts[_i]] == 'undefined') {                                                                                
          _parent[_parts[_i]] = {};                                                                                                    
        }                                                                                                                             
        _parent = _parent[_parts[_i]];                                                                                                    
      }                                                                                                                                 
    }                                                                                                                                 
    return _parent;                                                                                                                    
  };
}(appname || 'ROOT'));

