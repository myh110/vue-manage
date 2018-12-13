export default {
    // localstorage
    ls: {
        get ( name ) {
            if ( typeof name !== "string" ) {
                return {};
            }

            return JSON.parse( localStorage.getItem( name ) );
        },
        set ( name, value ) {
            if ( typeof name !== "string" || typeof value === "undefined" ) {
                return;
            }

            localStorage.setItem( name, JSON.stringify( value ) );
        },
        del ( name ) {
            if ( typeof name !== "string" ) {
                return {};
            }

            localStorage.removeItem( name );
        }
    },

    cookie: {
        set ( name, value, expiredays ) {
            if ( typeof name !== "string" || typeof value !== "string" ) {
                return;
            }

            var exdate = new Date();

            exdate.setDate( exdate.getDate() + expiredays );
            document.cookie = name + "=" + encodeURI( value ) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());
        },
        get ( name ) {
            if ( typeof name !== "string" ) {
                return "";
            }
            
            if ( document.cookie.length > 0 ) {
                var start = document.cookie.indexOf( name + "=" );
                if ( start != -1 ) {
                    start = start + name.length + 1;
                    var end = document.cookie.indexOf( ";", start );
                    return decodeURI( document.cookie.substring( start, end === -1 ? document.cookie.length : end ) );
                }
            }

            return "";
        },
        del ( name ) {
            this.set( name, "", 0 );
        }
    }
};